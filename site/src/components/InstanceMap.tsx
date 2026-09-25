import { useEffect, useRef, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Map as MapIcon, Maximize2, Minus, Plus, X } from 'lucide-react';
import type { InstanceMap as InstanceMapData, MapFloor } from '../types';
import { href } from '../lib/router';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

/**
 * The single-file build (vite.config.single.ts) leaves the map images out: they
 * are separate files under public/maps/, and that build must stay one HTML file.
 */
export const MAPS_INCLUDED = import.meta.env.VITE_SINGLE_FILE !== '1';

const SHADING_NOTE = 'Grey shading is walkable ground from the server navmesh where the client has no minimap art.';

/** Floor switcher: a segmented control with the boss count per floor. Arrow keys move between floors. */
function FloorTabs({
  floors,
  active,
  onSelect,
  idPrefix,
  dark,
}: {
  floors: MapFloor[];
  active: number;
  onSelect: (i: number) => void;
  idPrefix: string;
  dark?: boolean;
}) {
  if (floors.length < 2) return null;
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : floors.length - 1)) % floors.length;
    onSelect(next);
    document.getElementById(`${idPrefix}-tab-${next}`)?.focus();
  };
  return (
    <div
      role="tablist"
      aria-label="Floors"
      className={cn(
        'no-scrollbar inline-flex max-w-full items-center gap-0.5 overflow-x-auto rounded-md border p-0.5',
        dark ? 'border-white/15 bg-white/5' : 'bg-muted/60',
      )}
      onKeyDown={onKeyDown}
    >
      {floors.map((f, i) => (
        <button
          key={f.floor}
          id={`${idPrefix}-tab-${i}`}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-controls={`${idPrefix}-panel`}
          tabIndex={i === active ? 0 : -1}
          onClick={() => onSelect(i)}
          className={cn(
            'inline-flex h-7 shrink-0 items-center gap-1.5 rounded-[5px] px-2.5 text-[13px] font-medium transition-colors',
            dark
              ? i === active
                ? 'bg-white/15 text-white'
                : 'text-white/70 hover:text-white'
              : i === active
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {f.label}
          {f.markers.length ? <span className="tabular opacity-60">{f.markers.length}</span> : null}
        </button>
      ))}
    </div>
  );
}

function Markers({ slug, floor, onPick }: { slug: string; floor: MapFloor; onPick?: () => void }) {
  return (
    <>
      {floor.markers.map((m) => (
        <a
          key={m.n}
          href={href.section(href.instance(slug), m.anchor)}
          onClick={onPick}
          className="map-marker"
          style={{ left: `${m.x * 100}%`, top: `${m.y * 100}%` }}
          title={`${m.n}. ${m.boss}`}
          aria-label={`${m.n}. ${m.boss}: go to the notes`}
        >
          {m.n}
        </a>
      ))}
    </>
  );
}

const altText = (title: string, f: MapFloor) =>
  f.kind === 'floorplan'
    ? `Floor plan of ${title}, ${f.label}: walkable area from the server navmesh`
    : `Map of ${title}, ${f.label}, from the client minimap textures`;

/** Full-screen map: floor tabs, zoom (buttons, + and -), drag to pan. */
function Lightbox({
  slug,
  title,
  floors,
  active,
  onSelect,
  open,
  onOpenChange,
}: {
  slug: string;
  title: string;
  floors: MapFloor[];
  active: number;
  onSelect: (i: number) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const drag = useRef<{ x: number; y: number; l: number; t: number } | null>(null);
  const floor = floors[active];

  useEffect(() => setZoom(1), [active, open]);

  const vw = typeof window === 'undefined' ? 1200 : window.innerWidth - 32;
  const vh = typeof window === 'undefined' ? 800 : window.innerHeight - 120;
  const fit = Math.min(1, vw / floor.width, vh / floor.height);
  const w = Math.round(floor.width * fit * zoom);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex flex-col text-white outline-none"
          onKeyDown={(e) => {
            if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(4, z * 1.4));
            else if (e.key === '-') setZoom((z) => Math.max(1, z / 1.4));
          }}
        >
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-[#0b0c10] px-3 py-2">
            <DialogPrimitive.Title className="mr-2 text-sm font-semibold">{title}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">Zoom with the buttons or the + and - keys; drag to pan.</DialogPrimitive.Description>
            <FloorTabs floors={floors} active={active} onSelect={onSelect} idPrefix={`lb-${slug}`} dark />
            <span className="ml-auto flex items-center gap-1">
              <Button variant="ghost" size="icon-sm" className="text-white hover:bg-white/10 hover:text-white" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(1, z / 1.4))} disabled={zoom <= 1}>
                <Minus />
              </Button>
              <span className="w-12 text-center text-xs tabular text-white/70" aria-live="polite">
                {Math.round(zoom * 100)}%
              </span>
              <Button variant="ghost" size="icon-sm" className="text-white hover:bg-white/10 hover:text-white" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(4, z * 1.4))} disabled={zoom >= 4}>
                <Plus />
              </Button>
              <DialogPrimitive.Close asChild>
                <Button variant="ghost" size="icon-sm" className="ml-1 text-white hover:bg-white/10 hover:text-white" aria-label="Close map">
                  <X />
                </Button>
              </DialogPrimitive.Close>
            </span>
          </div>
          <div
            ref={scroller}
            id={`lb-${slug}-panel`}
            role="tabpanel"
            className="map-frame min-h-0 flex-1 cursor-grab overflow-auto active:cursor-grabbing"
            onPointerDown={(e) => {
              if ((e.target as HTMLElement).closest('a')) return;
              const s = scroller.current;
              if (!s) return;
              drag.current = { x: e.clientX, y: e.clientY, l: s.scrollLeft, t: s.scrollTop };
              s.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const s = scroller.current;
              if (!s || !drag.current) return;
              s.scrollLeft = drag.current.l - (e.clientX - drag.current.x);
              s.scrollTop = drag.current.t - (e.clientY - drag.current.y);
            }}
            onPointerUp={() => (drag.current = null)}
            onPointerCancel={() => (drag.current = null)}
          >
            <div className="flex min-h-full min-w-full items-center justify-center p-4">
              <div className="relative shrink-0" style={{ width: w }}>
                <img src={floor.file} width={floor.width} height={floor.height} alt={altText(title, floor)} draggable={false} className="block h-auto w-full select-none" />
                <Markers slug={slug} floor={floor} onPick={() => onOpenChange(false)} />
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/** The instance map at the top of an instance page: floor tabs, numbered boss
 * markers linked to the boss notes, click to enlarge (zoom and drag to pan). */
export function InstanceMap({ slug, title, map }: { slug: string; title: string; map: InstanceMapData }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const floor = map.floors[Math.min(active, map.floors.length - 1)];
  const hasShading = map.floors.some((f) => f.kind === 'minimap');

  if (!MAPS_INCLUDED) {
    return (
      <aside className="flex items-start gap-3 rounded-lg border px-4 py-3 text-[13px] text-muted-foreground" aria-label="Map">
        <MapIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          This single-file edition leaves out the instance maps ({map.floors.length} {map.floors.length === 1 ? 'floor' : 'floors'}); they are in the multi-file build.
        </span>
      </aside>
    );
  }

  const others = map.floors.filter((f) => f !== floor && f.markers.length);
  return (
    <figure className="overflow-hidden rounded-lg border bg-card" aria-labelledby={`map-${slug}-cap`}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b px-3 py-2">
        <p className="flex items-center gap-1.5 text-[13.5px] font-semibold">
          <MapIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" /> Map
        </p>
        <FloorTabs floors={map.floors} active={active} onSelect={setActive} idPrefix={`map-${slug}`} />
        <Button variant="outline" size="xs" className="ml-auto" onClick={() => setOpen(true)}>
          <Maximize2 /> Enlarge
        </Button>
      </div>
      <div id={`map-${slug}-panel`} role={map.floors.length > 1 ? 'tabpanel' : undefined} className="map-frame text-center">
        <div className="relative inline-block max-w-full align-top">
          <button type="button" onClick={() => setOpen(true)} className="block max-w-full cursor-zoom-in" aria-label={`Enlarge the map: ${floor.label}`}>
            <img
              key={floor.file}
              src={floor.file}
              width={floor.width}
              height={floor.height}
              loading="lazy"
              decoding="async"
              alt={altText(title, floor)}
              className="mx-auto block h-auto max-h-[66vh] w-auto max-w-full"
            />
          </button>
          <Markers slug={slug} floor={floor} />
        </div>
      </div>
      <figcaption id={`map-${slug}-cap`} className="space-y-2 border-t px-3 py-2.5 text-xs text-muted-foreground">
        {floor.markers.length ? (
          <ol className="flex flex-wrap gap-x-4 gap-y-1.5 text-[13px]">
            {floor.markers.map((m) => (
              <li key={m.n}>
                <a href={href.section(href.instance(slug), m.anchor)} className="inline-flex items-center gap-1.5 text-foreground hover:underline">
                  <span className="flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-[#ffd100] px-1 text-[10px] font-bold tabular text-[#1a1400]">{m.n}</span>
                  {m.boss}
                </a>
              </li>
            ))}
          </ol>
        ) : null}
        {others.length ? (
          <p>
            Other floors:{' '}
            {others.map((f, i) => (
              <span key={f.floor}>
                {i ? ', ' : ''}
                <button type="button" className="underline decoration-dotted underline-offset-2 hover:text-foreground" onClick={() => setActive(map.floors.indexOf(f))}>
                  {f.label}
                </button>{' '}
                ({f.markers.map((m) => m.n).join(', ')})
              </span>
            ))}
          </p>
        ) : null}
        <p>
          {Object.entries(map.provenance)
            .map(([k, v]) => (k === 'floorplan' ? `Floor plan from ${v}` : `Map: ${v}`))
            .join(' · ')}
          {hasShading ? `. ${SHADING_NOTE}` : '.'}
          {map.floors.some((f) => f.markers.length) ? ' Markers are boss spawn points from the server database.' : ''}
        </p>
      </figcaption>
      <Lightbox slug={slug} title={title} floors={map.floors} active={active} onSelect={setActive} open={open} onOpenChange={setOpen} />
    </figure>
  );
}

import { useEffect, useRef, useState } from 'react';
import type { InstanceMap as InstanceMapData, MapFloor } from '../types';
import { href } from '../lib/router';
import { useDialogFocus } from '../lib/dialog';
import { CloseIcon, ExpandIcon, MapIcon, MinusIcon, PlusIcon } from './Icons';

/**
 * The single-file build (vite.config.single.ts) leaves the map images out: they
 * are separate files under public/maps/, and that build must stay one HTML file.
 */
export const MAPS_INCLUDED = import.meta.env.VITE_SINGLE_FILE !== '1';

const SHADING_NOTE = 'Grey shading is walkable ground from the server navmesh where the client has no minimap art.';

function FloorTabs({
  floors,
  active,
  onSelect,
  idPrefix,
}: {
  floors: MapFloor[];
  active: number;
  onSelect: (i: number) => void;
  idPrefix: string;
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
    <div role="tablist" aria-label="Floors" className="flex flex-wrap gap-1.5" onKeyDown={onKeyDown}>
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
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            i === active ? 'bg-accent text-[rgb(var(--c-accent-ink))]' : 'hairline bg-surface text-muted hover:text-ink'
          }`}
        >
          {f.label}
          {f.markers.length ? <span className="ml-1 opacity-70">· {f.markers.length}</span> : null}
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

function Lightbox({
  slug,
  title,
  floors,
  active,
  onSelect,
  onClose,
}: {
  slug: string;
  title: string;
  floors: MapFloor[];
  active: number;
  onSelect: (i: number) => void;
  onClose: () => void;
}) {
  const ref = useDialogFocus(true);
  const scroller = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const drag = useRef<{ x: number; y: number; l: number; t: number } | null>(null);
  const floor = floors[active];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(4, z * 1.4));
      else if (e.key === '-') setZoom((z) => Math.max(1, z / 1.4));
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, ref]);

  useEffect(() => setZoom(1), [active]);

  // fit the whole floor in the viewport at zoom 1
  const vw = typeof window === 'undefined' ? 1200 : window.innerWidth - 32;
  const vh = typeof window === 'undefined' ? 800 : window.innerHeight - 150;
  const fit = Math.min(1, vw / floor.width, vh / floor.height);
  const w = Math.round(floor.width * fit * zoom);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/85 backdrop-blur-sm" role="presentation" onClick={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`Map of ${title}`}
        className="flex min-h-0 flex-1 flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-[rgb(var(--c-surface))] px-3 py-2">
          <span className="mr-2 font-serif font-semibold">{title}</span>
          <FloorTabs floors={floors} active={active} onSelect={onSelect} idPrefix={`lb-${slug}`} />
          <span className="ml-auto flex items-center gap-1">
            <button type="button" className="map-tool" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(1, z / 1.4))} disabled={zoom <= 1}>
              <MinusIcon />
            </button>
            <span className="w-12 text-center text-xs tabular-nums text-muted" aria-live="polite">
              {Math.round(zoom * 100)}%
            </span>
            <button type="button" className="map-tool" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(4, z * 1.4))} disabled={zoom >= 4}>
              <PlusIcon />
            </button>
            <button type="button" className="map-tool ml-2" aria-label="Close map" onClick={onClose} data-autofocus>
              <CloseIcon />
            </button>
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
              <img
                src={floor.file}
                width={floor.width}
                height={floor.height}
                alt={altText(title, floor)}
                draggable={false}
                className="block h-auto w-full select-none"
              />
              <Markers slug={slug} floor={floor} onPick={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The instance map near the top of an instance page: floor tabs, numbered boss
 * markers linked to the boss notes, click to enlarge (zoom and drag to pan). */
export function InstanceMap({ slug, title, map }: { slug: string; title: string; map: InstanceMapData }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const floor = map.floors[Math.min(active, map.floors.length - 1)];
  const hasShading = map.floors.some((f) => f.kind === 'minimap');

  if (!MAPS_INCLUDED) {
    return (
      <aside className="card flex items-start gap-3 p-4 text-sm text-muted" aria-label="Map">
        <MapIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          This single-file edition leaves out the instance maps ({map.floors.length}{' '}
          {map.floors.length === 1 ? 'floor' : 'floors'}); they are in the multi-file build.
        </span>
      </aside>
    );
  }

  const others = map.floors.filter((f) => f !== floor && f.markers.length);
  return (
    <figure className="card overflow-hidden" aria-labelledby={`map-${slug}-cap`}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 pb-3 pt-4 sm:px-5">
        <p className="eyebrow flex items-center gap-1.5">
          <MapIcon className="h-3.5 w-3.5" /> Map
        </p>
        <FloorTabs floors={map.floors} active={active} onSelect={setActive} idPrefix={`map-${slug}`} />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-full hairline bg-surface px-3 py-1 text-xs font-semibold text-muted hover:text-ink"
        >
          <ExpandIcon className="h-3.5 w-3.5" /> Enlarge
        </button>
      </div>
      <div id={`map-${slug}-panel`} role={map.floors.length > 1 ? 'tabpanel' : undefined} className="map-frame border-y text-center">
        <div className="relative inline-block max-w-full align-top">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block max-w-full cursor-zoom-in"
            aria-label={`Enlarge the map: ${floor.label}`}
          >
            <img
              key={floor.file}
              src={floor.file}
              width={floor.width}
              height={floor.height}
              loading="lazy"
              decoding="async"
              alt={altText(title, floor)}
              className="mx-auto block h-auto max-h-[68vh] w-auto max-w-full"
            />
          </button>
          <Markers slug={slug} floor={floor} />
        </div>
      </div>
      <figcaption id={`map-${slug}-cap`} className="space-y-2 px-4 py-3 text-xs text-muted sm:px-5">
        {floor.markers.length ? (
          <ol className="flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
            {floor.markers.map((m) => (
              <li key={m.n}>
                <a href={href.section(href.instance(slug), m.anchor)} className="inline-flex items-baseline gap-1.5 text-ink hover:text-accent">
                  <span className="font-semibold tabular-nums text-accent">{m.n}</span>
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
                <button type="button" className="underline decoration-dotted underline-offset-2 hover:text-ink" onClick={() => setActive(map.floors.indexOf(f))}>
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
      {open ? (
        <Lightbox slug={slug} title={title} floors={map.floors} active={active} onSelect={setActive} onClose={() => setOpen(false)} />
      ) : null}
    </figure>
  );
}

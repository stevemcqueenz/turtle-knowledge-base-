/** Inline SVG icons only — no icon fonts, no external assets. */
interface IconProps {
  className?: string;
  title?: string;
}

function Svg({ children, className, title }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? 'h-4 w-4'}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const SunIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
);

export const MoonIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </Svg>
);

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Svg>
);

export const BookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 5 7 7-7 7" />
  </Svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m15 5-7 7 7 7" />
  </Svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 9 7 7 7-7" />
  </Svg>
);

export const WarningIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4 2.5 20h19L12 4Z" />
    <path d="M12 10v4M12 17.5v.01" />
  </Svg>
);

export const InfoIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8v.01" />
  </Svg>
);

export const ExternalIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10 14" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Svg>
);

export const FlameIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3 1-5.5 1-7.5Z" />
  </Svg>
);

export const GridIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Svg>
);

/**
 * The site logo: a friendly side-view turtle. `mono` draws it in currentColor
 * (for watermarks and small inline uses); the default is the full-colour mark.
 */
export function TurtleLogo({ className, title, mono = false }: IconProps & { mono?: boolean }) {
  const ink = mono ? 'currentColor' : '#2F4A24';
  const skin = mono ? 'none' : '#9CCB7A';
  const shell = mono ? 'none' : '#6DAE52';
  const plate = mono ? 'none' : '#8CC56E';
  const rim = mono ? 'currentColor' : '#4E8B3F';
  return (
    <svg
      viewBox="0 0 64 64"
      className={className ?? 'h-6 w-6'}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <g stroke={ink} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M11 42.5 Q5 43.5 4.5 46 Q8 47 11.5 46.2 Z" fill={skin} />
        <path d="M15 44 v6.5 a3.5 3.5 0 0 0 7 0 V44 Z" fill={skin} />
        <path d="M36 44 v6.5 a3.5 3.5 0 0 0 7 0 V44 Z" fill={skin} />
        <path d="M43 42 C45 37 46 32 50 29.5" fill="none" />
        <circle cx="52.5" cy="30" r="8.5" fill={skin} />
        <path d="M42 43.5 C44 38 46 34 48.5 32 L52 36 C49 38.5 47.5 41 46.5 44 Z" fill={skin} stroke="none" />
        <path d="M9 42.5 C9 25 19 15.5 29 15.5 C39.5 15.5 49 25 49 42.5 Z" fill={shell} />
        <path d="M29 22 L35 26 L35 33 L29 37 L23 33 L23 26 Z" fill={plate} />
        <path d="M23 26 L15.5 23.5 M35 26 L42.5 23.5 M23 33 L14.5 37 M35 33 L43.5 37 M29 37 V42.5 M29 22 V15.8" fill="none" strokeWidth="1.8" />
        <rect x="6.5" y="41" width="45" height="5.5" rx="2.75" fill={rim} />
      </g>
      <circle cx="55" cy="28" r="2.1" fill={ink} />
      {mono ? null : <circle cx="55.7" cy="27.2" r="0.7" fill="#fff" />}
      {mono ? null : <ellipse cx="56.2" cy="33" rx="2" ry="1.2" fill="#F29C9C" opacity=".75" />}
      <path d="M51.5 33.5 Q53.5 35.5 55.5 34" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Back-compat alias: the single-colour turtle. */
export const TurtleIcon = (p: IconProps) => <TurtleLogo {...p} mono />;

export const MoreIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </Svg>
);

export const CopyIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h8" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);

export const DownloadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19h14" />
  </Svg>
);

export const CodeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13" />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5.5c0 4.2 3 7.8 7 9.5 4-1.7 7-5.3 7-9.5V6l-7-3Z" />
  </Svg>
);

export const HealIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5V4Z" />
  </Svg>
);

export const SwordIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.5 4H20v5.5L10 19.5 4.5 14l10-10ZM7 12l5 5M4 20l2.5-2.5" />
  </Svg>
);

export const CrossedSwordsIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 4h4l9 9M20 4h-4l-9 9M13 17l4 4 2-2-4-4M11 17l-4 4-2-2 4-4" />
  </Svg>
);

export const CompassIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </Svg>
);

export const CoinsIcon = (p: IconProps) => (
  <Svg {...p}>
    <ellipse cx="9" cy="7" rx="5" ry="2.5" />
    <path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7M10 16.4c.8.1 1.5.1 2.3.1 2.8 0 5-1.1 5-2.5v-4" />
    <path d="M4 11v4c0 1.4 2.2 2.5 5 2.5" />
  </Svg>
);

export const CastleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20V8h3v2h2V8h2v2h2V8h2v2h2V8h3v12H4ZM10 20v-4a2 2 0 0 1 4 0v4" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const QuoteIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 7H6a2 2 0 0 0-2 2v3h5V7ZM9 12c0 3-1.5 4.5-4 5M20 7h-3a2 2 0 0 0-2 2v3h5V7ZM20 12c0 3-1.5 4.5-4 5" />
  </Svg>
);

export const ExpandIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </Svg>
);

export const PlusIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const MinusIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14" />
  </Svg>
);

export const MapIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />
  </Svg>
);

/** The two hand-drawn marks: the turtle logo and GitHub's mark. Every other icon is lucide-react. */
interface IconProps {
  className?: string;
  title?: string;
}

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

/** GitHub's mark (lucide no longer ships brand icons). */
export const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? 'h-4 w-4'} fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

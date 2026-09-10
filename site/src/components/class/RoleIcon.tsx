interface RoleIconProps {
  role: string;
  className?: string;
}

const PATHS: Record<string, React.ReactNode> = {
  tank: <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z" />,
  healer: <path d="M12 4v16M4 12h16" />,
  'melee-dps': (
    <>
      <path d="M14.5 3.5l6 6-9 9-6-6z" />
      <path d="M5.5 12.5l-2 2 6 6 2-2" />
    </>
  ),
  'ranged-dps': (
    <>
      <path d="M4 20l7-7" />
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
    </>
  ),
  pvp: <path d="M5 19L19 5M5 5l14 14" />,
  leveling: <path d="M4 18l6-6 4 4 6-8" />,
};

/** Small line icon per role; decorative, the label always sits next to it. */
export function RoleIcon({ role, className = 'h-4 w-4' }: RoleIconProps) {
  const path = PATHS[role] ?? PATHS.leveling;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}

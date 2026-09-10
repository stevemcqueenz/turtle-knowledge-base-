import { useThemeToggle, useThemeValue } from '../lib/theme-context';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeToggle() {
  const theme = useThemeValue();
  const toggle = useThemeToggle();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl hairline bg-surface text-muted transition-colors hover:text-ink"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

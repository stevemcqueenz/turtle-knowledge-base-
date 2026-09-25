import { useState } from 'react';
import { CheckIcon, CopyIcon } from '../Icons';

/** Copies text to the clipboard; the label confirms for two seconds. */
export function CopyButton({ text, label = 'Copy', className = '' }: { text: string; label?: string; className?: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    setDone(true);
    window.setTimeout(() => setDone(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-muted hairline bg-surface transition-colors hover:text-ink ${className}`}
    >
      {done ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
      <span aria-live="polite">{done ? 'Copied' : label}</span>
    </button>
  );
}

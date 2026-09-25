import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from './button';
import { cn } from '../../lib/utils';

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
    <Button type="button" variant="outline" size="xs" onClick={copy} className={cn('text-muted-foreground hover:text-foreground', className)}>
      {done ? <Check /> : <Copy />}
      <span aria-live="polite">{done ? 'Copied' : label}</span>
    </Button>
  );
}

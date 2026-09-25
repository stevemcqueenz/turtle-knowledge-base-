import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        // shadcn/ui tokens, resolved from CSS variables (src/index.css) so the
        // dark (default) and light themes swap in one place.
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        sidebar: { DEFAULT: 'hsl(var(--sidebar))', foreground: 'hsl(var(--sidebar-foreground))' },
        link: 'hsl(var(--link))',
        // WoW UI gold (tooltip titles, maxed talents); theme-tuned for text.
        gold: 'hsl(var(--gold))',
        // Item quality (ratings): theme-tuned text colors, see --q-* in index.css.
        q: {
          legendary: 'rgb(var(--q-S) / <alpha-value>)',
          epic: 'rgb(var(--q-A) / <alpha-value>)',
          rare: 'rgb(var(--q-B) / <alpha-value>)',
          uncommon: 'rgb(var(--q-C) / <alpha-value>)',
          poor: 'rgb(var(--q-N) / <alpha-value>)',
        },
        // Official class colors (as the game draws them, tuned per theme in lib/theme.ts for text).
        warrior: '#C69B6D',
        paladin: '#F48CBA',
        hunter: '#AAD372',
        rogue: '#FFF468',
        priest: '#FFFFFF',
        shaman: '#0070DD',
        mage: '#3FC7EB',
        warlock: '#8788EE',
        druid: '#FF7C0A',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 3px)',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      maxWidth: { prose: '72ch' },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        cast: { from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.18s ease-out',
        'accordion-up': 'accordion-up 0.18s ease-out',
        cast: 'cast 1.5s linear infinite',
      },
    },
  },
  plugins: [animate],
};

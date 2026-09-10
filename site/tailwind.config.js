/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Resolved from CSS variables so the light/dark themes swap in one place.
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        surface2: 'rgb(var(--c-surface-2) / <alpha-value>)',
        ink: 'rgb(var(--c-text) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        // Fixed semantic colors (identical in both themes, per PLAN §4).
        favored: '#3ddc84',
        alternative: '#4ea1ff',
        niche: '#f5b942',
        'not-viable': '#8a8f98',
        staff: '#8dc63f',
        wiki: '#b07cf0',
        // Class colors (PLAN §4).
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
      borderRadius: { xl: '12px', '2xl': '16px' },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: { prose: '72ch' },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

// Mesma identidade visual do app mobile (ver remedia-ja-mobile/src/theme/tokens.ts)
// — nunca o tema padrão zinc/violet do shadcn sem alteração (ver ui-designer).
export default {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0F6E5C', dark: '#0A4E41' },
        surface: '#F4F7F6',
      },
    },
  },
  plugins: [],
} satisfies Config;

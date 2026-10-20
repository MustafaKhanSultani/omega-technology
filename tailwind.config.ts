import type { Config } from 'tailwindcss'

/**
 * Omega Technology design tokens.
 * Source: BRANDING.md (colors are visual estimates; replace with values
 * sampled from the original logo files when available).
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020B24',
          900: '#061540',
          800: '#0A2060',
          700: '#0A3FB8',
        },
        brand: {
          royal: '#1264FF',
          azure: '#1FA2FF',
          cyan: '#19D3F3',
        },
        silver: {
          100: '#EAF0FF',
          300: '#B9C8E8',
          500: '#7F93BD',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Vazirmatn', 'system-ui', 'sans-serif'],
        display: ['Michroma', 'Orbitron', 'Montserrat', 'Vazirmatn', 'sans-serif'],
        fa: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(31, 162, 255, 0.55)',
        'glow-cyan': '0 0 36px -8px rgba(25, 211, 243, 0.5)',
        card: '0 20px 60px -24px rgba(2, 11, 36, 0.9)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        scrollCue: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        'scroll-cue': 'scrollCue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F6F3EE',
          dark: '#0F0F0F',
        },
        card: {
          DEFAULT: '#FFFFFF',
          dark: '#1C1C1C',
        },
        border: {
          DEFAULT: '#E2DDD6',
          dark: '#2A2A2A',
        },
        ink: {
          DEFAULT: '#1A1714',
          muted: '#6B6560',
          dark: '#F2EFE9',
          'muted-dark': '#8A8480',
        },
        accent: {
          DEFAULT: '#2D5BE3',
          soft: '#EEF2FF',
          dark: '#4F7EFF',
        },
        tag: {
          bg: '#F0EDFF',
          ink: '#3730A3',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        accent: ['Caveat', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

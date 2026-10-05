/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1e2a3a',
          dark:    '#0f1923',
          light:   '#2d4a6b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'marquee':   'marquee 120s linear infinite',  
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
         marquee: {                                     
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
         }
      },
    },
  },
  plugins: [],
}
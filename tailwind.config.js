/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A237E',
          light: '#3949AB',
        },
        emerald: {
          DEFAULT: '#2E7D32',
          dark: '#1B5E20',
        },
        orange: {
          DEFAULT: '#FF6D00',
          dark: '#E65100',
        },
        brandGrey: '#F5F5F5',
      },
      fontFamily: {
        sinhalaHead: ['Gemunu Libre', 'Noto Serif Sinhala', 'serif'],
        sinhalaBody: ['Noto Sans Sinhala', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      secondary: colors.red,
      ternary: colors.gray,
    },
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(10px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideTop: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
      },
      animation: {
        "slide-left": "slideLeft 0.3s forwards",
        "slide-right": "slideRight 0.3s forwards",
        "slide-top": "slideTop 0.3s forwards",
      },
      colors: {
        primary: {
          50: '#f9f9fa',
          100: '#f2f2f4',
          200: '#e0e0e6',
          300: '#c1c1c8',
          400: '#78788d',
          500: '#363756', // Cor base
          600: '#30334f',
          700: '#252639',
          800: '#1c1c2b',
          900: '#16161f',
        },
      },
    },
  },
  plugins: [],
}


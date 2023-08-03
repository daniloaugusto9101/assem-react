/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      secondary: colors.red,
      ternary: colors.neutral,
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideTop: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
      },
      animation: {
        "slide-left": "slideLeft 2s forwards",
        "slide-right": "slideRight 2s forwards",
        "slide-top": "slideTop 2s forwards",
      },
      colors: {
        primary: {
          50: '#f3f3f7',
          100: '#e1e1eb',
          200: '#cecce4',
          300: '#bcb7dd',
          400: '#a9a2d7',
          500: '#969dd0',
          600: '#7e7ebf',
          700: '#6666ae',
          800: '#4e4e9d',
          900: '#363756', // Cor mais escura
        },
      },
    },
  },
  plugins: [],
}


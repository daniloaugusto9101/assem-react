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
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideLeftModal: {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideBottom: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
      },
      animation: {
        "slide-toLeft": "slideLeft 3s forwards",
        "slide-toLeftModal": "slideLeftModal 1s forwards",
        "slide-toRight": "slideRight 3s forwards",
        "slide-toBottom": "slideBottom 3s forwards",
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
          900: '#363756', 
          950: '#252646', // Cor mais escura
        },
      },
    },
  },
  plugins: [],
}


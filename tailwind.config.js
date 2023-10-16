/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");

const colors = {
  gray: {
    lightest: "#E0E0E0",
    lighter: "#1E1E1E",
    light: "#969696",
    DEFAULT: "#73707A",
    dark: "#373240",
    darker: "#1C1824",
    darkest: "#0B041A",
  },
  orange: {
    DEFAULT: "#E78124",
  },
  yellow: {
    DEFAULT: "#FDD343",
  },
  red: {
    DEFAULT: "#F05F5F",
  },
  pink: {
    DEFAULT: "#D7468B",
  },
  black: {
    DEFAULT: "#000000",
  }
};


module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        white: twColors.white,
        green: twColors.green,
        gray: { ...twColors.gray, ...colors.gray },
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1eb854",
          "secondary": "#1db990",
          "accent": colors.gray.dark,
          "neutral": "#18342b",
          "base-100": colors.black,
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};

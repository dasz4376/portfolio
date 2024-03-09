/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customTextColorHome: 'rgb(141, 180, 252)',
        customHoverColor: 'rgb(92, 253, 253)',
        transparent: "transparent",
        current: "currentColor",
        primary: "#7367f0",
        secondary: "#4c5da8",
        purple: "#9867f0",
        info: "#67dbf0",
        dark: "#4899a8",
        bg: "#242e42",
        fore: "#2f3b52",
        success: "#28c76f",
        danger: "#ea5455",
        warning: "#ff9f43",
      },
    }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customTextColorHome: 'rgb(141, 180, 252)',
        customHoverColor: 'rgb(92, 253, 253)',
        primary: "#7367f0",
        secondary: "#4c5da8",
        purple: "#9867f0",
        info: "#67dbf0",
        dark: "#4899a8",
        bg: "#242e42",
        fore: "#2f3b52",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
        slideDown: 'slideDown 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
        expand: 'expand 1.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expand: {
          '0%': { width: '0' },
          '100%': { width: '12rem' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(115, 103, 240, 0.5)',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      scale: ['hover', 'focus'],
      translate: ['hover', 'focus'],
    },
  },
  plugins: [],
}
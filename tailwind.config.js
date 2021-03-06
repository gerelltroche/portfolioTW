const colors = require('tailwindcss/colors')
const animations = require('tailwindcss/')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus']
    },
  },
  plugins: [],
}

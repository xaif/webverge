/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}"
],

theme: {
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'light-blue': colors.sky,
      cyan: colors.cyan,
    },
  },
},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

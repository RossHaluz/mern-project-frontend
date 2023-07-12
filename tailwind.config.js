/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '360px',

      'md': '768px',

      'lg': '1280px',
    },
    container:{
      padding: '16px'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}


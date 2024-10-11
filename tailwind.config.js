/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif']
      },
      colors: {
        priblue: '#005cbb'
      },
      height: {
        165: '1650px'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/index.html"],
  theme: {
    extend: {
      colors: {
        'bintek-blue': '#127480',
        'bintek-green': '#7AB24A',
        'light-bintek-blue': '#599da6'
      }
    },
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}

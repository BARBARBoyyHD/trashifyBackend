/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'tree': "url('./src/assets/tree.png)",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'tree': "url('/src/assets/tree.png')",
        'pplGarbage':"url('/src/assets/pplgarbage.jpg')",
        'organik':"url('/src/assets/organik.jpg')",
        'Anorganik':"url('/src/assets/Anorganik.jpg')",
        'B3':"url('/src/assets/B3.jpg')",
        'worm':"url('/src/assets/worm.jpg')",
        'organikTree':"url('/src/assets/organikTree.jpg')",
        'bakar':"url('/src/assets/bakar.jpg')",
        'dompet':"url('/src/assets/dompet.jpg')",
        'potbunga':"url('/src/assets/potbunga.png')",
        'B3pill':"url('/src/assets/B3pill.png')",
        'B3Chemist':"url('/src/assets/B3Chemist.png')",
        'B3battery':"url('/src/assets/B3battery.png')",
        
      }
    },
  },
  plugins: [],
}
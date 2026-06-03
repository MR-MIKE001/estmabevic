/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: { 950:'#040B1A', 900:'#0D0A2E', 800:'#150E45', 700:'#1E1460', 600:'#2A1C84', 500:'#3D28B8' },
        gold:  { 600:'#A07010', 500:'#B8860B', 400:'#D4A017', 300:'#E5B830', 200:'#F0CC50', 100:'#FAE696' },
        cream: { 50:'#FDFBF4', 100:'#F9F4E3', 200:'#F0E8CC' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Outfit"', 'system-ui', 'sans-serif'],
        accent:  ['"Cinzel"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";

module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    
    fontFamily: {
      display: ['Cairo', 'sans-serif'],
      body: ['Onset', 'sans-serif'],
      heading: [ "IBM Plex Sans Arabic", 'sans-serif']

    },
    extend: {
      fontSize: {
        16: '16px',
      },
      colors:{
        white:"rgb(251,249,227)",
        black:"#0f0f0f",
        'main-dark': '#0f0f0f',
        'secondary-dark': '#1d1d1d',
        'blue-zodiac':'rgb(18,44,79)',
        'blue-hippie':'rgb(91,136,178)',
        'grey':"rgb(107 114 128)",
        'dark-gray':"rgb(55 65 81)",
        'red':"#ff4e4e",
        'gold':'rgb(240,214,55)'
      },
      backgroundColor: {
        'white':'#ffffff',
        'white-citrine':"rgb(251,249,227)",
        "blue-light":"#F2F7FF",
        'blue-zodiac':'rgb(18,44,79)',
        'blue-hippie':'rgb(91,136,178)',
        'main-dark': '#0f0f0f',
        'secondary-dark': '#1d1d1d',
        'bg-dark-blue':'rgb(28, 39, 76)',
        'light-gray': '#F4f4f4',
        'red':"#ff4e4e",
        'dark-blue':"#25316D",
        "yellow":"#FEF5AC",
        'text-gradient': 'linear-gradient(to right, rgb(28, 39, 76), rgb(28, 39, 76) 40%, rgb(240, 214, 55) 60%, rgb(240, 214, 55))',

        'grey':"#bdbdbd",
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'border':'#1d1d1d'
       

      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        'light-gray': '#F4f4f4',
        'main-dark': '#0f0f0f',
        'secondary-dark': '#1d1d1d',
        'dark-gray':'#212121',
        'gold':'rgb(240,214,55)',
        'blue-zodiac':'rgb(18,44,79)',


      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [function ({ addUtilities }) {
      const newUtilities = {
        '.h1-gradient': {
          background: 'linear-gradient(to right, rgb(28, 39, 76), rgb(28, 39, 76) 40%, rgb(240, 214, 55) 60%, rgb(240, 214, 55))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },],
};

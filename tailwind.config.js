/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#26c0ab',
        darkCyan:'#002b3d',
        darkGrayishCyan:'#5e7b82',
        grayishCyan: '#8da5ab',
        lightCyan : '#c5e2f2',
        veryLightCyan:'#f0fbfd',
        
      }
    },
  },
  plugins: [],
}

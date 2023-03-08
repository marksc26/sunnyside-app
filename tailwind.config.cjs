/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Barlow": ['Barlow', "sans-serif"],
        "Fraunces" : ['Fraunces', "serif"]
      }
    },
   
  },
  plugins: [],
}


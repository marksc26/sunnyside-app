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
    screens:{
      "sm":"640px",
      "md": "728px",
      "lg": "959px",
      "xl": "1214px",
      "2xl": "1440px",
      "3xl": "1741px",
      "4xl": "1820px"
    }
   
  },
  plugins: [],
}


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
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1400px"
    }
   
  },
  plugins: [],
}


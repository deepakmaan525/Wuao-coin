/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      fontFamily:{'Montserrat':'Montserrat'}
    },
    linearGradient: {
      'custom': 'linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)',
    },
  },
  plugins: [],
}


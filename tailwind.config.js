/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        lightBlue : "#404EED"
      },
      fontFamily: {
        'ggsans': ['ggsans-normal'],
        'open-sans': ['Open Sans'], 

      },
      spacing: {
        '30' : '120px'
      }
    },
    
  },
  plugins: [],
}


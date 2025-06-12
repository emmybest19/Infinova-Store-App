/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 
  darkMode: 'selector',
   
  theme: {  screens: {
    sm: '375px',
    md: '768px',
    lg: '1400px',
    xl: '1800px',
  },
  
  
  extend: {
    colors: {
      'brown-orange': '#753328',
      'brown': '#191919',
      'silver': '#535353',
      'orange': '#ff7849',
      'white': '#ffffff',
      'light': '#e2e2e2',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#191919',
      'yellow': '#FFC22F',
      'red': "#D11722",
      'rate': "#FFD9D8",
      'real': "#0F172A",
      'second': "#0EA5E9",
      'third': "#343A46"
      
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      grey: ["Grey Qo", 'cursive']
    },
  },
  },
  
}

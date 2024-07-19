/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      screens :{
        tbs : "10px"
     }
     ,
     colors: {
      'custom-gray': '#1A1A2E', // Your custom gray color
    },
    },
  },
  plugins: [],
}

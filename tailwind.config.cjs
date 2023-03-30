/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      'sans': ["Bellefair"],
      'san2': ["Barlow Condensed"],
      'san3': ["Barlow"]
    },
  },
  plugins: [],
}
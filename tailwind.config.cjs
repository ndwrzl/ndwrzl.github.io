/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{css,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo"],
        source: ["Source Sans Pro"],
        libre: ["Libre Baskerville"],
      },
    },
  },
  plugins: [],
};

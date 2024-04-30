/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 25"', "sans-serif"],
        barlow: ['"Barlow Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

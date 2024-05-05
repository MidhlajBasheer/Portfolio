/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 25"', "sans-serif"],
        barlow: ['"Barlow Condensed"', "sans-serif"],
        tac: ['"Tac One", sans-serif'],
        cuprum: ['"Cuprum", sans-serif'],
        secular: ['"Secular One", sans-serif'],
        blinker: ['"Blinker", sans-serif;'],
        poetson: ['"Poetsen One", sans-serif;'],
      },
    },
  },
  plugins: [],
};

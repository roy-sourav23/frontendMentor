/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      darkCyan: "hsl(185, 75%, 39%)",
      desaturatedBlue: "hsl(229, 23%, 23%)",
      darkGrayishBlue: "hsl(227, 10%, 46%)",
      darkGray: "hsl(0, 0%, 59%)",
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
    backgroundImage: {
      topPattern: "url(../assets/bg-pattern-top.svg)",
      bottomPattern: "url(../assets/bg-pattern-bottom.svg)",
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    colors: {
      softBlue: "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      darkBlue1: "hsl(217, 54%, 11%)",
      darkBlue2: "hsl(216, 50%, 16%)",
      blueLine: "hsl(215, 32%, 27%)",
    },
    extend: {},
  },
  plugins: [],
};

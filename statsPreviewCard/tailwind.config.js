/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      mainBgColor: "hsl(233, 47%, 7%)",
      cardBgColor: "hsl(244, 38%, 16%)",
      softViolet: "hsl(277, 64%, 61%)",
      mainParagraph: "hsla(0, 0%, 100%, 0.75)",
      statHeadings: "hsla(0, 0%, 100%, 0.6)",
    },
    fontFamily: {
      lexendDeca: ["Lexend Deca", "sans-serif"],
      inter: ["Inter", "serif"],
    },
    backgroundImage: {
      mobileBgImg: "url(../assets/image-header-mobile.jpg)",
      desktopBgImg: "url(../assets/image-header-desktop.jpg)",
    },
    extend: {},
  },
  plugins: [],
};

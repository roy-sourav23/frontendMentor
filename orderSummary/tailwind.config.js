/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      paleBlue: "hsl(225, 100%, 94%)",
      brightBlue: "hsl(245, 75%, 52%)",
      veryPaleBlue: "hsl(225, 100%, 98%)",
      desaturatedBlue: "hsl(224, 23%, 55%)",
      darkBlue: "hsl(223, 47%, 23%)",
    },
    fontFamily: {
      redHatDisplay: ["Red Hat Display", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        mobileBackground: "url(../assets/pattern-background-mobile.svg)",
        desktopBackground: "url(../assets/pattern-background-desktop.svg)",
      },
    },
  },
  plugins: [],
};

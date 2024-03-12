/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      green: "hsl(75, 94%, 57%)",
      grey: "hsl(0, 0%, 20%)",
      "dark-grey": "hsl(0, 0%, 12%)",
      "off-black": "hsl(0, 0%, 8%)",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

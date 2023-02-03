/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      boxShadow: {
        highlight: "4px 4px #BE7C4D",
      },
      colors: {
        "dark-blue": "#02021d",
        "dark-orange": "#BE7C4D",
        offwhite: "#FAF9F6",
      },

      fontFamily: {
        cursive: ["Itim"],
        playfair: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};

const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_col: "#0E0C13",
        bg_score: "#110912",
      },
    },
    backgroundImage: {
      default_image: "url('/images/backGroundImage.png')",
      home: "url('/1106/defaultImage.png')",
      cat: "url('/1106/cat.png')",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#002e72",
        dotActive: "#d13100",
        dotNotActive: "#fff",
        dotBorder: "#bfbfbf",
        industries: "#f0f0f0",

      },
      width: {
        1140: "1140px",
        1200: "1200px",
        456: "456px",
      },
      height: {
        760: "760px",
      },

    },
  },
  plugins: [],
};

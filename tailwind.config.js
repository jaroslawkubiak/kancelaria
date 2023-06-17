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
        sectionList: "#E5E5E5",
      },
      width: {
        1140: "1140px",
        1900: "1900px",
        1200: "1200px",
        456: "456px",
        "45rem": "45rem",
      },
      height: {
        760: "760px",
        631: "631px",
      },
      lineHeight: {
        20: "3rem",
      },
      flexGrow: {
        45: '45',
        55: '55',
      }
    },
  },
  plugins: [],
};

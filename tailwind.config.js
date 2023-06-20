/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text_primary: "#002e72",
        text_secondary: "#ACACAC",
        text_industries: "#a8a8a8",
        text_aboutMeSec3: "#4C4C4C",
        bg_sectionList: "#E5E5E5",
        bg_industries: "#f0f0f0",
        bg_section4: "#004b85",
        bg_dotActive: "#d13100",
        dotBorder: "#bfbfbf",
        phoneSvg: "#366457",
        aboutMeListBorder: "#EBEBEB",
      },
      width: {
        1140: "1140px",
        1900: "1900px",
        1200: "1200px",
        456: "456px",
      },
      height: {
        867: "867px",
        760: "760px",
        555: "555px",
        663: "663px",
        650: "650px",
        446: "446px",
      },
      lineHeight: {
        20: "3rem",
      },
      flexGrow: {
        45: "45",
        55: "55",
      },
      flex: {
        45: "0 0 45%",
        50: "0 0 50%",
      },
    },
  },
  plugins: [],
};

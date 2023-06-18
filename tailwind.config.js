/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#002e72",
        secondary: "#ACACAC",
        dotActive: "#d13100",
        dotNotActive: "#fff",
        dotBorder: "#bfbfbf",
        industries: "#f0f0f0",
        industriesText: "#a8a8a8",
        sectionList: "#E5E5E5",
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
      },
      lineHeight: {
        20: "3rem",
      },
      flexGrow: {
        45: '45',
        55: '55',
      },
      flex: {
        '45': '0 0 45%',
        '50': '0 0 50%',
      }
    },
  },
  plugins: [],
};


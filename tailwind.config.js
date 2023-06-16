/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#002e72",
        dotActive: "#d13100",
        industries: "#f0f0f0",
      }
    },
  },
  plugins: [],
}


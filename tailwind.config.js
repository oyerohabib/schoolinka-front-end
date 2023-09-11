/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgba(63, 91, 246, 1.0)",
        "primary-hover": "rgba(63, 91, 200, 1.0)",
        secondary: "#EAECF0",
      },
      textColor: {
        primary: "#3F5BF6",
        "primary-hover": "rgba(63, 91, 200, 1.0)",
        secondary: "#EAECF0",
      },
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        25: "25px",
      },
      borderRadius: {
        large: "8rem",
      },
      width: {
        95: "95%",
        80: "80%",
        41: "41%",
        14: "14%",
        10: "10%",
      },
      height: {
        90: "90%",
        40: "40%",
      },
    },
  },
  plugins: [],
};

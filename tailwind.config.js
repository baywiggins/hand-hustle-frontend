/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        card: ["CardFont", "sans-serif"],
      },
      borderWidth: {
        25: "25px",
      },
      borderRadius: {
        large: "8rem",
      },
      width: {
        95: "95%",
        90: "90%",
        69: "69%",
        30: "30%",
        10: "10%",
      },
      height: {
        100: "100%",
        95: "95%",
        90: "90%",
        80: "80%",
        75: "75%",
        55: "55%",
        40: "40%",
        35: "35%",
        50: "50%",
        30: "30%",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s forwards",
      },
    },
  },
  plugins: [],
};

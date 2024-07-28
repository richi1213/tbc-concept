/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
      },
      fontFamily: {
        tbcx: ["TBCX", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        html: { fontSize: theme("fontSize.base") },
        body: { fontSize: theme("fontSize.base") },
      });
    },
  ],
};

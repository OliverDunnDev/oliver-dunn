module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: "#4dd0e1",
          400: "#26c6da",
          900: "#006064",
        },
        orange: {
          300: "#ffb74d",
          400: "#fb923c",
          900: "#c24e00",
        },
      },
      animation: {
        floatSlow: "floatSlow 6s ease-in-out infinite",
        floatFast: "floatFast 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js, html, njk}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      body: ["Karla", "sans-serif"],
      accent: ["IBM Plex Mono", "sans-serif"],
    },
    colors: {
      lightBk: "#F0F0F0",
      lightBkAccent: "#FFFFFF",
      darkBlue: "#0A4678",
      darkGray: "#403d39",
      darkFont: "#252422",
      brightOrange: "#eb5e28",
    },
    extend: {},
  },
  plugins: [],
};

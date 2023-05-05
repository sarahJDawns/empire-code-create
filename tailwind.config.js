module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js, html, njk}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      body: ["Karla", "sans-serif"],
      heading: ["Spectral", "sans-serif"],
      accent: ["IBM Plex Mono", "sans-serif"],
    },
    colors: {
      lightBg: "#C8D8E3",
      lightBlue: "#C8D8E3",
      lightCream: "#F7EBDE",
      cream: "#F8EBDE",
      lightPurple: "#DDD7EB",
      medPurple: "#9593FF",
      darkGreen: "#46716D",
      darkYellow: "#E4B368",
      darkPurple: "#23222C",
      medOrange: "#FAAD48",
      brightOrange: "#F2653B",
    },
    extend: {},
  },
  plugins: [],
};

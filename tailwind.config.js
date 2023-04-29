/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*/*.{html,js,njk}",
    "./src/index.njk",
    "./src/contact.njk.js",
    "./src/assets/css/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

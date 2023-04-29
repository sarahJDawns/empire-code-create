/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*/*.{html,js,njk}",
    "./src/index.njk",
    "./src/contact.njk.js",
    "./src/css/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

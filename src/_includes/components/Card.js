const { html } = require("common-tags");

function Card({ title, link, linkText, raised }) {
  return html`
    <div class="flex flex-row">
      <h2 class="font-bold">${title}</h2>
      <a class="font-bold" href="${link}">${linkText}</a>
    </div>
  `;
}

module.exports = Card;

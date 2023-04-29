const { html } = require("common-tags");

function Post({ title, link, linkText }) {
  return html`
    <div class="flex flex-col">
      <h2 class="font-bold">${title}</h2>
      <a class="text-red-500" href="${link}">${linkText}</a>
    </div>
  `;
}

module.exports = Post;

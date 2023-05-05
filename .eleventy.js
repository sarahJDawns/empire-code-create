const { DateTime } = require("luxon");
const lazyImagesPlugin = require("eleventy-plugin-lazyimages");
const charts = require("eleventy-charts");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addPlugin(lazyImagesPlugin);
  eleventyConfig.addPlugin(charts);
  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->",
  });
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "jpg",
    "png",
    "webp",
    "ico",
    "svg",
  ]);
  eleventyConfig.setBrowserSyncConfig({
    files: ["public/**/*"],
    open: true,
  });
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};

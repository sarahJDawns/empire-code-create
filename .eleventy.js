const { DateTime } = require("luxon");
const charts = require("eleventy-charts");

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob("src/posts/**/*.md");
    for (let i = 0; i < posts.length; i++) {
      const prevPost = posts[i - 1];
      const nextPost = posts[i + 1];
      posts[i].data["prevPost"] = prevPost;
      posts[i].data["nextPost"] = nextPost;
    }
    return posts;
  });
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPlugin(charts);
  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->",
  });
  eleventyConfig.setBrowserSyncConfig({
    files: ["public/**/*"],
    open: true,
  });
  eleventyConfig.setDataDeepMerge(true);

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

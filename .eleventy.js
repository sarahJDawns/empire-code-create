const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const seo = require("eleventy-plugin-seo");
const unpkgInliner = require("eleventy-njk-unpkg-inliner");
const site = require("./src/_data/site.js");

async function imageShortcode(src, cls, alt, sizes) {
  let metadata = await Image(src, {
    widths: [600, 900, 1500],
    formats: ["webp", "jpeg", "png"],
    outputDir: "./public/assets/images/",
  });

  let imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // Add Nunjucks async shortcode for inline
  eleventyConfig.addNunjucksAsyncShortcode("inline", unpkgInliner);

  // Add SEO plugin with site metadata
  eleventyConfig.addPlugin(seo, {
    title: site.title,
    description: site.description,
    url: site.url,
    author: site.author.name,
    twitter: site.author.twitter,
    image: site.image,
  });

  // Add Nunjucks async shortcode for image
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Add filter for jsFile
  eleventyConfig.addFilter("jsFile", function(page) {
    return "src" + page.filePathStem + ".js";
  });

  // Add collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    const posts = collectionApi.getFilteredByGlob("src/posts/**/*.md");
    for (let i = 0; i < posts.length; i++) {
      const prevPost = posts[i - 1];
      const nextPost = posts[i + 1];
      posts[i].data["prevPost"] = prevPost;
      posts[i].data["nextPost"] = nextPost;
    }
    return posts;
  });

  // Add filter for postDate
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Add shortcode for year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add passthrough copy for images, css, and js
  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addPassthroughCopy("src/assets/js/");

  // Add watch target for css
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Set front matter parsing options
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->",
  });

  // Set BrowserSync config
  eleventyConfig.setBrowserSyncConfig({
    files: ["public/**/*"],
    open: true,
  });

  // Enable deep merge for data
  eleventyConfig.setDataDeepMerge(true);

  // Set Eleventy directory and template engine configurations
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

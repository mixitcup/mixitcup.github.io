module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy rendered PDF (produced by ../ausschreibung workflow) into the site root
  eleventyConfig.addPassthroughCopy("ausschreibung.pdf");

  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });

  // Markdown + HTML
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

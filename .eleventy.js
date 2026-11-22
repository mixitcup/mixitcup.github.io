module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/ergebnisse/*.pdf");
  for (const image of [
    "favicon", "Logo-dark", "Logo-white", "Mixer_white",
    "Erdbeere", "Mandarine", "Banane", "Limette",
    "Wettkampfschema", "TrampolinAnspruenge",
  ]) {
    eleventyConfig.addPassthroughCopy(`src/assets/img/${image}.svg`);
  }

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

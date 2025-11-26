module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/fonts/");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/app-ads.txt");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

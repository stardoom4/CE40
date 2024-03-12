const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  // Add the eleventySass plugin
  eleventyConfig.addPlugin(eleventySass);

  // Parse Markdown files without front matter
  eleventyConfig.setFrontMatterParsingOptions({
    engines: {
      markdown: require('markdown-it')({
        html: true,
        breaks: true,
        linkify: true
      })
    },
    options: {
      // Exclude front matter from output
      frontmatter: false,
    },
  });

  // Configure Eleventy settings
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

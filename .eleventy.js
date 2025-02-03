module.exports = function(eleventyConfig) {
  // Pass through images and styles
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Define a Liquid shortcode named "quote"
  eleventyConfig.addLiquidShortcode("quote", (text, author) => {
    return `
      <div class="quote-block">
        <blockquote>${text}</blockquote>
        ${author ? `<cite>- ${author}</cite>` : ""}
      </div>
    `;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};

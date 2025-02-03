module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

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

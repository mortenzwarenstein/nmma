module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy({"assets/img": "img"} );
}
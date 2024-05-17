module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img")
    eleventyConfig.addPassthroughCopy("css")

    return {
        templateFormats: ["njk", "html", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};
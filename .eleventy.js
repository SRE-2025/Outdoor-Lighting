const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Rewrites root-relative URLs to honor pathPrefix (for GitHub Pages
  // sub-paths). At root (AWS / custom domain) this is a no-op.
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Passthrough static assets (CSS, JS, images, and root files)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/root": "/" });

  // Watch CSS/JS for changes during dev
  eleventyConfig.addWatchTarget("src/assets/");

  // --- Filters ---------------------------------------------------------
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addFilter("slug", (str) =>
    String(str)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );

  // ISO date for sitemap
  eleventyConfig.addFilter("isoDate", (d) =>
    (d ? new Date(d) : new Date()).toISOString().slice(0, 10)
  );

  // Absolute URL helper for canonical/OG tags
  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    try {
      return new URL(path, base).toString();
    } catch (e) {
      return path;
    }
  });

  // --- Collections -----------------------------------------------------
  eleventyConfig.addCollection("services", (collectionApi) =>
    collectionApi
      .getFilteredByTag("service")
      .sort(
        (a, b) =>
          (a.data.service.order || 0) - (b.data.service.order || 0)
      )
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // Override at build time for sub-path hosts, e.g.
    //   PATH_PREFIX=/Research-Turf-Management/ npx @11ty/eleventy
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
};

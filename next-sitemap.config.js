/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.韩流潮流网.com",
  generateRobotsTxt: false, // We create robots.txt manually
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/korea-trends"),
    await config.transform(config, "/korea-trends/beauty"),
    await config.transform(config, "/korea-trends/fashion"),
    await config.transform(config, "/ranking"),
    await config.transform(config, "/ranking/olive-young"),
    await config.transform(config, "/ranking/fashion-brands"),
    await config.transform(config, "/community"),
    await config.transform(config, "/community/funny"),
    await config.transform(config, "/community/memes"),
    await config.transform(config, "/community/viral"),
  ],
};

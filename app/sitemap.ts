import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.curifyapp.com";
  const routes = ["", "/features", "/about", "/contact", "/pricing"];
  const locales = ["el", "en"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority:
          locale === "el"
            ? route === ""
              ? 1.0
              : 0.9
            : route === ""
              ? 0.8
              : 0.7,
      });
    });
  });

  return sitemapEntries;
}

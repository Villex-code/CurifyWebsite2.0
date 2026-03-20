import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.curifyapp.com";

  // All active static routes
  const staticRoutes = [
    "",
    "/features",
    "/about",
    "/contact",
    "/pricing",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/use-cases",
  ];

  const locales = ["el", "en"];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate static route entries
  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
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
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            el: `${baseUrl}/el${route}`,
          },
        },
      });
    });
  });

  // Fetch dynamic blog posts from Sanity
  try {
    const postsQuery = `*[_type == "post"] { slug, publishedAt }`;
    const posts = await client.fetch(
      postsQuery,
      {},
      { next: { revalidate: 3600 } },
    );

    if (posts && posts.length > 0) {
      posts.forEach(
        (post: { slug?: { current: string }; publishedAt: string }) => {
          const slug = post.slug?.current;
          if (slug) {
            locales.forEach((locale) => {
              sitemapEntries.push({
                url: `${baseUrl}/${locale}/blog/${slug}`,
                lastModified: post.publishedAt
                  ? new Date(post.publishedAt)
                  : new Date(),
                changeFrequency: "monthly",
                priority: 0.6,
                alternates: {
                  languages: {
                    en: `${baseUrl}/en/blog/${slug}`,
                    el: `${baseUrl}/el/blog/${slug}`,
                  },
                },
              });
            });
          }
        },
      );
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  return sitemapEntries;
}

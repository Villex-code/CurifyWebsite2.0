import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import BlogMainPageContent from "./BlogMainPageContent";
import { client } from "@/sanity/lib/client";

// Query to fetch blog posts
const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  "excerpt": array::join(string::split(pt::text(body[0...1]), "")[0...200], "") + "...",
  mainImage,
  author->{
    name,
    image
  },
  categories[]->{
    _id,
    title
  }
}`;

// Query to fetch categories
const categoriesQuery = `*[_type == "category"] {
  _id,
  title
}`;

async function getBlogData() {
  const [posts, categories] = await Promise.all([
    client.fetch(postsQuery, {}, { next: { revalidate: 3600 } }),
    client.fetch(categoriesQuery, {}, { next: { revalidate: 3600 } }),
  ]);
  return { posts, categories };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.blog" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `https://www.curifyapp.com/${locale}/blog`,
      languages: {
        en: "https://www.curifyapp.com/en/blog",
        el: "https://www.curifyapp.com/el/blog",
        "x-default": "https://www.curifyapp.com/el/blog",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curifyapp.com/${locale}/blog`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Curify Healthcare OS",
        },
      ],
    },
  };
}

const BlogMainPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { posts, categories } = await getBlogData();
  const { locale } = await params;
  return (
    <BlogMainPageContent
      initialPosts={posts}
      initialCategories={categories}
      locale={locale}
    />
  );
};

export default BlogMainPage;

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import BlogMainPageContent from "./BlogMainPageContent";

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
      canonical: `https://www.curify.app/${locale}/blog`,
      languages: {
        en: "https://www.curify.app/en/blog",
        el: "https://www.curify.app/el/blog",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curify.app/${locale}/blog`,
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

const BlogMainPage = () => {
  return <BlogMainPageContent />;
};

export default BlogMainPage;

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import PrivacyPageClient from "./PrivacyPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.privacy" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `https://www.curify.app/${locale}/privacy-policy`,
      languages: {
        en: "https://www.curify.app/en/privacy-policy",
        el: "https://www.curify.app/el/privacy-policy",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curify.app/${locale}/privacy-policy`,
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

// This is a Server Component - all content will be in the initial HTML
// for maximum SEO and crawlability
const PrivacyPage = () => {
  return <PrivacyPageClient />;
};

export default PrivacyPage;

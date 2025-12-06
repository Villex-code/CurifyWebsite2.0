import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import FeaturesPageContent from "./FeaturesPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.features" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `https://www.curify.app/${locale}/features`,
      languages: {
        en: "https://www.curify.app/en/features",
        el: "https://www.curify.app/el/features",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curify.app/${locale}/features`,
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

const FeaturesPage = () => {
  return <FeaturesPageContent />;
};

export default FeaturesPage;

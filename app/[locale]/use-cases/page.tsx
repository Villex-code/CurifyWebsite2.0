import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import UseCasesPageContent from "./UseCasesPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.useCases" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `https://www.curifyapp.com/${locale}/use-cases`,
      languages: {
        en: "https://www.curifyapp.com/en/use-cases",
        el: "https://www.curifyapp.com/el/use-cases",
        "x-default": "https://www.curifyapp.com/el/use-cases",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curifyapp.com/${locale}/use-cases`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
  };
}

const UseCasesPage = () => {
  return <UseCasesPageContent />;
};

export default UseCasesPage;

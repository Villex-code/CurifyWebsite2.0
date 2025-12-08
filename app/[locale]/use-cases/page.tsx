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
      canonical: `https://www.curify.app/${locale}/use-cases`,
      languages: {
        en: "https://www.curify.app/en/use-cases",
        el: "https://www.curify.app/el/use-cases",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curify.app/${locale}/use-cases`,
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

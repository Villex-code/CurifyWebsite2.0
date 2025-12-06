import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import TermsPageClient from "./TermsPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.terms" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `https://www.curify.app/${locale}/terms-and-conditions`,
      languages: {
        en: "https://www.curify.app/en/terms-and-conditions",
        el: "https://www.curify.app/el/terms-and-conditions",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curify.app/${locale}/terms-and-conditions`,
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
const TermsPage = () => {
  return <TermsPageClient />;
};

export default TermsPage;

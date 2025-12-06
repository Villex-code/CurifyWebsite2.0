import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import ContactPageContent from "./ContactPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.contact" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `https://www.curify.app/${locale}/contact`,
      languages: {
        en: "https://www.curify.app/en/contact",
        el: "https://www.curify.app/el/contact",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://www.curify.app/${locale}/contact`,
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

const ContactPage = () => {
  return <ContactPageContent />;
};

export default ContactPage;

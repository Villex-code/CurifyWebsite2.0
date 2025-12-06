import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/layout/footer";
import Hero from "@/components/pages/home/Hero/Hero";
import BrandRecognition from "@/components/pages/home/BrandRecognition";
import ProblemSolution from "@/components/pages/home/ProblemSolution/ProblemSolution";
import CoreCapabilities from "@/components/pages/home/CoreCapabilities/CoreCapabilities";
import TrophyRoom from "@/components/pages/home/TrophyRoom/TrophyRoom";
import UserSegments from "@/components/pages/home/UserSegments/UserSegments";
import Faq from "@/components/pages/home/FAQ";
import UseCaseCTA from "@/components/pages/home/UseCaseCTA";
import BlogShowcase from "@/components/pages/home/BlogShowcase";
import { useTranslations } from "next-intl";

// Dynamic Metadata Generator for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale,
      url: "https://www.curify.app", // Replace with your actual URL
      siteName: "Curify",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://www.curify.app/${locale}`,
      languages: {
        en: "https://www.curify.app/en",
        el: "https://www.curify.app/el",
      },
    },
  };
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="">
      <Hero />
      <BrandRecognition />
      <ProblemSolution />
      <CoreCapabilities />
      <TrophyRoom />
      <UserSegments />
      <Faq />
      <UseCaseCTA />
    </div>
  );
}

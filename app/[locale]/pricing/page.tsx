import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PricingPlans from "./PricingPlans";
import PricingComparison from "./PricingComparison";
import PricingCTA from "./PricingCTA";
import UseCTA from "@/components/pages/usecases/UseCTA";
import UseCaseCTA from "@/components/pages/home/UseCaseCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("useCases.pricing.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/images/og/pricing-og.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
  };
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingPlans />
      <PricingComparison />
      <UseCaseCTA />
    </main>
  );
}

"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/sections/AppleCards";
import { HomeFeaturePatientFileCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeaturePatientFileCard";
import { HomeFeatureAppointmentsCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeatureAppointmentsCard";
import { HomeFeaturePaymentsCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeaturePaymentsCard";
import { HomeFeatureAIAgentCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeatureAIAgentCard";
import { HomeFeatureDocumentsCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeatureDocumentsCard";
import { HomeFeatureCustomizedRecordsCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeatureCustomizedRecordsCard";
import { HomeFeatureIntegrationsCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeatureIntegrationsCard";
import { HomeFeatureMobileAccessCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeatureMobileAccessCard";
import { HomeFeatureAnalyticsCard } from "@/components/pages/home/HomeFeatures/cards/HomeFeatureAnalyticsCard";
import { useTranslations } from "next-intl";

const getFeatures = (t: any) => [
  {
    category: t("cards.patients.category"),
    title: t("cards.patients.title"),
    content: t("cards.patients.content"),
    customVisual: <HomeFeaturePatientFileCard />,
  },
  {
    category: t("cards.appointments.category"),
    title: t("cards.appointments.title"),
    content: t("cards.appointments.content"),
    customVisual: <HomeFeatureAppointmentsCard />,
  },
  {
    category: t("cards.payments.category"),
    title: t("cards.payments.title"),
    content: t("cards.payments.content"),
    customVisual: <HomeFeaturePaymentsCard />,
  },
  {
    category: t("cards.ai.category"),
    title: t("cards.ai.title"),
    content: t("cards.ai.content"),
    customVisual: <HomeFeatureAIAgentCard />,
  },
  {
    category: t("cards.documents.category"),
    title: t("cards.documents.title"),
    content: t("cards.documents.content"),
    customVisual: <HomeFeatureDocumentsCard />,
  },
  {
    category: t("cards.customization.category"),
    title: t("cards.customization.title"),
    content: t("cards.customization.content"),
    customVisual: <HomeFeatureCustomizedRecordsCard />,
  },
  {
    category: t("cards.integrations.category"),
    title: t("cards.integrations.title"),
    content: t("cards.integrations.content"),
    customVisual: <HomeFeatureIntegrationsCard />,
  },
  {
    category: t("cards.mobile.category"),
    title: t("cards.mobile.title"),
    content: t("cards.mobile.content"),
    customVisual: <HomeFeatureMobileAccessCard />,
  },
  {
    category: t("cards.data.category"),
    title: t("cards.data.title"),
    content: t("cards.data.content"),
    customVisual: <HomeFeatureAnalyticsCard />,
  },
];

export function HomeFeatures() {
  const t = useTranslations("HomeFeatures");
  const features = getFeatures(t);

  const cards = features.map((card) => (
    <Card key={card.title} card={card} />
  ));

  return (
    <div className="w-full h-full py-20 bg-white">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-slate-800 font-sans">
        {t("title")}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  coverImage: string;
  category: string;
  since: string; // Added to replace the 'link' empty space
}

const getPartners = (t: any): Partner[] => [
  {
    id: "forbes",
    name: t("partners.forbes.name"),
    logo: "/images/partners/forbes.png",
    description: t("partners.forbes.description"),
    category: t("partners.forbes.category"),
    coverImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    since: t("partners.forbes.since"),
  },
  {
    id: "nbg",
    name: t("partners.nbg.name"),
    logo: "/images/partners/nbg.png",
    description: t("partners.nbg.description"),
    category: t("partners.nbg.category"),
    coverImage: "/images/partners/nbg-banner.jpeg",
    since: t("partners.nbg.since"),
  },
  {
    id: "iaso",
    name: t("partners.iaso.name"),
    logo: "/images/partners/iaso.png",
    description: t("partners.iaso.description"),
    category: t("partners.iaso.category"),
    coverImage: "/images/partners/iaso-banner.jpg",
    since: t("partners.iaso.since"),
  },
  {
    id: "egg",
    name: t("partners.egg.name"),
    logo: "/images/partners/egg.png",
    description: t("partners.egg.description"),
    category: t("partners.egg.category"),
    coverImage: "/images/partners/eggnew.jpg",
    since: t("partners.egg.since"),
  },
  {
    id: "eleutho",
    name: t("partners.eleutho.name"),
    logo: "/images/partners/eleutho.png",
    description: t("partners.eleutho.description"),
    category: t("partners.eleutho.category"),
    coverImage: "/images/partners/eleutho-banner.jpg",
    since: t("partners.eleutho.since"),
  },
];

const BrandRecognition = () => {
  const t = useTranslations("home.brandRecognition");
  const partners = getPartners(t);

  return (
    <section className="relative w-full py-24 md:py-32  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-xs font-bold text-teal-700 tracking-wide uppercase">
              {t("badge")}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            {t("title")}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* The Modern Grid */}
        <div className="space-y-8">
          {/* Top Row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.slice(0, 3).map((partner) => (
              <div
                key={partner.id}
                className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-900/10 hover:border-teal-200 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Card: Main Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                  <img
                    src={partner.coverImage}
                    alt={`${partner.name} background`}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-teal-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/50">
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Overlapping Logo Container */}
                <div className="absolute top-44 left-6 z-20">
                  <div className="bg-white p-3 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>

                {/* Card: Content Area */}
                <div className="flex flex-col flex-grow pt-14 px-8 pb-8">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {partner.name}
                    </h4>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Footer: Timeline / Status */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {t("relation")}
                    </span>
                    <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                      {partner.since}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 items justified between */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.slice(3, 5).map((partner) => (
              <div
                key={partner.id}
                className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-900/10 hover:border-teal-200 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Card: Main Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                  <img
                    src={partner.coverImage}
                    alt={`${partner.name} background`}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-teal-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/50">
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Overlapping Logo Container */}
                <div className="absolute top-44 left-6 z-20">
                  <div className="bg-white p-3 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>

                {/* Card: Content Area */}
                <div className="flex flex-col flex-grow pt-14 px-8 pb-8">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {partner.name}
                    </h4>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Footer: Timeline / Status */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {t("relation")}
                    </span>
                    <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                      {partner.since}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust text */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 text-sm font-medium">
            {t("footer.text")}
            <Link
              href="/contact"
              className="text-teal-600 underline decoration-teal-300 underline-offset-4 ml-1 hover:text-teal-800 transition-colors"
            >
              {t("footer.link")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandRecognition;

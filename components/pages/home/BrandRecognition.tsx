import React from "react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  coverImage: string;
  category: string;
  since: string; // Added to replace the 'link' empty space
}

const partners: Partner[] = [
  {
    id: "forbes",
    name: "Forbes",
    logo: "/images/partners/forbes.png",
    description: "Recognized as a Top 10 Healthcare Startup to watch in 2026.",
    category: "Media Feature",
    coverImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    since: "Featured 2024",
  },
  {
    id: "nbg",
    name: "NBG",
    logo: "/images/partners/nbg.png",
    description:
      "Strategic financial partnership for secure payment processing.",
    category: "Strategic Partner",
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
    since: "Partner since 2023",
  },
  {
    id: "iaso",
    name: "IASO",
    logo: "/images/partners/iaso.png",
    description: "Collaborating on AI-driven patient intake systems.",
    category: "Clinical Partner",
    coverImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop",
    since: "Partner since 2022",
  },
  {
    id: "egg",
    name: "Eurobank egg",
    logo: "/images/partners/egg.png",
    description: "Incubated and accelerated by the enter•grow•go program.",
    category: "Accelerator",
    coverImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2670&auto=format&fit=crop",
    since: "Cohort 2023",
  },
  {
    id: "eleutho",
    name: "Eleutho",
    logo: "/images/partners/eleutho.png",
    description: "Ensuring GDPR compliance and data security standards.",
    category: "Security",
    coverImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    since: "Audited 2024",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/partners/microsoft.png", // Placeholder path
    description: "Powered by Azure Cloud Infrastructure for 99.99% uptime.",
    category: "Tech Infrastructure",
    coverImage:
      "https://images.unsplash.com/photo-1633419461186-7d75e1684ebe?q=80&w=2532&auto=format&fit=crop",
    since: "Cloud Partner",
  },
];

const BrandRecognition = () => {
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
              Trusted Ecosystem
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Recognized by Industry Leaders
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We collaborate with the best to ensure reliability, security, and
            innovation. Our ecosystem is built on trust and proven partnerships.
          </p>
        </div>

        {/* The Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
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
                    Relation
                  </span>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                    {partner.since}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust text */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Want to become a partner?
            <span className="text-teal-600 underline decoration-teal-300 underline-offset-4 ml-1 cursor-pointer hover:text-teal-800 transition-colors">
              Contact our partnership team
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandRecognition;

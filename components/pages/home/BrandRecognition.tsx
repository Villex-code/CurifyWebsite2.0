import React from "react";

// Interface for our partner data
interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  coverImage: string; // The "Main Image" you requested
  category: string;
}

const partners: Partner[] = [
  {
    id: "forbes",
    name: "Forbes",
    logo: "/images/partners/forbes.png",
    description: "Recognized as a Top 10 Healthcare Startup to watch in 2026.",
    category: "Media Feature",
    // Placeholder cover image - replace with your own assets if available
    coverImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
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
  },
  {
    id: "iaso",
    name: "IASO",
    logo: "/images/partners/iaso.png",
    description: "Collaborating on AI-driven patient intake systems.",
    category: "Clinical Partner",
    coverImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop",
  },
  {
    id: "egg",
    name: "Eurobank egg",
    logo: "/images/partners/egg.png",
    description: "Incubated and accelerated by the enter•grow•go program.",
    category: "Accelerator",
    coverImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "eleutho",
    name: "Eleutho",
    logo: "/images/partners/eleutho.png",
    description: "Ensuring GDPR compliance and data security standards.",
    category: "Security",
    coverImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
  },
];

const BrandRecognition = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Decorative Background Elements (Teal Touches) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Trusted Ecosystem
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Recognized by Industry Leaders
          </h3>
          <p className="text-lg text-gray-500">
            We work with the best to ensure reliability, security, and
            innovation. Proudly backed and recognized by these organizations.
          </p>
        </div>

        {/* The "Apple Style" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col h-full bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Card: Main Image Area */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-300 z-10" />
                <img
                  src={partner.coverImage}
                  alt={`${partner.name} background`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Category Badge */}
                <span className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md text-teal-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {partner.category}
                </span>
              </div>

              {/* Card: Content Area */}
              <div className="flex flex-col flex-grow p-6 md:p-8 relative">
                {/* Logo Container - Overlapping the image slightly */}
                <div className="absolute -top-10 left-6 md:left-8 bg-white p-3 rounded-2xl shadow-md border border-gray-50 w-20 h-20 flex items-center justify-center z-20">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Spacer for the overlapping logo */}
                <div className="mt-8 mb-2">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {partner.name}
                  </h4>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>

                {/* 'Read More' style link (Visual only) */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-teal-600 font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Trust text */}
        <div className="mt-20 text-center border-t border-gray-100 pt-10">
          <p className="text-gray-400 text-sm">
            Join 500+ healthcare professionals who trust Curify.
            <span className="text-teal-600 underline ml-1 cursor-pointer hover:text-teal-700">
              View our certifications
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandRecognition;

import React from "react";
import { Shield, Eye } from "lucide-react";
import { privacyData } from "./privacyData";

const PrivacyContent = () => {
  return (
    <main className="flex-1 max-w-3xl">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200">
        {/* Introduction Graphic */}
        <div className="mb-12 border-b border-slate-100 pb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
            <Shield className="w-8 h-8" />
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your privacy isn't just a compliance requirement—it's the foundation
            of our healthcare platform. Below we detail exactly how your data
            flows, is secured, and is managed.
          </p>
        </div>

        {/* Sections Loop */}
        <div className="space-y-16">
          {privacyData.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-teal-500 rounded-full" />
                {section.title}
              </h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                {section.content.split("\n").map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Bold Text Parsing
                  const parts = trimmed.split(/(\*\*.*?\*\*)/g);

                  return (
                    <p key={idx} className="mb-4 leading-relaxed">
                      {parts.map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return (
                            <strong
                              key={i}
                              className="text-slate-900 font-semibold"
                            >
                              {part.replace(/\*\*/g, "")}
                            </strong>
                          );
                        }
                        return <React.Fragment key={i}>{part}</React.Fragment>;
                      })}
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Footer of Card */}
        <div className="mt-20 pt-10 border-t border-slate-100 bg-slate-50/50 -mx-8 -mb-12 p-8 md:p-12 rounded-b-[2.5rem]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Privacy Concerns?
              </h3>
              <p className="text-slate-500 text-sm">
                Our compliance team typically responds within 24 hours.
              </p>
            </div>
            <a
              href={`mailto:${privacyData.contactEmail}`}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-full text-slate-900 font-bold hover:border-teal-500 hover:text-teal-600 transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Submit a Request
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyContent;


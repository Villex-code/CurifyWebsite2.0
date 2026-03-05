import React from "react";
import { ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { termsData } from "./termsData";

const TermsContent = () => {
  const locale = useLocale();
  const data = termsData[locale] || termsData.en;

  return (
    <main className="flex-1 max-w-3xl">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200">
        {/* Introduction */}
        <div className="mb-12 border-b border-slate-100 pb-12">
          <p className="text-lg text-slate-600 leading-relaxed">
            {locale === "el"
              ? 'Παρακαλούμε διαβάστε αυτούς τους Όρους και Προϋποθέσεις ("Όροι") προσεκτικά πριν χρησιμοποιήσετε την πλατφόρμα Curify. Η πρόσβασή σας και η χρήση της Υπηρεσίας εξαρτάται από την αποδοχή και τη συμμόρφωσή σας με αυτούς τους Όρους.'
              : 'Please read these Terms and Conditions ("Terms") carefully before using the Curify platform. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.'}
          </p>
        </div>

        {/* Sections Loop */}
        <div className="space-y-16">
          {data.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-teal-500 rounded-full" />
                {section.title}
              </h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                {section.content.split("\n").map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Formatting bold text manually for custom styling
                  const parts = trimmed.split(/(\*\*.*?\*\*)/g);

                  return (
                    <p key={idx} className="mb-4 leading-relaxed">
                      {parts.map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return (
                            <strong
                              key={i}
                              className="text-slate-800 font-semibold"
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

        {/* Contact / Footer of Card */}
        <div className="mt-16 pt-10 border-t border-slate-100 bg-slate-50/50 -mx-8 -mb-12 p-8 md:p-12 rounded-b-[2.5rem]">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {locale === "el" ? "Έχετε ακόμα απορίες;" : "Still have questions?"}
          </h3>
          <p className="text-slate-500 mb-6">
            {locale === "el"
              ? "Η νομική μας ομάδα είναι διαθέσιμη για να διευκρινίσει οποιαδήποτε σημεία σχετικά με τη συμμόρφωση ή την ευθύνη."
              : "Our legal team is available to clarify any points regarding compliance or liability."}
          </p>
          <a
            href={`mailto:${data.contactEmail}`}
            className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors"
          >
            {locale === "el"
              ? "Επικοινωνία με τη Νομική Υποστήριξη"
              : "Contact Legal Support"}{" "}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default TermsContent;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Zap,
  Users,
  Database,
  Plug,
  Scale,
} from "lucide-react";

interface ValueProp {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

interface UseCaseValueProps {
  segment: string;
}

const UseCaseValue = ({ segment }: UseCaseValueProps) => {
  // Placeholder data - will be replaced with segment-specific content
  const valueProps: ValueProp[] = [
    {
      title: "Time Saving",
      description:
        "Automate repetitive tasks and reduce administrative burden by up to 70%.",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Digital Scribe",
      description:
        "AI-powered documentation that captures patient interactions automatically.",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Patient Flow",
      description:
        "Streamlined workflows that reduce wait times and improve patient satisfaction.",
      icon: Users,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "Security & Compliance",
      description:
        "HIPAA/GDPR compliant with enterprise-grade security and audit trails.",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Interoperability",
      description:
        "Seamless integration with existing systems and medical devices.",
      icon: Plug,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Scalability",
      description:
        "Built to grow with your organization, from solo practice to multi-site hospital.",
      icon: Scale,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Value Proposition
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Key benefits tailored to your healthcare setting
          </p>
        </motion.div>

        {/* Zig-Zag Layout */}
        <div className="space-y-24">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  flex flex-col md:flex-row items-center gap-8 md:gap-12
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Image/Icon Section */}
                <div className="flex-1 w-full md:w-auto">
                  <div
                    className={`
                      w-full md:w-96 h-64 md:h-80 rounded-3xl ${prop.bgColor} 
                      flex items-center justify-center shadow-xl
                    `}
                  >
                    <Icon className={`w-24 h-24 ${prop.color}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  <div
                    className={`
                      inline-flex items-center gap-2 px-4 py-2 rounded-full ${prop.bgColor} ${prop.color}
                      font-semibold text-sm
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {prop.title}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {prop.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                  <p className="text-base text-slate-500">
                    {/* Additional detailed text will go here */}
                    Learn more about how this feature transforms your daily
                    operations and improves patient outcomes.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCaseValue;


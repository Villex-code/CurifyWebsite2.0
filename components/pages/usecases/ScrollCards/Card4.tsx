import React from "react";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Sparkles, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import teamImage from "@/public/images/happy.jpg";

const Card4 = () => {
  const { t } = useTranslation();

  const metrics = [
    {
      label: t("card4.metrics.satisfaction.label"),
      value: t("card4.metrics.satisfaction.value"),
    },
    {
      label: t("card4.metrics.error.label"),
      value: t("card4.metrics.error.value"),
    },
    {
      label: t("card4.metrics.time.label"),
      value: t("card4.metrics.time.value"),
    },
    {
      label: t("card4.metrics.cost.label"),
      value: t("card4.metrics.cost.value"),
    },
  ];

  const impactAreas = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
      title: t("card4.impact.stress.title"),
      description: t("card4.impact.stress.description"),
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
      title: t("card4.impact.performance.title"),
      description: t("card4.impact.performance.description"),
    },
    {
      icon: <Sparkles className="w-5 h-5 text-teal-600" />,
      title: t("card4.impact.balance.title"),
      description: t("card4.impact.balance.description"),
    },
  ];

  return (
    <div className="w-[85vw] h-[85vh] max-w-[700px] max-h-[900px]">
      <div className="w-full h-full p-3 sm:p-6 md:p-8 lg:p-10 flex flex-col bg-white rounded-3xl">
        {/* Top Badge */}
        <div className="flex justify-end mb-1 sm:mb-2">
          <span className="text-teal-600 text-xs sm:text-sm md:text-base bg-teal-50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-medium">
            {t("card4.badge")}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[35%] sm:h-[40%] rounded-xl overflow-hidden mb-2 sm:mb-4">
          <Image
            src={teamImage}
            alt={t("card4.imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 85vw, 800px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 justify-between space-y-2 sm:space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <div className="h-1 sm:h-1.5 w-8 sm:w-12 rounded-full bg-teal-600" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-700 line-clamp-1 sm:line-clamp-none">
                {t("card4.title")}
              </h3>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-3 sm:mb-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-2 sm:p-3 rounded-lg text-center"
                >
                  <div className="text-sm sm:text-base md:text-lg font-bold text-teal-700">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Areas */}
            <div className="space-y-2 sm:space-y-3">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white border border-teal-100 rounded-lg hover:border-teal-200 transition-colors"
                >
                  <div className="mt-0.5">{area.icon}</div>
                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base font-medium text-teal-700">
                      {area.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2 sm:mt-4 flex items-center justify-between border-t border-teal-100 pt-2 sm:pt-4">
            <span className="text-teal-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
              {t("card4.featureCount")}
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 hidden sm:block">
                {t("card4.scrollText")}
              </span>
              <div className="animate-bounce">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;

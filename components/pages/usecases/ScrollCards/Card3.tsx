import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import privateImage from "@/public/images/futuristic_private.jpg";

const Card3 = () => {
  const t = useTranslations("card3");

  const dailyBenefits = [
    {
      time: t("card3.timeline.morning.time"),
      benefit: t("card3.timeline.morning.benefit"),
    },
    {
      time: t("card3.timeline.midday.time"),
      benefit: t("card3.timeline.midday.benefit"),
    },
    {
      time: t("card3.timeline.evening.time"),
      benefit: t("card3.timeline.evening.benefit"),
    },
  ];

  return (
    <div className="w-[85vw] h-[85vh] max-w-[700px] max-h-[900px]">
      <div className="w-full h-full p-3 sm:p-6 md:p-8 lg:p-10 flex flex-col bg-white rounded-3xl">
        {/* Top Badge */}
        <div className="flex justify-end mb-1 sm:mb-2">
          <span className="text-teal-600 text-xs sm:text-sm md:text-base bg-teal-50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-medium">
            {t("card3.badge")}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[35%] sm:h-[40%] rounded-xl overflow-hidden mb-2 sm:mb-4">
          <Image
            src={privateImage}
            alt={t("card3.imageAlt")}
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
                {t("card3.title")}
              </h3>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 sm:mb-4">
              {t("card3.description")}
            </p>

            {/* Daily Benefits Timeline */}
            <div className="space-y-2 sm:space-y-4">
              {dailyBenefits.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-4 border-l-2 border-teal-200"
                >
                  <div className="absolute -left-1.5 top-1.5">
                    <div className="w-3 h-3 rounded-full bg-teal-500" />
                  </div>
                  <h4 className="text-teal-600 font-medium text-xs sm:text-sm md:text-base">
                    {item.time}
                  </h4>
                  <p className="text-gray-600 text-[10px] sm:text-sm md:text-base mt-0.5">
                    {item.benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* ROI Indicator */}
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-teal-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-sm md:text-base text-teal-700 font-medium">
                  {t("card3.roi.label")}
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-teal-700">
                  {t("card3.roi.value")}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2 sm:mt-4 flex items-center justify-between border-t border-teal-100 pt-2 sm:pt-4">
            <span className="text-teal-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
              {t("card3.featureCount")}
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 hidden sm:block">
                {t("card3.scrollText")}
              </span>
              <div className="animate-bounce">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;

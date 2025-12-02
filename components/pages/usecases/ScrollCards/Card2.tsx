import React from "react";
import Image from "next/image";
import {
  Stethoscope,
  CalendarCheck,
  MessageSquare,
  HeartPulse,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import clinicImage from "@/public/images/futuristic_clinic.jpg";

const Card2 = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />,
      text: t("card2.benefits.care"),
    },
    {
      icon: <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />,
      text: t("card2.benefits.appointments"),
    },
    {
      icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />,
      text: t("card2.benefits.communication"),
    },
    {
      icon: <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />,
      text: t("card2.benefits.monitoring"),
    },
  ];

  return (
    <div className="w-[85vw] h-[85vh] max-w-[700px] max-h-[900px]">
      <div className="w-full h-full p-3 sm:p-6 md:p-8 lg:p-10 flex flex-col bg-white rounded-3xl">
        {/* Top Badge */}
        <div className="flex justify-end mb-1 sm:mb-2">
          <span className="text-teal-600 text-xs sm:text-sm md:text-base bg-teal-50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-medium">
            {t("card2.badge")}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[35%] sm:h-[40%] rounded-xl overflow-hidden mb-2 sm:mb-4">
          <Image
            src={clinicImage}
            alt={t("card2.imageAlt")}
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
                {t("card2.title")}
              </h3>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 sm:mb-6 line-clamp-3 sm:line-clamp-none">
              {t("card2.description")}
            </p>

            {/* Benefits Section */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-4 mt-1 sm:mt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm border border-teal-100 hover:border-teal-200 transition-colors"
                >
                  {benefit.icon}
                  <span className="text-gray-700 text-[10px] sm:text-sm md:text-base lg:text-lg line-clamp-2 sm:line-clamp-1">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2 sm:mt-6 flex items-center justify-between border-t border-teal-100 pt-2 sm:pt-4">
            <span className="text-teal-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
              {t("card2.featureCount")}
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 hidden sm:block">
                {t("card2.scrollText")}
              </span>
              <div className="animate-bounce">
                <HeartPulse className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;

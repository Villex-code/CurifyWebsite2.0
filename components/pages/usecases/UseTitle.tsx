"use client";
import React from "react";
import { useTranslations } from "next-intl";

const UseTitle = () => {
  const t = useTranslations("useTitle");

  return (
    <div className="relative w-screen flex justify-center items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 text-transparent bg-clip-text pb-4">
        {t("useTitle.line1")}
        <br />
        {t("useTitle.line2")}
      </h2>
    </div>
  );
};

export default UseTitle;

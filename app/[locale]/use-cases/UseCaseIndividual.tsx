"use client";

import React from "react";
import UseCaseOffice from "./UseCaseOffice";
import UseCaseClinic from "./UseCaseClinic";
import UseCaseHospital from "./UseCaseHospital";

const UseCaseIndividual = ({ segment }: { segment: string }) => {
  // Render the appropriate use case component based on segment
  switch (segment) {
    case "medical-office":
      return <UseCaseOffice />;
    case "hospital":
      return <UseCaseHospital />;
    case "clinic":
    default:
      return <UseCaseClinic />;
  }
};

export default UseCaseIndividual;

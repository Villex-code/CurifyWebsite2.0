import React from "react";
import ProblemSolutionLeft from "./ProblemSolutionLeft";
import ProblemSolutionRight from "./ProblemSolutionRight/ProblemSolutionRight";

const ProblemSolutionSection = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <ProblemSolutionLeft />
          <ProblemSolutionRight />
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

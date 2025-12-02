"use client";

import { cn } from "@/lib/utils";

export const Ripple = ({
  className,
  colors = ["#0ea5e9", "#2563eb", "#4f46e5"],
}: {
  className?: string;
  colors?: string[];
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className="absolute h-[40%] w-[35%] animate-ripple rounded-full opacity-50 mix-blend-screen"
          style={{
            top: "50%",
            left: "50%",
            backgroundColor: colors[i],
            "--i": i,
          } as any}
        />
      ))}
    </div>
  );
};

export default Ripple;

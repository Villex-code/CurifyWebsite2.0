"use client";
import React from "react";
import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    duration: 2,
  },
};

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg",
          "before:absolute before:inset-0 before:z-0 before:rounded-lg before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
          className
        )}
      >
        <span className="relative z-10 block text-sm font-semibold uppercase tracking-wide">
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
          }}
          className={cn(
            "absolute inset-0 z-0 block rounded-[inherit]",
            "bg-[linear-gradient(-75deg,transparent_calc(var(--x)+20%),rgba(255,255,255,0.4)_calc(var(--x)+25%),transparent_calc(var(--x)+100%))]",
            "p-px"
          )}
        />
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;

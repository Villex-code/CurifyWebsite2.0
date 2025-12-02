import React from "react";
import { cn } from "@/lib/utils";

export interface Iphone15ProProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  width?: number;
  height?: number;
}

export const Iphone15Pro = React.forwardRef<
  HTMLDivElement,
  Iphone15ProProps
>(({ className, src, width = 433, height = 882, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-0 inline-flex h-[750px] w-[360px] items-center justify-center",
        className
      )}
      {...props}
    >
      <div className="relative h-full w-full">
        <img
          src="https://assets.codepen.io/2002878/iphone14-mockup-labelless.png"
          className="pointer-events-none absolute z-10 h-full w-full object-cover"
          alt="iPhone frame"
        />
        <div className="absolute top-[20px] left-[22px] h-[calc(100%-40px)] w-[calc(100%-44px)] overflow-hidden rounded-[48px] bg-black">
          {src ? (
            <img
              src={src}
              alt="screen content"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-black" />
          )}
        </div>
      </div>
    </div>
  );
});
Iphone15Pro.displayName = "Iphone15Pro";


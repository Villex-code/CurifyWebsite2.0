"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useRef } from "react";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className={cn("flex whitespace-nowrap flex-nowrap", className)} style={{ x }}>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
      </motion.div>
    </div>
  );
}

interface VelocityScrollProps {
  topText: string;
  bottomText: string;
  default_velocity?: number;
  topClassName?: string;
  bottomClassName?: string;
  dividerClassName?: string;
}

export function VelocityScroll({
  topText,
  bottomText,
  default_velocity = 5,
  topClassName,
  bottomClassName,
  dividerClassName,
}: VelocityScrollProps) {
  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={default_velocity} className={topClassName}>
        {topText}
      </ParallaxText>
      <div className="w-full flex justify-center">
          <div className={dividerClassName} />
      </div>
      <ParallaxText baseVelocity={-default_velocity} className={bottomClassName}>
        {bottomText}
      </ParallaxText>
    </section>
  );
}


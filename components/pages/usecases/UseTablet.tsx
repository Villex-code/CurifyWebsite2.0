"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import org from "@/public/app/org.png";

interface UseTabletProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  aspectRatio?: string; // Added aspect ratio prop
}

const UseTablet = ({
  imageSrc = org.src,
  imageAlt = "Tablet display image",
  className = "",
  aspectRatio = "aspect-video", // 16:9 by default
}: UseTabletProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [...scaleDimensions(), scaleDimensions()[1]],
  );
  const translate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -100]);

  return (
    <div className={`h-[150vh] relative ${className}`} ref={containerRef}>
      <div className="sticky top-20 h-screen flex items-center justify-center">
        <div
          className="w-full relative px-4 max-w-[90vw] mx-auto"
          style={{
            perspective: "1000px",
          }}
        >
          <Card
            rotate={rotate}
            translate={translate}
            scale={scale}
            aspectRatio={aspectRatio}
          >
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-fit rounded-xl"
                priority
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  aspectRatio?: string;
}

const Card = ({
  rotate,
  scale,
  translate,
  children,
  aspectRatio = "aspect-video",
}: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={`
        max-w-7xl mx-auto w-full 
        ${aspectRatio}
        border-4 border-[#6C6C6C] 
        p-2 md:p-6 
        bg-[#222222] 
        rounded-[30px] 
        shadow-2xl
      `}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100">
        {children}
      </div>
    </motion.div>
  );
};

export default UseTablet;

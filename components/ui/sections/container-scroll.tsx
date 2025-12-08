"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

// Placeholder images - replace with actual images when available
const images = [
  "/images/application/patients.png",
  "/images/application/storage.png",
  "/images/graphics/phones.png",
];

interface ContainerScrollProps {
  rightComponent: React.FC;
  leftComponent: React.FC;
  children?: React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  rightComponent: RightComponent,
  leftComponent: LeftComponent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
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

  // Desktop animations
  const rotate = useTransform(scrollYProgress, [0, 0.33], [20, 0]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.33, 0.33, 0.66, 0.66, 1],
    [0, 0, 0, -500, -500, 500]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.33, 0.33, 0.66, 0.66, 1],
    [isMobile ? 0.85 : 1.05, 1, 1, 0.7, 0.7, 0.7]
  );

  // Mobile animations
  const mobileTranslateY = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, -50, -100, -150]
  );

  const mobileOpacity = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [1, 0.7, 0.4, 0]
  );

  // Component animations
  const rightComponentOpacity = useTransform(
    scrollYProgress,
    [0.33, 0.4, 0.6, 0.66],
    [0, 1, 1, 0]
  );
  const rightComponentY = useTransform(
    scrollYProgress,
    [0.33, 0.4, 0.6, 0.66],
    ["20vh", "5vh", "-5vh", "-20vh"]
  );

  const leftComponentOpacity = useTransform(
    scrollYProgress,
    [0.66, 0.73, 0.93, 1],
    [0, 1, 1, 0]
  );
  const leftComponentY = useTransform(
    scrollYProgress,
    [0.66, 0.73, 0.93, 1],
    ["20vh", "5vh", "-5vh", "-20vh"]
  );

  return (
    <div
      className={`${isMobile ? "h-[200vh]" : "h-[400vh]"} relative`}
      ref={containerRef}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="w-full h-screen relative flex items-center justify-center"
          style={{ perspective: isMobile ? "none" : "1000px" }}
        >
          {/* Components - Hidden on mobile */}
          {!isMobile && (
            <>
              <motion.div
                style={{
                  opacity: rightComponentOpacity,
                  y: rightComponentY,
                }}
                className="absolute right-20 w-1/3 z-10 hidden md:block"
              >
                <RightComponent />
              </motion.div>

              <motion.div
                style={{
                  opacity: leftComponentOpacity,
                  y: leftComponentY,
                }}
                className="absolute left-8 w-1/3 z-10 hidden md:block"
              >
                <LeftComponent />
              </motion.div>
            </>
          )}

          {/* Main Card with 16:9 Aspect Ratio */}
          <motion.div
            style={
              isMobile
                ? {
                    scale: 0.9,
                    y: mobileTranslateY,
                    opacity: mobileOpacity,
                  }
                : {
                    rotateX: rotate,
                    scale,
                    x: translateX,
                  }
            }
            className={`${
              isMobile ? "w-[90%]" : "w-full max-w-5xl"
            } -mt-12 mx-auto relative border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl z-30`}
          >
            {/* Aspect ratio container */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* 16:9 Aspect Ratio */}
              <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-2xl bg-zinc-900 md:rounded-2xl md:p-4">
                {/* Images */}
                {images.map((src, index) => (
                  <motion.div
                    key={src}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [
                          index * 0.33 - 0.05,
                          index * 0.33,
                          (index + 1) * 0.33,
                          (index + 1) * 0.33 + 0.05,
                        ],
                        [0, 1, 1, 0],
                        { clamp: false }
                      ),
                      zIndex: useTransform(scrollYProgress, (value) =>
                        value >= index * 0.33 && value < (index + 1) * 0.33
                          ? 2
                          : 1
                      ),
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Phase ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      priority
                    />
                  </motion.div>
                ))}

                {/* Overlay effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-100/20 to-teal-300/20 backdrop-blur-sm" />
                <div className="absolute -right-20 top-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

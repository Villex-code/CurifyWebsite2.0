"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import NextImage, { ImageProps } from "next/image";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export type CardType = {
  src?: string;
  title: string;
  category: string;
  content: React.ReactNode;
  customVisual?: React.ReactNode;
};

/**
 * CAROUSEL COMPONENT
 * Handles horizontal scrolling with custom buttons and motion entrance animations.
 */
export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Top Controls Area */}
      <div className="flex justify-end gap-2 mr-4 md:mr-10 mb-4 items-center">
        <div className="hidden md:flex items-center gap-2 mr-2">
          <span className="font-handwriting text-sm text-slate-400 -rotate-6 pt-2">
            or click here
          </span>
          <Sparkles className="w-4 h-4 text-amber-400" />
          <svg
            width="40"
            height="20"
            viewBox="0 0 50 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-12 text-slate-300"
          >
            <path
              d="M5 10 C 15 0, 25 20, 45 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M35 10 L 45 15 L 38 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-6 w-6 text-slate-600" />
        </button>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-6 w-6 text-slate-600" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pb-10 [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl">
          {/* Scroll Hint Graphic */}
          <div className="hidden md:flex flex-col justify-center items-center shrink-0 w-24 relative z-20">
            <span className="font-handwriting text-sm text-slate-500 -rotate-12 mb-4 whitespace-nowrap">
              Scroll
            </span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-400 rotate-12"
            >
              <path
                d="M10 10 Q 50 10, 50 50 T 90 90"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
              <path
                d="M80 80 L 90 90 L 80 100"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
              key={"card" + index}
              className="rounded-3xl last:pr-[5%] md:last:pr-[33%] w-[85vw] md:w-auto shrink-0"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * CARD COMPONENT
 * The individual item in the carousel. Can render either a custom UI visual or a standard image.
 */
export const Card = ({
  card,
  layout = false,
}: {
  card: CardType;
  layout?: boolean;
}) => {
  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      className="relative z-10 flex h-[38rem] w-full flex-col items-start justify-start overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 md:h-[40rem] md:w-96 group"
    >
      {/* 
         Refined Scrim Overlay: 
         Ensures text pops by creating a subtle white-to-transparent fade 
         at the bottom where the typography sits.
      */}
      <div className="pointer-events-none absolute inset-0 z-30 h-full bg-gradient-to-t from-white via-white/85 to-transparent" />

      {/* Content Area */}
      <div className="relative z-40 p-8 h-full flex flex-col justify-end">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-left font-sans text-xs font-bold text-teal-600 uppercase tracking-[0.2em] md:text-sm"
        >
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="mt-3 text-left font-sans text-2xl font-bold text-slate-900 md:text-3xl leading-tight"
        >
          {card.title}
        </motion.p>
        <p className="mt-3 text-left text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-[90%]">
          {card.content}
        </p>
      </div>

      {/* Visual Area (Background) */}
      {card.customVisual ? (
        <div className="absolute inset-0 z-10 h-full w-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
          {card.customVisual}
        </div>
      ) : (
        card.src && (
          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="absolute inset-0 z-10 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )
      )}
    </motion.button>
  );
};

/**
 * BLUR IMAGE COMPONENT
 * Wrapper for NextImage that adds a smooth blur-up effect while loading.
 */
export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <NextImage
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Feature visual"}
      {...rest}
    />
  );
};
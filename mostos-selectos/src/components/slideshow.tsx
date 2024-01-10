"use client";

import { images } from "@/lib/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;
    const timer = setTimeout(
      () => setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
      7000
    );

    return () => clearInterval(timer);
  }, [currentImageIndex, hasInteracted]);

  return (
    <div className="mb-4">
      <div className="relative">
        <div
          key={currentImageIndex}
          className="relative w-full h-[500px] animate-fade-in"
        >
          <Image
            src={images[currentImageIndex]}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-translucentDark top-0 bottom-0 left-0 right-0">
         
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentImageIndex(i);
              setHasInteracted(true);
            }}
          >
            <SlideShow.Indicator
              filled={currentImageIndex === i ? true : false}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const Indicator = ({ filled }: { filled: boolean }) => {
  return (
    <div
      className={cn(
        "w-3 h-3 rounded-full border-primary border-2 mt-2",
        filled && "bg-primary"
      )}
    />
  );
};

SlideShow.Indicator = Indicator;

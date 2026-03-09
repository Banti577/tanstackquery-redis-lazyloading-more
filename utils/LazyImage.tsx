"use client";

import Loader from "@/components/Loader";
import { Suspense, useEffect, useRef, useState } from "react";
//import programmerImage from 'https://thumbs.dreamstime.com/b/ai-brain-409496331.jpg'

type LazyImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function LazyImage({ src, alt, width = 200, height = 200, className }: LazyImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
 < Suspense fallback={<Loader />}>
    <div
      ref={ref}
      className={className}
      style={{
        width,
        height,
      
      }}
    >
      {visible && <img className="object-cover h-full w-full" src={src}  alt={alt} width={width} height={height} />}
    </div>
    </Suspense>
  );
}
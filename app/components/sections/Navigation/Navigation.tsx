"use client";

import { NavigationUI } from "@types-content";
import { NavigationContainer } from "./NavigationContainer";
import { ReactNode, useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "@motion";

export function Navigation({
  data,
  children,
}: {
  data: NavigationUI;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const prefersReduced = useReducedMotion();
  const springCfg = prefersReduced
    ? { stiffness: 1000, damping: 100, mass: 1 }
    : { stiffness: 300, damping: 30, mass: 0.6 };

  // Марджины в ПИКСЕЛЯХ (tailwind 4 -> 1rem=16px, 12 -> 3rem=48px)
  const mt = useTransform(scrollYProgress, [0.1, 0.15], [35, 10]);
  const mb = useTransform(scrollYProgress, [0.1, 0.15], [35, 0]);

  // Схлопывание контента без layout thrash
  const scaleYRaw = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);
  const scaleY = useSpring(scaleYRaw, springCfg);

  // Плавная прозрачность
  const opacity = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);
  const gap = useTransform(scrollYProgress, [0.1, 0.15], [40, 0]);

  // Размер заголовка: пружина (число) -> строка "px"
  const headingSizeRaw = useTransform(scrollYProgress, [0.1, 0.15], [50, 30]);
  const headingSizeSpring = useSpring(headingSizeRaw, springCfg);
  const headingSize = useMotionTemplate`${headingSizeSpring}px`;

  const motionStyles = { mt, mb, scaleY, opacity, headingSize, gap };

  return (
    <div ref={ref} className="bg-gray-50">
      <div className="relative flex flex-col gap-20">
        <div className="sticky top-15 h-full w-full z-10">
          <NavigationContainer data={data} motionStyles={motionStyles} />
        </div>
        {children}
      </div>
    </div>
  );
}

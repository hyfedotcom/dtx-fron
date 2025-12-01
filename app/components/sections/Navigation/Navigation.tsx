"use client";

import { NavigationUI } from "@types-content";
// import { NavigationContainer } from "./NavigationContainer";
import { ReactNode} from "react";
// import {
//   useScroll,
//   useTransform,
//   useSpring,
//   useMotionTemplate,
//   useReducedMotion,
// } from "@motion";
import { WordReveal } from "@/ui/Animations/Animations";
import { useScrollTrigger } from "@hooks/useVisibilityTrigger";
import { AnimatedIcon } from "./AnimatedIcon";

export function Navigation({
  data,
  children,
}: {
  data: NavigationUI;
  children?: ReactNode;
}) {
  const { content, heading } = data;
  const { ref: triggerRef, visible } = useScrollTrigger(20, 0.9);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  // const prefersReduced = useReducedMotion();
  // const springCfg = prefersReduced
  //   ? { stiffness: 1000, damping: 100, mass: 1 }
  //   : { stiffness: 300, damping: 30, mass: 0.6 };

  // // Марджины в ПИКСЕЛЯХ (tailwind 4 -> 1rem=16px, 12 -> 3rem=48px)
  // const mt = useTransform(scrollYProgress, [0.1, 0.15], [35, 10]);
  // const mb = useTransform(scrollYProgress, [0.1, 0.15], [35, 0]);

  // // Схлопывание контента без layout thrash
  // const scaleYRaw = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);
  // const scaleY = useSpring(scaleYRaw, springCfg);

  // // Плавная прозрачность
  // const opacity = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);
  // const gap = useTransform(scrollYProgress, [0.1, 0.15], [40, 0]);

  // // Размер заголовка: пружина (число) -> строка "px"
  // const headingSizeRaw = useTransform(scrollYProgress, [0.1, 0.15], [50, 30]);
  // const headingSizeSpring = useSpring(headingSizeRaw, springCfg);
  // const headingSize = useMotionTemplate`${headingSizeSpring}px`;

  // const motionStyles = { mt, mb, scaleY, opacity, headingSize, gap };
  // motionStyles={motionStyles}

  return (
    <div className="bg-gray-50">
      <div className="relative flex flex-col gap-20 py-[100px] md:py-[140px]">
        {/* <div className=" top-15 h-full w-full z-10">
          {" "}
          {/*sticky 
          <NavigationContainer data={data} />
        </div> */}

        <div ref={triggerRef} className=" px-5">
          <div className="sticky top-[40%] space-y-4 md:space-y-4">
            <AnimatedIcon visible={visible} />
            {heading && (
              <h2>
                <WordReveal
                  words={heading.split(" ")}
                  className=" text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px] flex flex-wrap justify-center gap-3 perspective-[1000px] leading-tight text-heading"
                  isVisible={visible}
                />
              </h2>
            )}

            {content &&
              content.map((p, i) => (
                <p className="body-large" key={i}>
                  <WordReveal
                    words={p.paragraph.split(" ")}
                    className="text-balance flex-wrap text-center w-full mx-auto flex gap-1.5 items-center justify-center"
                    isVisible={visible}
                  />
                </p>
              ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

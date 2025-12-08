"use client";

import { NavigationUI } from "@types-content";
import { motion, useTransform, MotionValue, useSpring } from "@motion";

type Props = {
  mt: MotionValue<number>;
  mb: MotionValue<number>;
  scaleY: MotionValue<number>;
  opacity: MotionValue<number>;
  headingSize: MotionValue<string>;
};

export function NavigationContainer({
  data,
}: {
  data: NavigationUI;
  motionStyles?: Props;
}) {
  const { content, heading } = data;

  return (
    <div className="pt-10">
      <motion.div className="z-100 w-max pb-2 flex flex-col px-2 pt-4 rounded-[28px]  mx-auto shadow-none transform-gpu overflow-hidden">
        {heading && (
          <motion.p className="h2-medium mb-4 text-heading flex flex-wrap justify-center gap-3 perspective-[1000px] leading-tight">
            {heading}
          </motion.p>
        )}

        {content && (
          <div className="relative  w-full">
            <motion.div className="z-1000  w-full">
              {content.map((p, i) => (
                <p className="text-balance text-center w-full" key={i}>
                  {p.paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

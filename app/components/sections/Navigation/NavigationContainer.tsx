"use client";

import { NavigationUI } from "@types-content";
import { motion, useTransform, MotionValue, useSpring } from "@motion";
import { Nav } from "./Nav";

type Props = {
  mt: MotionValue<number>;
  mb: MotionValue<number>;
  scaleY: MotionValue<number>;
  opacity: MotionValue<number>;
  headingSize: MotionValue<string>;
};

export function NavigationContainer({
  data,
  motionStyles,
}: {
  data: NavigationUI;
  motionStyles: Props;
}) {
  const { mt, mb, scaleY, opacity, headingSize } = motionStyles;
  const { content, heading } = data;

  // Плавные фон и тень — без setState и ререндеров
  // Диапазон привязал к mt: 0..16px
  const boxShadow = useTransform(
    mt,
    [35, 10],
    ["", "0 0 20px rgb(0 0 0 / 0.2)"]
  );
  const backgroundColor = useTransform(
    mt,
    [35, 10],
    ["rgb(247 247 249)", "rgb(255 255 255)"]
  );

  return (
    <div className="pt-10">
      <motion.div
        className="z-100 w-max pb-2 flex flex-col px-2 pt-4 rounded-[28px]  mx-auto shadow-none transform-gpu overflow-hidden"
        style={{
          boxShadow,
          backgroundColor,
          marginBottom: mb,
          willChange: "transform, opacity",
        }}
      >
        {heading && (
          <motion.p
            className="font-semibold text-heading flex flex-wrap justify-center gap-3 perspective-[1000px] leading-tight"
            style={{ fontSize: headingSize }}
          >
            {heading}
          </motion.p>
        )}

        {content && (
          <div className="relative  w-full">
            {" "}
            {/* родитель — контекст позиционирования */}
            <motion.div
              className="z-1000  w-full"
              style={{
                opacity,
                scaleY,
                transformOrigin: "top",
                willChange: "transform, opacity",
                position: "absolute",
                top: 0,
                left: "50%",
                translateX: "-50%",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {content.map((p, i) => (
                <p className="text-balance text-center w-full" key={i}>
                  {p.paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        )}

        <motion.div style={{ marginTop: mt }}>
          {" "}
          <Nav data={data} mt={mt} />
        </motion.div>
      </motion.div>
    </div>
  );
}

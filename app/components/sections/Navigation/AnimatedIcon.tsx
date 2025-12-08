"use client";
import { motion } from "@motion";

const paths = [
  "M12.1493 24.9704C27.9733 31.4526 32.7299 43.7202 32.8182 50.2976L26.8182 50.3776C26.7625 46.2404 23.5123 36.1707 10.0282 30.5827L8.04328 35.8376L0 23.1764L14.4069 19L12.1493 24.9704Z",
  "M59.6367 23.1768L51.5938 35.8379L49.6074 30.583C36.124 36.1711 32.874 46.2407 32.8184 50.3779L26.8184 50.2979C26.9067 43.7206 31.6629 31.453 47.4863 24.9707L45.2295 19L59.6367 23.1768Z",
  "M38.818 12H32.818V58H26.818V12H20.818L29.818 0L38.818 12Z",
];

export function AnimatedIcon({ visible }: { visible: boolean }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      className="bg-white w-max rounded-full mx-auto p-3.5 border border-primary-200 flex items-center justify-center"
    >
      <svg
        className="w-[60px] h-[58px]"
        viewBox="0 0 60 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#2364C4"
            strokeWidth={2}
            fill="#2364C4"
            initial={{ pathLength: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{
              duration: 1.2,
              delay: i * 0.3, // 👈 очередность
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";

export function WordReveal({
  words,
  className,
  isVisible,
}: {
  words: string[];
  className: string;
  isVisible?: boolean;
}) {
  return (
    <span className={`${className}`}>
      <AnimatePresence>
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10, rotateX: -15 }}
            animate={
              isVisible
                ? { opacity: 1, y: 0, rotateX: 0 }
                : { opacity: 0, y: 10, rotateX: -15 }
            }
            transition={{
              duration: 0.35,
              delay: i * 0.06,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}

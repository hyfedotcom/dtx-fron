"use client";

import { CardUI } from "@types-ui";
import { div } from "framer-motion/client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  cards: CardUI[];
  activeIndex: number;
  onClick: (i: number) => void;
};

export function Tabs({ cards, onClick }: Props) {
  const [indicator, setIndicator] = useState({ x: 0, w: 0 });
  const [active, setActive] = useState(0);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containterRef = useRef<HTMLDivElement | null>(null);

  const measure = (idx: number) => {
    const el = btnRefs.current[idx];
    const container = containterRef.current;
    if (!el || !container) return;

    const w = el.offsetWidth;
    const x = el.offsetLeft - container.scrollLeft;
    setIndicator({ x, w });
  };

  useLayoutEffect(() => {
    measure(active);
  }, [active]);

  useEffect(() => {
    const ro = new ResizeObserver(() => measure(active));
    const c = containterRef.current;
    if (c) ro.observe(c);
    btnRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [active]);

  return (
    <div
      className="overflow-x-auto touch-pan-x scrollbar-hide max-[550px]:w-screen px-4 "
      style={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        ref={containterRef}
        className="relative inline-flex bg-white rounded-full p-2 gap-2  border  border-gray-200 "
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-2 rounded-full bg-primary transition-[transform,width] duration-300 ease-out z-0"
          style={{
            width: indicator.w,
            transform: `translateX(${indicator.x - 8}px)`,
          }}
        />
        {cards.map((c, i) => (
          <button
            key={i}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            onClick={() => {
              onClick(i);
              setActive(i);
            }}
            className={`${
              active === i ? "text-white font-semibold" : "text-gray-600"
            } px-7 py-2 text-[20px] rounded-full z-1 cursor-pointer whitespace-nowrap`}
          >
            {c.heading}
          </button>
        ))}
      </div>
    </div>
  );
}

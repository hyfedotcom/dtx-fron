import { NavigationUI } from "@types-content";
import { MotionValue, useTransform, motion } from "@motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function Nav({
  data,
  mt,
}: {
  data: NavigationUI;
  mt: MotionValue<number>;
}) {
  const { nav_link } = data;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [indicator, setIndicator] = useState({ x: 0, w: 0 });

  const measure = (idx: number) => {
    const el = btnRefs.current[idx];
    const container = containerRef.current;
    if (!el || !container) return;

    // позиция внутри контейнера без лишних пересчётов
    const w = el.offsetWidth;
    const x = el.offsetLeft - container.scrollLeft; // если будет горизонтальный скролл — не съедет
    setIndicator({ x, w });
  };

  // меряем при монтировании и при смене active
  useLayoutEffect(() => {
    measure(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, nav_link.length]);

  // держим в синхроне при ресайзе/изменении шрифтов/контента
  useEffect(() => {
    const ro = new ResizeObserver(() => measure(active));
    const c = containerRef.current;
    if (c) ro.observe(c);
    btnRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [active]);

  const backgroundColor = useTransform(
    mt,
    [35, 10],
    ["rgb(255 255 255)", "rgb(247 247 249)"]
  );

  return (
    <nav className="mx-auto w-max z-100 ">
      <motion.div
        ref={containerRef}
        // className="relative  pointer-events-auto flex items-center md:gap-2 rounded-full bg-white p-2
        //            shadow-[0_0_20px_rgb(0_0_0/0.2)]"
        className="relative  pointer-events-auto flex items-center  rounded-full p-2 
                  "
        style={{ backgroundColor }}
      >
        {/* бегунок под активной ссылкой */}
        <span
          aria-hidden
          className=" absolute inset-y-2 rounded-full bg-primary
                     transition-[transform,width] duration-300 ease-out z-0"
          style={{
            width: indicator.w,
            transform: `translateX(${indicator.x - 8}px)`,
          }}
        />

        {nav_link.map((l, i) => (
          <a
            key={l.link ?? i}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            href={l.link}
            onClick={() => {
              setActive(i);
            }}
            className={`relative z-1 px-3 py-1 leading-[26px]  text-[16px] ${
              active === i ? "text-white font-semibold" : "text-[#47505F]"
            }`}
            aria-current={active === i ? "page" : undefined}
          >
            {l.label}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}

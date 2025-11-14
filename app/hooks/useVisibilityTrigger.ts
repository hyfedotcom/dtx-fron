import { useEffect, useRef, useState } from "react";

export function useScrollTrigger(
  offsetPercent: number = 0,
  threshold: number = 0.4 // 40% элемента должны быть видимыми
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const margin = `-${offsetPercent}% 0px 0px 0px`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        rootMargin: margin,
        threshold,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [offsetPercent, threshold]);

  return { ref, visible };
}

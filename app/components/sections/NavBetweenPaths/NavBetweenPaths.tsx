"use client";

import { useViewportSize } from "@hooks/useViewportSize";
import { column_links } from "@types-content";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function NavBetweenPaths({ data }: { data: column_links[] }) {
  const screenWidth = useViewportSize().width;
  const [isActiv, setIsActiv] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsActiv(screenWidth > 768);
  }, [screenWidth]);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const navRect = nav.getBoundingClientRect();

    const getRect = (id: string) => {
      const el = document.getElementById(id);

      return el ? el.getBoundingClientRect() : null;
    };

    const handleScroll = () => {
      const hero = getRect("hero");
      const footer = getRect("footer");

      if (!hero || !footer) return;
      const navBottom = navRect.bottom;

      const isAboveHero = hero.top < navBottom && hero.bottom > navBottom;
      const isAboveFooter = footer.top < navBottom;

      setIsVisible(!(isAboveHero || isAboveFooter));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`inset-0 absolute ${
        !isVisible ? "opacity-0 z-1000" : "opacity-100 z-1003 "
      } transition-all  duration-500`}
    >
      <div
        ref={ref}
        onMouseEnter={() => setIsActiv(true)}
        onTouchStartCapture={() => setIsActiv(true)}
        onMouseLeave={() => setIsActiv(false)}
        className={`${
          isActiv
            ? "bg-[#87CAE7]/40 md:max-w-max"
            : "bg-[#87CAE7]/60 max-w-[180px] md:max-w-max"
        } fixed bottom-4 right-4 md:right-10 md:bottom-5 cursor-pointer shadow-[0_0_20px_rgb(0_0_0/0.2)] backdrop-blur-2xl rounded-[20px] border border-[#87CAE7] transition-all`}
      >
        <p
          className={`
    ${isActiv ? "text-center pb-0" : "text-center pb-2 md:pb-3.5"}
    transition-all duration-600 
    body-medium  md:px-4 pt-2 md:pt-4 text-black font-medium!
  `}
        >
          {data[0].heading}
        </p>
        <div
          className={`
    transition-all duration-300 overflow-hidden
    ${isActiv ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}
  `}
        >
          <div className="w-full h-px bg-[#87CAE7] my-2 md:my-3"></div>
          <nav
            className={`${
              isActiv ? "max-[769px]:opacity-100" : "max-[769px]:opacity-0"
            }  flex flex-col gap-1.5 md:gap-2 px-4 pb-4`}
          >
            {data[0].nav_link?.map((e, i) => (
              <NavButton
                link={e.link}
                key={i}
                onClick={() => setIsActiv(false)}
              >
                {e.label}
              </NavButton>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  children,
  link,
  onClick,
}: {
  children: string;
  link: string;
  onClick: () => void;
}) {
  const isMobile = useViewportSize().width < 768;
  const onClickFun = isMobile ? onClick : undefined;

  return (
    <Link className="group flex" href={`/${link}`} onClick={onClickFun}>
      <span
        className={`w-full py-1.5 md:py-1.5 px-3 md;px-3.5 text-[14px] md:text-[16px] rounded-[40px] text-center font-medium overflow-hidden text-primary-700 bg-white hover:bg-primary-100 transition-colors border border-primary-200`}
      >
        {children}
      </span>
    </Link>
  );
}

export function ScrollingText({ children }: { children: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;
    if (!wrapper || !text) return;

    const wrapperWidth = wrapper.offsetWidth;
    const textWidth = text.scrollWidth;

    if (textWidth <= wrapperWidth) {
      // текст помещается — нет анимации
      wrapper.style.setProperty("--scroll-x", `0px`);
      wrapper.classList.remove("scroll-dynamic");
      return;
    }

    const offset = wrapperWidth - textWidth - 10; // отрицательное число
    text.style.setProperty("--scroll-x", `${offset}px`);

    // длительность анимации пропорциональна длине текста
    const duration = Math.max(6, textWidth / 100); // медленнее и адаптивно
    text.style.setProperty("--scroll-duration", `${duration}s`);

    text.classList.add("scroll-dynamic");
  }, [children]);

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden w-full whitespace-nowrap"
    >
      <span ref={textRef} className="inline-block">
        <span> {children}</span>
      </span>
    </div>
  );
}

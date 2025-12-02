"use client";

import { SocialMediaRender } from "@/ui/SocialMediaRender";
import { useViewportSize } from "@hooks/useViewportSize";
import { HeaderUI, SocialMedia } from "@types-content";
import { MediaUI } from "@types-ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "@motion";

export function Header({
  data,
  logo,
  social_media,
}: {
  data: HeaderUI;
  logo: MediaUI;
  social_media: SocialMedia[];
}) {
  const [IsTop, setIsTop] = useState(false);
  const [open, setOpen] = useState(false);
  const { width } = useViewportSize();
  const path = usePathname();
  const headerRef = useRef<HTMLHtmlElement | null>(null);
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const headerHeight = 1000;
      setIsTop(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const hero = document.getElementById("hero");
    if (!header || !hero) return;

    const headerHeight = header.offsetHeight;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();

      const isUnderHeader = rect.top <= headerHeight && rect.bottom > 0;
      setIsOnHero(isUnderHeader);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`w-full fixed ${
        (IsTop && width > 758) ||
        path === "/privacy-policy" ||
        path === "/cookie"
          ? "mt-0"
          : "md: lg:pt-15"
      } duration-500 md:pl-15 ${open ? "" : "pr-3 pl-3 pt-3"} md:pr-15 z-1001`}
    >
      <div
        className={`${
          IsTop ? "  max-w-[1440px] " : " max-w-full"
        } flex bg-[#87CAE7]/20 border-[#87CAE7]  justify-between items-center p-3 mx-auto  transition-all duration-500 backdrop-blur-[20px] rounded-t-[40px] rounded-b-[40px]`}
      >
        <Link href="/" className="flex items-center z-2">
          <Image
            src={logo.url}
            alt="logo"
            width={logo.width}
            height={logo.height}
            className={`${
              isOnHero && !open ? "logo logo-white" : "logo"
            } w-max h-10 md:h-[50px]`}
          />
        </Link>
        <nav
          className={`hidden lg:flex ${
            IsTop ? "gap-5" : "gap-10"
          } font-semibold items-center transition-all duration-500`}
        >
          {data.links.map((l, i) => (
            <Link
              href={`${l.link}`}
              key={i}
              className={`${
                IsTop || path === "/privacy-policy" || path === "/cookie"
                  ? "text-black "
                  : "text-white"
              } transition-colors duration-200 hover:text-primary-400`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden relative z-2 pr-2 w-auto h-4 flex flex-col justify-between items-center"
          onClick={() => setOpen(!open)}
          aria-label="Open menu of navitagion"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${
              isOnHero ? "bg-white" : "bg-primary-800"
            } transition-transform rounded-full ${
              open ? "rotate-45 translate-y-1.5 bg-primary-800!" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              isOnHero ? "bg-white" : "bg-primary-800"
            }  transition-opacity rounded-full ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              isOnHero ? "bg-white" : "bg-primary-800"
            }  transition-transform rounded-full ${
              open ? "-rotate-45 -translate-y-2 bg-primary-800!" : ""
            }`}
          />
        </button>

        {data.cta.map((b, i) => (
          <a
            href={b.link}
            className={`hidden lg:block bg-${b.color} hover:opacity-80 px-5 py-3 rounded-full text-white font-semibold leading-[26px] text-[18px]`}
            key={i}
          >
            {b.label}
          </a>
        ))}
        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobileMenu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed inset-0 h-[120vh] w-[120vh] z-1 bg-white flex items-center"
            >
              <div className="flex flex-col items-start p-4 justify-center space-y-5 text-xl font-semibold h-[70vh] w-full ">
                {data.links &&
                  data.links.length > 0 &&
                  data.links.map((l, index) => (
                    <Link
                      key={index}
                      href={`/${l.link}`}
                      onClick={() => setOpen(false)}
                      className="hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}

                {data.cta.map((c, i) => (
                  <a
                    key={i}
                    href={c.link}
                    className=" mt-5 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-85 transition"
                  >
                    {c.label}
                  </a>
                ))}

                {social_media && social_media.length > 0 && (
                  <div className="flex gap-5 mt-auto">
                    {social_media.map((media, index) => (
                      <SocialMediaRender data={media} key={index} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

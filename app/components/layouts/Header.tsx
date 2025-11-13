"use client";

import { Button } from "@/ui/Button/Button";
import { HeaderUI } from "@types-content";
import { MediaUI } from "@types-ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header({ data, logo }: { data: HeaderUI; logo: MediaUI }) {
  const [IsTop, setIsTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const headerHeight = 1000;
      setIsTop(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed ${
        IsTop ? " pt-4" : "pt-15"
      } duration-500 pl-15 pr-15 z-1000`}
    >
      <div
        className={`${
          IsTop ? "bg-white/50  max-w-[1440px]" : "bg-white/20  max-w-full"
        } flex justify-between p-3 mx-auto  transition-all duration-500 backdrop-blur-2xl rounded-[40px]`}
      >
        <Image
          src={logo.url}
          alt="logo"
          width={logo.width}
          height={logo.height}
        />
        <div
          className={`flex ${
            IsTop ? "gap-5" : "gap-10"
          } font-semibold items-center transition-all duration-500`}
        >
          {data.links.map((l, i) => (
            <Link
              href={l.link}
              key={i}
              className={`${
                IsTop ? "text-black" : "text-white"
              } transition-colors duration-500`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        {data.cta.map((b, i) => (
          <button
            className={`bg-${b.color} px-5 py-3 rounded-full text-white font-semibold leading-[26px] text-[18px]`}
            key={i}
          >
            {b.label}
          </button>
        ))}
      </div>
    </header>
  );
}

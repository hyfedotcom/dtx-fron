"use client";

import { ButtonArrow } from "@/ui/Button/ButtonArrow";
import { useViewportSize } from "@hooks/useViewportSize";
import { CardLinkUI } from "@types-ui";

import clsx from "clsx";
import { useInView } from "@motion";
import Image from "next/image";
import { useRef } from "react";

export function Card({ data }: { data: CardLinkUI }) {
  const { link, gradientEnd, gradientStart, heading, image, paragraph } = data;
  const isMobile = useViewportSize().width <= 768;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(
    ref,
    isMobile
      ? {
          margin: "-60px 0px -60px 0px",
          amount: 1.0,
        }
      : {
          margin: "-60% 0px -60% 0px",
          amount: "some",
        }
  );

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        ref={ref}
        className={clsx(
          "relative group/card rounded-[20px] p-5 h-[280px]",
          inView && isMobile && "is-active"
        )}
      >
        {/* WHITE MOUNT */}
        <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover/card:opacity-0 rounded-[20px] z-0" />
        {/* GRADIENT */}
        {gradientEnd && gradientStart && (
          <div
            className={clsx(
              "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 rounded-[20px] z-0",
              inView && isMobile && "opacity-100"
            )}
            style={{
              background: `linear-gradient(to top right, #${gradientStart}, #${gradientEnd})`,
            }}
          />
        )}
        {/* IMAGE */}
        {image?.url && (
          <div
            className={clsx(
              "absolute opacity-0 scale-50 group-hover/card:opacity-100 group-hover/card:scale-100  md:translate-y-1/6 left-2  md:left-1/6 bottom-5  md:bottom-[0%] group-hover/card:bottom-[20%] duration-300",
              isMobile && inView && "bottom-5 opacity-100 left-0 scale-100"
            )}
          >
            <Image
              alt={image?.alt ?? "Media Image"}
              src={image?.url ?? "seo"}
              width={image.width > 500 ? 400 : image.width}
              height={image.width > 500 ? 400 : image.height}
              loading="lazy"
              className="h-auto max-h-50 md:max-h-60 object-contain"
            />
          </div>
        )}
        {/* CONTENT */}
        <div className="relative flex flex-col justify-between h-full z-100">
          {heading && (
            <h3
              className={clsx(
                "h3-medium transition-colors duration-300 group-hover/card:text-white",
                inView && isMobile && "text-white"
              )}
            >
              {heading}
            </h3>
          )}
          <div className="flex justify-between items-end gap-10">
            {paragraph && (
              <p
                className={clsx(
                  "opacity-0 md:opacity-100 text-balance transition-colors duration-300 group-hover/card:text-transparent",
                  inView && isMobile && "text-transparent"
                )}
              >
                {paragraph}
              </p>
            )}

            <ButtonArrow
              className={clsx(
                "bg-primary text-white border-2 border-primary",
                "group-hover/card:bg-white group-hover/card:text-primary",
                inView && isMobile && "bg-white text-primary"
              )}
              isActive={inView && isMobile}
            />
          </div>
        </div>{" "}
      </div>
    </a>
  );
}

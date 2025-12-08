"use client";

import { NavigationUI } from "@types-content";
import { ReactNode } from "react";
import { WordReveal } from "@/ui/Animations/Animations";
import { useScrollTrigger } from "@hooks/useVisibilityTrigger";
import { AnimatedIcon } from "./AnimatedIcon";

export function Navigation({
  data,
  children,
}: {
  data: NavigationUI;
  children?: ReactNode;
}) {
  const { content, heading } = data;
  const { ref: triggerRef, visible } = useScrollTrigger(20, 0.9);

  return (
    <div className="">
      <div className="relative flex flex-col gap-20 pt-[100px] md:pt-[100px] ">
        <div ref={triggerRef} className=" px-5">
          <div className="sticky top-[40%] space-y-4 md:space-y-4">
            <AnimatedIcon visible={visible} />
            {heading && (
              <h2>
                <WordReveal
                  words={heading.split(" ")}
                  className=" text-[28px] md:text-[32px] xl:text-[40px] flex flex-wrap justify-center gap-2 xl:gap-3 perspective-[1000px] leading-tight text-heading"
                  isVisible={visible}
                />
              </h2>
            )}

            {content &&
              content.map((p, i) => (
                <p className="body-small md:body-large" key={i}>
                  <WordReveal
                    words={p.paragraph.split(" ")}
                    className="text-balance flex-wrap text-center w-full mx-auto flex gap-1 xl:gap-1.5 items-center justify-center"
                    isVisible={visible}
                  />
                </p>
              ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

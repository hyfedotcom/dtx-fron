"use client";

import { CardUI } from "@types-ui";
import { Tabs } from "./Tabs";
import { useState } from "react";
import { Card } from "./Card";

export function FeatureTabsLogic({ cards }: { cards: CardUI[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Tabs cards={cards} onClick={setActiveIndex} activeIndex={activeIndex} />

      <div className="relative w-full h-full">
        <div className="w-full h-[50vh]"></div>
        {cards.map((c, i) => (
          <Card activeIndex={activeIndex} index={i} key={i} card={c} />
        ))}
      </div>
    </>
  );
}

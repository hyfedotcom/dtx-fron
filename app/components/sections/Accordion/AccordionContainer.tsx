"use client";

import { CardUI } from "@types-ui";
import { useState } from "react";
import { Card } from "./Card";
import { ImageContainer } from "./ImageContainer";

export function AccordionContainer({ cards }: { cards: CardUI[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex gap-6">
      <div className="max-[768px]:w-full min-[769px]:w-1/2">
        {cards.map((c, i) => (
          <Card
            card={c}
            onClick={() => setIndex(i)}
            isActive={i === index}
            key={i}
          ></Card>
        ))}
      </div>

      <ImageContainer cards={cards} activIndex={index} />
    </div>
  );
}

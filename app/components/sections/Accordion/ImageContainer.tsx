import { motion } from "@motion";
import { CardUI } from "@types-ui";
import Image from "next/image";

export function ImageContainer({
  cards,
  activIndex,
}: {
  cards: CardUI[];
  activIndex: number;
}) {
  console.log(cards);
  return (
    <div className="hidden md:block w-full max-[1300px]:w-1/2 max-w-[820px] h-[440px] relative rounded-[20px] overflow-hidden">
      {cards.length > 0 &&
        cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: activIndex === i ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {c.image.url && (
              <Image
                src={c.image.url}
                alt={c.image.alt ?? "image"}
                fill
                sizes=" 70vw, 50vw"
                className="object-cover"
              ></Image>
            )}
          </motion.div>
        ))}
    </div>
  );
}

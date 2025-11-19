import { CardUI, MediaUI } from "@types-ui";
import Image from "next/image";

export function Default({ card }: { card: CardUI }) {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src={card.image.url}
        alt={card.image.alt ?? ""}
        fill
        sizes="(min-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

import { CardUI } from "@types-ui";
import Image from "next/image";

export function Card({ data }: { data: CardUI }) {
  const { heading, paragraph, image } = data;
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-6">
      <div className="w-full md:w-[44%] space-y-3">
        <h3 className="h2-medium text-heading text-balance">{heading}</h3>
        <p className="text-black text-balance">{paragraph}</p>
      </div>
      {image && (
        <div
          className="relative h-[400px] md:h-[600px] w-full md:w-[61%] rounded-[20px] overflow-hidden bg-gradient"
          style={{ background: "var(--shadow-brand)" }}
        >
          <Image
            src={image?.url ?? ""}
            alt={image?.alt ?? "seo-alt"}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

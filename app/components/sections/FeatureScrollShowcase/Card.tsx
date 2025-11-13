import { CardUI } from "@types-ui";
import Image from "next/image";

type CardStyle = { backgroundColor: string };

export function Card({ data, style }: { data: CardUI; style: CardStyle }) {
  return (
    <div
      className="sticky top-40 flex flex-col md:flex-row items-center justify-between h-auto md:h-[582px] rounded-[20px] md:pl-10"
      style={style}
    >
      <div className="w-full px-5 py-10  md:px-0 md:py-0 md:w-1/2 space-y-5">
        <h3 className="h2-medium text-balance">{data.heading}</h3>
        <p className="max-w-[600px] text-balance">{data.paragraph}</p>
      </div>
      <div className="relative w-full md:w-1/2 h-[582px] overflow-hidden rounded-[20px]">
        {data.image.url && (
          <Image
            src={data.image.url}
            alt={data.image.alt ?? "image"}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

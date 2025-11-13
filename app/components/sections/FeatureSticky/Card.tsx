import { CardUI } from "@types-ui";
import Image from "next/image";

export function Card({ data }: { data: CardUI }) {
  return (
    <div className="max-[1000px]:w-full max-[1200px]:w-[504px] w-[704px] space-y-6 md:space-y-7">
      {data.image.url && (
        <div className="relative w-full max-[1000px]:h-[404px] h-[540px] bg-primary-100 overflow-hidden rounded-[20px]">
          <Image
            src={data.image.url}
            alt={data.image.alt ?? "image"}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="space-y-2 md:space-y-3 text-balance">
        <h3 className="text-heading h3-medium text-balance">{data.heading}</h3>
        <p>{data.paragraph}</p>
      </div>
    </div>
  );
}

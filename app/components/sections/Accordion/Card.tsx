import { CardUI } from "@types-ui";
import Image from "next/image";

export function Card({
  card,
  isActive,
  onClick,
}: {
  card: CardUI;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${
        isActive ? "bg-primary-100 space-y-2 " : "bg-gray-50 md:bg-transparent "
      } p-4 md:p-6 mb-4 rounded-[20px] cursor-pointer  md:space-y-0 overflow-hidden`}
      onClick={onClick}
    >
      <div
        className={`${
          !card.icon.url && "mb-4"
        }  flex items-center gap-4 md:gap-5`}
      >
        {card.icon.url && (
          <div
            className={`${
              isActive ? "bg-gray-50 " : "bg-white"
            } w-[52px] h-[52px] rounded-full flex items-center justify-center`}
          >
            <Image
              src={card.icon.url}
              alt={card.icon.alt ?? "icon"}
              width={card.icon.width}
              height={card.icon.height}
            ></Image>
          </div>
        )}
        <h4 className="h4 font-medium">{card.heading}</h4>
      </div>
      <div className={`${!card.icon.url ? "mb-4" : "md:ml-[72px]"} `}>
        <p
          className={`${
            isActive ? "opacity-100 max-h-80" : "opacity-0 max-h-0"
          } body-small duration-600 transition-all`}
        >
          {card.paragraph}
        </p>
      </div>
      {card.image.url && (
        <Image
          src={card.image.url}
          alt={card.image.alt ?? "image"}
          width={320}
          height={338}
          className={`${
            isActive ? "opacity-100 max-h-[338px] mt-5" : "opacity-0 max-h-0"
          } block md:hidden object-cover w-full h-[338px] transition-all duration-600 rounded-2xl`}
        ></Image>
      )}
    </div>
  );
}

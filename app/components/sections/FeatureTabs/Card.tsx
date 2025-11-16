import { CardUI } from "@types-ui";
import { Asthma } from "./Layouts/Asthma";
import { COPD } from "./Layouts/COPD";
import { ILD } from "./Layouts/ILD";
import { LungCancer } from "./Layouts/LungCancer";
import { Default } from "./Layouts/Default";

const layouts: Record<string, React.ComponentType<{ card: CardUI }>> = {
  "layout-asthma": Asthma,
  "layout-COPD": COPD,
  "layout-lung-cancer": LungCancer,
  "layout-ILD": ILD,
  default: Default,
};

export function Card({
  card,
  activeIndex,
  index,
}: {
  index: number;
  card: CardUI;
  activeIndex: number;
}) {
  const Layout = layouts[card.layout] || layouts.default;

  return (
    <div
      className={`${
        activeIndex === index ? "relative z-10 opacity-100" : "z-0 opacity-0 absolute"
      }  inset-0 flex   gap-5 h-max flex-col md:flex-row`}
    >
      {/* Левая часть с текстом */}
      <div className="w-full md:w-1/2  p-6 flex flex-col justify-center gap-4 bg-white rounded-[20px] text-left">
        {card.heading && (
          <h3 className="h3-medium text-heading font-semibold">
            {card.heading}
          </h3>
        )}
        {card.paragraph && (
          <p className="text-gray-700 leading-relaxed">{card.paragraph}</p>
        )}
      </div>

      <div className="w-full md:w-1/2 h-max">
        <Layout card={card} />
      </div>
    </div>
  );
}

import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { FeatureScrollShowCaseUI } from "@types-content";
import { Card } from "./Card";

export function FeatureScrollShowcase({
  data,
}: {
  data: FeatureScrollShowCaseUI;
}) {
  function getCardColor(index: number) {
    const h = 222;
    const s = 100;
    const l = 97 - index * 2;

    const base = `${h} ${s}% ${l}%`;

    return { backgroundColor: `hsl(${base})` };
  }
  return (
    <section id={data.type}>
      <div className="container px-0! md:px-10 space-y-10 md:space-y-15">
        <ContentContainer
          data={data}
          classContainer="flex flex-col items-center justify-between text-center "
          classParagraph="max-w-[1000px] body-large font-medium"
        />
        <div className="space-y-10">
          {data.cards.map((c, i) => (
            <Card data={c} key={i} style={getCardColor(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

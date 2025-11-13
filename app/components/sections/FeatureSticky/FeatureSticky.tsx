import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { FeatureStickyUI } from "@types-content";
import { Card } from "./Card";

export function FeatureSticky({ data }: { data: FeatureStickyUI }) {
  return (
    <section id={data.type}>
      <div className="container relative flex max-[1000px]:flex-col gap-[100px]">
        <div className="min-[1000px]:sticky top-40 h-max">
          <ContentContainer data={data} classContainer="" />
        </div>
        <div className="max-[1000px]:grid grid-cols-1 md:grid-cols-2 gap-5 space-y-20 md:space-y-25">
          {data.cards.map((c, i) => (
            <Card data={c} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

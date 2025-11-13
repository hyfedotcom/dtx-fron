import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { Card } from "./Card";
import { WhyResolveUI } from "@types-content";

export function WhyResolve({ data }: { data: WhyResolveUI }) {
  const { cards } = data;

  return (
    <section>
      <div className="container space-y-25">
        <ContentContainer
          data={data}
          classContainer="max-w-[1000px] flex items-center justify-center flex-col mx-auto text-center"
        ></ContentContainer>
        <div className="space-y-25">
          {cards.map((c, index) => (
            <Card key={index} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

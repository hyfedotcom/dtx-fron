import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { Card } from "./Card";
import { WhyResolveUI } from "@types-content";

export function WhyResolve({ data }: { data: WhyResolveUI }) {
  const { cards } = data;
 
  return (
    <section className="bg-gray-50 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden" id={data.type}>
      <div className="container space-y-25 mt-10 md:mt-0">
        <ContentContainer
          data={data}
          classContainer="max-w-[1000px] flex items-center justify-center flex-col mx-auto text-center"
          classTextContiner="flex flex-col items-center justifly-center space-y-5"
        ></ContentContainer>
        {cards.length != 0 && (
          <div className="space-y-25">
            {cards.map((c, index) => (
              <Card key={index} data={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

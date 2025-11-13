import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { SolutionsUI } from "@types-content";
import { Card } from "./Card";

export function Solutions({ data }: { data: SolutionsUI }) {
  return (
    <section className="bg-gray-50">
      <div className="container space-y-10 md:space-y-15">
        <ContentContainer data={data} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.cards.map((c, i) => (
            <Card data={c} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

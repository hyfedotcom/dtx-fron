import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { AccordionUI } from "@types-content";
import { AccordionContainer } from "./AccordionContainer";

export function Accordion({ data }: { data: AccordionUI }) {
  return (
    <section id={data.type} className="w-full">
      <div className="container space-y-15">
        <div className="">
          <ContentContainer
            data={data}
            classContainer="flex flex-col items-center justify-center text-center"
          />
        </div>
        <AccordionContainer cards={data.cards} />
      </div>
    </section>
  );
}

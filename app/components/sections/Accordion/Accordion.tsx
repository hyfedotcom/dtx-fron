import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { AccordionUI } from "@types-content";
import { AccordionContainer } from "./AccordionContainer";

export function Accordion({ data }: { data: AccordionUI }) {
  return (
    <section id={data.type} className="w-full">
      <div className="container space-y-15">
        <div className="">
          <ContentContainer
            data={
              data.content &&
              (data.content[1] === undefined || null)  &&
              data.content[0].paragraph.length < 50
                ? {
                    sub_heading: data.content && data.content[0].paragraph,
                    ctas: data.ctas,
                    heading: data.heading,
                  }
                : data
            }
            classContainer="flex flex-col md:flex-row items-start md:items-end justify-between text-left"
            classTextContiner="flex flex-col gap-4"
          />
        </div>
        <AccordionContainer cards={data.cards} />
      </div>
    </section>
  );
}

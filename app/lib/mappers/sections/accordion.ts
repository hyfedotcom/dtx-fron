import { StrapiAccordion } from "@types-content";
import { AccordionUI } from "@types-content";
import { mapButtons, mapCards, mapParagraphs, txt } from "../sanitize";

export function mapAccordion(raw: StrapiAccordion): AccordionUI {
  return {
    type: "accordion",
    heading: txt(raw.heading),
    subHeading: txt(raw.sub_heading),
    content: mapParagraphs(raw.content),
    ctas: mapButtons(raw.ctas),
    cards: mapCards(raw.cards),
  };
}

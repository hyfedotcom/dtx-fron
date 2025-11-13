import { StrapiSolutions } from "@types-content";
import { SolutionsUI } from "@types-content";
import {
  txt,
  mapButtons,
  mapParagraphs,
  mapCards,
  mapCardsLink,
} from "../sanitize";

export function mapSolutions(raw: StrapiSolutions): SolutionsUI {
  return {
    type: "solutions",
    heading: txt(raw.heading),
    subHeading: txt(raw.sub_headong),
    content: mapParagraphs(raw.content),
    ctas: mapButtons(raw.ctas),
    cards: mapCardsLink(raw.cards),
  };
}

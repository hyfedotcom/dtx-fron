export type { WhyResolveUI } from "@types-content";
export type { StrapiWhyResolve } from "@types-content";
import { StrapiWhyResolve, WhyResolveUI } from "@types-content";
import { mapButtons, mapCards, mapParagraphs, txt } from "../sanitize";

export function mapWhyResolve(raw: StrapiWhyResolve): WhyResolveUI {
  return {
    type: "why-resolve-dtx",
    heading: txt(raw.heading),
    subHeading: txt(raw.sub_heading),
    content: mapParagraphs(raw.content),
    ctas: mapButtons(raw.ctas),
    cards: mapCards(raw.cards),
  };
}

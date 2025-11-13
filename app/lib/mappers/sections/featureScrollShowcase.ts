import { StrapiFeatureScrollShowCase } from "@types-content";
import { FeatureScrollShowCaseUI } from "@types-content";
import { txt, mapButtons, mapCards, mapParagraphs } from "../sanitize";

export function mapFeatureScrollShowcase(
  raw: StrapiFeatureScrollShowCase
): FeatureScrollShowCaseUI {
  return {
    type: "feature-scroll-showcase",
    heading: txt(raw.heading),
    content: mapParagraphs(raw.content),
    ctas: mapButtons(raw.ctas),
    cards: mapCards(raw.cards),
    subHeading: txt(raw.sub_heading),
  };
}

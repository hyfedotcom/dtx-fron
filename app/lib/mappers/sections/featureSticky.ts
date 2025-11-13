import { FeatureStickyUI } from "@types-content";
import { StrapiFeatureSticky } from "@types-content";
import { txt, mapButtons, mapCards, mapParagraphs } from "../sanitize";

export function mapFeatureSticky(raw: StrapiFeatureSticky): FeatureStickyUI {
  return {
    type: "feature-sticky",
    heading: txt(raw.heading),
    content: mapParagraphs(raw.content),
    ctas: mapButtons(raw.ctas),
    cards: mapCards(raw.cards),
    subHeading: txt(raw.sub_heading),
  };
}

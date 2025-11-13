import { FeatureTabsUI } from "@types-content";
import { StrapiFeatureTabs } from "@types-content";
import { txt, mapButtons, mapCards, mapParagraphs } from "../sanitize";

export function mapFeatureTabs(raw: StrapiFeatureTabs): FeatureTabsUI {
  return {
    type: "feature-tabs",
    cards: mapCards(raw.cards),
    content: mapParagraphs(raw.content),
    heading: txt(raw.heading),
    sub_heading: txt(raw.sub_heading)
  };
}

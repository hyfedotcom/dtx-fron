import { StrapiNavigation } from "@types-content";
import { NavigationUI } from "@types-content";
import { txt, mapCardsLink, mapParagraphs } from "../sanitize";

export function mapNavigation(raw: StrapiNavigation): NavigationUI {
  return {
    type: "navigation",
    heading: txt(raw.heading),
    subHeading: txt(raw.sub_heading),
    content: mapParagraphs(raw.content),
    nav_link: mapCardsLink(raw.nav_to_sections),
  };
}

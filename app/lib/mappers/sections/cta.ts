import { StrapiCta } from "@types-content";
import { CtaUI } from "@types-content";
import { txt, mapButtons, mapParagraphs } from "../sanitize";

export function mapCta(raw: StrapiCta): CtaUI {
  return {
    type: "cta",
    ctas: mapButtons(raw.ctas),
    content: mapParagraphs(raw.content),
    heading: txt(raw.heading),
  };
}

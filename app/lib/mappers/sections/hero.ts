import type { StrapiHero } from "@types-content";
import type { HeroUI } from "@types-content";
import { mapParagraphs, mapButtons, txt, mapMedia } from "../sanitize";

export function mapHero(raw: StrapiHero): HeroUI {
  return {
    type: "hero",
    heading: txt(raw.heading),
    content: mapParagraphs(raw.content),
    ctas: mapButtons(raw.ctas),
    image_mobile: mapMedia(raw.image_mobile),
    image_sreens_desktop: mapMedia(raw.image_sreens_desktop),
    image_watch_desktop: mapMedia(raw.image_watch_desktop),
    sub_heading: txt(raw.sub_heading),
  };
}

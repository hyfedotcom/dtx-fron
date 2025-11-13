import { StrapiHeader } from "@types-content";
import { HeaderUI } from "@types-content";
import { mapButtons, mapLinks } from "../sanitize";

export function mapHeader(raw: StrapiHeader): HeaderUI {
  return {
    cta: mapButtons(raw.cta),
    links: mapLinks(raw.nav_links),
  };
}

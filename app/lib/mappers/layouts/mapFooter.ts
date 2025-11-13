import { FooterUI, StrapiFooter } from "@types-content";
import { mapColumnLinks, mapLinks, txt } from "../sanitize";

export function mapFooter(raw: StrapiFooter): FooterUI {
  return {
    column_links: mapColumnLinks(raw.column_links),
    copyright: txt(raw.copyright),
    policy_links: mapLinks(raw.policy_links),
  };
}

import { Seo } from "@types-content";
import { mapMedia } from "../sanitize";

export function mapSeo(raw: Seo) {
  return {
    id: raw.id,
    meta_title: raw.meta_title,
    meta_description: raw.meta_description,
    meta_image: mapMedia(raw.meta_image),
    meta_robots: raw.meta_robots,
    meta_viewport: raw.meta_viewport,
    canonical_URL: raw.canonical_URL,
    keywords: raw.keywords,
    structured_data: raw.structured_data,
  };
}

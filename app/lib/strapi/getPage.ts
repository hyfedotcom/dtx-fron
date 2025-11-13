import type { StrapiCollection, StrapiPageEntry } from "@types-content";
import { strapiFetch } from "./fetch";

export async function getPage(slug: string, site?: string) {
  const POPULATE_KEYS = {
    "sections.hero": [
      "ctas",
      "content",
      "image_mobile",
      "image_watch_desktop",
      "image_sreens_desktop",
    ],
    "sections.why-resolve-dtx": ["content", "cta", "cards"],
    "sections.accordion": ["content", "ctas", "cards"],
    "sections.feature-sticky": ["content", "ctas", "cards"],
    "sections.feature-scroll-showcase": ["content", "ctas", "cards"],
    "sections.solutions": ["ctas", "content", "cards"],
    "sections.cta": ["ctas", "content"],
    "sections.navigation": ["content", "nav_to_sections"],
    "sections.feature-tabs": ["content", "ctas", "cards"],
  };

  const buildPopulateParams = (map: Record<string, string[]>) =>
    Object.entries(map).reduce<Record<string, string>>((acc, [uid, keys]) => {
      keys.forEach((k) => {
        acc[`populate[sections][on][${uid}][populate][${k}][populate]`] = "*";
      });

      return acc;
    }, {});

  const params = {
    "filters[slug][$eq]": slug,
    "populate[sections][populate]": "*",
    ...buildPopulateParams(POPULATE_KEYS),
  };

  const json = await strapiFetch<StrapiCollection<StrapiPageEntry>>(
    `/api/pages`,
    "page",
    params
  );
  console.log(json);
  return json.data?.[0] ?? null;
}

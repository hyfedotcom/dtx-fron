import type { PageUI } from "@types-content";
import type { StrapiPageEntry } from "@types-content";
import { mapSection } from "./mapSection";

export function mapPage(entry: StrapiPageEntry | null): PageUI | null {
  if (!entry) return null;
  const a = entry;
  console.log(a);
  const sections = Array.isArray(a.sections)
    ? a.sections.map(mapSection).filter(Boolean)
    : [];

  return {
    slug: a.slug,
    title: a.title ?? undefined,
    sections,
  };
}

import type {
  column_links,
  LinksUI,
  StrapiButton,
  StrapiCard,
  StrapiCardLink,
  StrapiContent,
  StrapiMedia,
  StrapLinks,
} from "@types-content";
import type { ContentUI, CardUI, MediaUI, CardLinkUI } from "@types-ui";
import type { ButtonUI } from "@types-ui";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const asArray = <T>(v: T | T[] | null | undefined): T[] =>
  Array.isArray(v) ? v : v ? [v] : [];

export const txt = (v?: string | null) =>
  typeof v === "string" ? v.trim() : "";

export function mapParagraphs(
  v: StrapiContent[] | StrapiContent | null | undefined
): ContentUI[] {
  return asArray(v)
    .map((p) => txt(p?.paragraph))
    .filter(Boolean)
    .map((paragraph) => ({ paragraph }));
}

export function normalizeUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (url?.startsWith("https://") || url?.startsWith("http://")) return url;
  return `${STRAPI_URL}${url}`;
}

export function mapMedia(v: StrapiMedia | null | undefined): MediaUI {
  return {
    url: normalizeUrl(v?.url) ?? "",
    width: v?.width ?? 0,
    height: v?.height ?? 0,
    alt: v?.alt,
  };
}

export function mapButtons(
  v: StrapiButton[] | StrapiButton | null | undefined
): ButtonUI[] {
  return asArray(v)
    .map((b) => ({
      label: txt(b?.label),
      link: txt(b?.link),
      color: b?.color ?? "white",
      type: b?.type ?? "default",
    }))
    .filter((b): b is ButtonUI =>
      Boolean(b.type && b.color && b.link && b.label)
    );
}

export function mapCards(
  v: StrapiCard | StrapiCard[] | null | undefined
): CardUI[] {
  return asArray(v).map((c) => ({
    heading: txt(c.heading),
    paragraph: txt(c.paragraph),
    icon: mapMedia(c.icon),
    image: mapMedia(c.image),
    layout: c.layout ?? "layout-default",
  }));
}

export function mapCardsLink(
  v: StrapiCardLink | StrapiCardLink[] | null | undefined
): CardLinkUI[] {
  return asArray(v).map((c) => ({
    heading: txt(c.heading),
    paragraph: txt(c.paragraph),
    link: txt(c.link),
    label: txt(c.label),
    image: mapMedia(c.image),
    gradientStart: txt(c.gradient_start),
    gradientEnd: txt(c.gradient_end),
  }));
}

export function mapLinks(
  v: StrapLinks | StrapLinks[] | null | undefined
): LinksUI[] {
  console.log(v);
  return asArray(v).map((c) => ({
    label: txt(c.label),
    link: txt(c.link),
  }));
}

export function mapColumnLinks(
  v: column_links[] | column_links | null | undefined
): column_links[] {
  return asArray(v).map((c) => ({
    heading: txt(c.heading),
    nav_link: asArray(c.nav_link).map((c) => ({
      label: txt(c.label),
      link: txt(c.link),
    })),
  }));
}

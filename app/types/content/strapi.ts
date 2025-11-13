import { MediaUI } from "@types-ui";

type ButtonColor = "white" | "primary";
type ButtonType = "default" | "arrow-right" | "arrow-bottom";
type layouts =
  | "layout-asthma"
  | "layout-COPD"
  | "layout-UK-guidance"
  | "layout-lung-cancer"
  | "layout-lung-ILD"
  | "layout-default";

export type StrapiButton = {
  label: string;
  color: ButtonColor;
  link: string;
  type: ButtonType;
};

export type StrapiContent = {
  paragraph: string;
};

export type StrapiMedia = {
  url: string;
  width: number;
  height: number;
  alt?: string;
};

export type StrapiCard = {
  heading?: string | null;
  paragraph?: string | null;
  icon?: MediaUI | null;
  image?: MediaUI | null;
  layout?: layouts | null;
};

export type StrapiCardLink = {
  heading?: string | null;
  paragraph?: string | null;
  link: string | null;
  label?: string | null;
  image: MediaUI | null;
  gradient_start: string | null;
  gradient_end: string | null;
};

export type StrapiHero = {
  __component: "sections.hero";
  heading: string | null;
  sub_heading: string | null;
  content: StrapiContent[] | StrapiContent | null;
  ctas: StrapiButton[] | StrapiButton | null;
  image_sreens_desktop: MediaUI | null;
  image_watch_desktop: MediaUI | null;
  image_mobile: MediaUI | null;
};

export type StrapiWhyResolve = {
  __component: "sections.why-resolve-dtx";
  heading?: string | null;
  sub_heading?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  ctas?: StrapiButton[] | StrapiButton | null;
  cards: StrapiCard[] | StrapiCard | null;
};

export type StrapiAccordion = {
  __component: "sections.accordion";
  heading?: string | null;
  sub_heading?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  ctas?: StrapiButton[] | StrapiButton | null;
  cards: StrapiCard[] | StrapiCard | null;
};

export type StrapiFeatureSticky = {
  __component: "sections.feature-sticky";
  heading?: string | null;
  sub_heading?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  ctas?: StrapiButton[] | StrapiButton | null;
  cards: StrapiCard[] | StrapiCard | null;
};

export type StrapiFeatureScrollShowCase = {
  __component: "sections.feature-scroll-showcase";
  heading?: string | null;
  sub_heading?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  ctas?: StrapiButton[] | StrapiButton | null;
  cards: StrapiCard[] | StrapiCard | null;
};

export type StrapiSolutions = {
  __component: "sections.solutions";
  heading?: string | null;
  sub_headong?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  ctas?: StrapiButton[] | StrapiButton | null;
  cards: StrapiCardLink[] | StrapiCardLink | null;
};

export type StrapiCta = {
  __component: "sections.cta";
  heading?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  ctas: StrapiButton[] | StrapiButton | null;
};

export type StrapiNavigation = {
  __component: "sections.navigation";
  heading?: string | null;
  sub_heading?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  nav_to_sections: StrapiCardLink[] | StrapiCardLink | null;
};

export type StrapiFeatureTabs = {
  __component: "sections.feature-tabs";
  heading?: string | null;
  sub_heading?: string | null;
  content?: StrapiContent[] | StrapiContent | null;
  cards: StrapiCard[] | StrapiCard | null;
};



export type StrapiSection =
  | StrapiHero
  | StrapiWhyResolve
  | StrapiAccordion
  | StrapiFeatureSticky
  | StrapiFeatureScrollShowCase
  | StrapiSolutions
  | StrapiCta
  | StrapiFeatureTabs
  | StrapiNavigation;

export interface StrapiPageEntry {
  id: number;
  title: string;
  slug: string;
  seo: Seo;
  sections: StrapiSection | null;
}

export type StrapiCollection<T> = { data: T[] };

export interface Seo {
  id?: number;

  // Управление индексированием
  is_indexable: boolean;

  // Основные мета-поля
  meta_title?: string;
  meta_description?: string;

  // OG и визуальные данные
  meta_image?: {
    url?: string;
    alt?: string;
  };

  // Robots, canonical и keywords
  meta_robots?: string;
  meta_viewport?: string;
  canonical_URL?: string;
  keywords?: string;

  // JSON-LD / structured data
  structured_data?: string | null;
}

import { ButtonUI, CardLinkUI } from "@types-ui";
import { ContentUI } from "@types-ui";
import { CardUI } from "@types-ui";
import { MediaUI } from "@types-ui";
import { HeaderUI } from "./global";

export type HeroUI = {
  type: "hero";
  heading?: string;
  sub_heading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  image_sreens_desktop: MediaUI | null;
  image_watch_desktop: MediaUI | null;
  image_mobile: MediaUI | null;
};

export type WhyResolveUI = {
  type: "why-resolve-dtx";
  heading?: string;
  subHeading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  cards: CardUI[];
};

export type AccordionUI = {
  type: "accordion";
  heading?: string;
  subHeading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  cards: CardUI[];
};

export type FeatureStickyUI = {
  type: "feature-sticky";
  heading?: string;
  subHeading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  cards: CardUI[];
};

export type FeatureScrollShowCaseUI = {
  type: "feature-scroll-showcase";
  heading?: string;
  subHeading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  cards: CardUI[];
};

export type SolutionsUI = {
  type: "solutions";
  heading?: string;
  subHeading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  cards: CardLinkUI[];
};

export type CtaUI = {
  type: "cta";
  heading?: string;
  content?: ContentUI[];
  ctas: ButtonUI[];
};

export type NavigationUI = {
  type: "navigation";
  heading?: string;
  subHeading?: string;
  content: ContentUI[];
  nav_link: CardLinkUI[];
};

export type FeatureTabsUI = {
  type: "feature-tabs";
  heading?: string;
  sub_heading?: string;
  content?: ContentUI[];
  cards: CardUI[];
};

export type BlockUI =
  | HeroUI
  | WhyResolveUI
  | AccordionUI
  | FeatureStickyUI
  | FeatureScrollShowCaseUI
  | SolutionsUI
  | CtaUI
  | NavigationUI
  | FeatureTabsUI
  // | HeaderUI
  | null;

export interface PageUI {
  slug: string;
  title: string;
  sections: BlockUI[];
}

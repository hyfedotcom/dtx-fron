import { ButtonUI, MediaUI } from "@types-ui";
import { StrapiButton, StrapiMedia } from "./strapi";

export interface StrapiGlobal {
  header: StrapiHeader;
  footer: StrapiFooter;
  global_setting: StrapiGlobalSetting;
}

export type StrapiFooter = {
  policy_links?: StrapLinks[] | null;
  copyright?: string | null;
  column_links?: column_links[] | null;
};

export type StrapLinks = {
  label: string | null;
  link: string | null;
};

export type LinksUI = {
  label: string;
  link: string;
};

export type column_links = {
  heading: string | null;
  nav_link: LinksUI[] | null;
};

export type StrapiHeader = {
  nav_links: StrapLinks[] | null;
  cta: StrapiButton | null;
};

export type HeaderUI = {
  links: LinksUI[];
  cta: ButtonUI[];
};

export type FooterUI = {
  policy_links?: LinksUI[];
  copyright?: string;
  column_links?: column_links[];
};

export type StrapiGlobalSetting = {
  logo_footer: StrapiMedia | null;
  logo_header: StrapiMedia | null;
};

export type GlobalSetting = {
  logo_footer: MediaUI;
  logo_header: MediaUI;
  social_media?: SocialMedia[];
};

export type Target = "x" | "facebook" | "youtube" | "linkedin" | "insagram";

export interface SocialMedia {
  target: Target;
  link: string;
}

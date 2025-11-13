export interface ButtonUI {
  label: string;
  link: string;
  type: ButtonType;
  color: ButtonColor;
}

type ButtonColor = "white" | "primary";
type ButtonType = "default" | "arrow-right" | "arrow-bottom";

type layouts =
  | "layout-asthma"
  | "layout-COPD"
  | "layout-UK-guidance"
  | "layout-lung-cancer"
  | "layout-lung-ILD"
  | "layout-default";
export interface CardUI {
  heading?: string;
  paragraph?: string;
  image: MediaUI;
  icon: MediaUI;
  layout: layouts;
}

export interface ContentUI {
  paragraph: string;
}

export interface MediaUI {
  url: string;
  width: number;
  height: number;
  alt?: string;
}

export interface CardProp {
  heading: string;
  paragraph: string;
  image?: MediaUI;
  icon?: MediaUI;
}

export type CardLinkUI = {
  heading?: string;
  label?: string;
  paragraph?: string;
  link: string;
  image?: MediaUI | null;
  gradientStart?: string;
  gradientEnd?: string;
};

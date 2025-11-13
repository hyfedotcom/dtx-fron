import type {
  BlockUI,
  StrapiCta,
  StrapiFeatureScrollShowCase,
  StrapiFeatureSticky,
  StrapiFeatureTabs,
  StrapiHeader,
  StrapiNavigation,
  StrapiSolutions,
} from "@types-content";
import type {
  StrapiHero,
  StrapiWhyResolve,
  StrapiAccordion,
} from "@types-content";
import { mapHero } from "./sections/hero";
import { mapWhyResolve } from "./sections/whyResolve";
import { mapAccordion } from "./sections/accordion";
import { mapFeatureSticky } from "./sections/featureSticky";
import { mapFeatureScrollShowcase } from "./sections/featureScrollShowcase";
import { mapSolutions } from "./sections/solutions";
import { mapCta } from "./sections/cta";
import { mapNavigation } from "./sections/navigations";
import { mapFeatureTabs } from "./sections/featureTabs";
import { mapHeader } from "./layouts/header";

type Mapper<T> = (raw: T) => BlockUI | null;

export const registry = {
  "sections.hero": mapHero as Mapper<StrapiHero>,
  "sections.why-resolve-dtx": mapWhyResolve as Mapper<StrapiWhyResolve>,
  "sections.accordion": mapAccordion as Mapper<StrapiAccordion>,
  "sections.feature-sticky": mapFeatureSticky as Mapper<StrapiFeatureSticky>,
  "sections.feature-scroll-showcase":
    mapFeatureScrollShowcase as Mapper<StrapiFeatureScrollShowCase>,
  "sections.solutions": mapSolutions as Mapper<StrapiSolutions>,
  "sections.cta": mapCta as Mapper<StrapiCta>,
  "sections.navigation": mapNavigation as Mapper<StrapiNavigation>,
  "sections.feature-tabs": mapFeatureTabs as Mapper<StrapiFeatureTabs>,
  // "global.header": mapHeader as Mapper<StrapiHeader>,
};

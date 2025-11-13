import { Hero } from "./Hero/Hero";
import type { BlockUI } from "@types-content";
import { WhyResolve } from "./WhyResolve/WhyResolve";
import { Accordion } from "./Accordion/Accordion";
import { FeatureSticky } from "./FeatureSticky/FeatureSticky";
import { FeatureScrollShowcase } from "./FeatureScrollShowcase/FeatureScrollShowcase";
import { Solutions } from "./Solutions/Solutions";
import { Cta } from "./Cta/Cta";
import { Navigation } from "./Navigation/Navigation";
import { FeatureTabs } from "./FeatureTabs/FeatureTabs";

export function renderBlock(block: BlockUI, key: number) {
  switch (block?.type) {
    case "hero":
      return <Hero key={key} data={block} />;
    case "why-resolve-dtx":
      return <WhyResolve key={key} data={block} />;
    case "accordion":
      return <Accordion key={key} data={block} />;
    case "feature-sticky":
      return <FeatureSticky key={key} data={block} />;
    case "feature-scroll-showcase":
      return <FeatureScrollShowcase key={key} data={block} />;
    case "solutions":
      return <Solutions key={key} data={block} />;
    case "cta":
      return <Cta key={key} data={block} />;
    case "navigation":
      return <Navigation key={key} data={block} />;
    case "feature-tabs":
      return <FeatureTabs key={key} data={block} />;
  }
}

export function RenderBlocks({ sections }: { sections: BlockUI[] }) {
  const blockMap = Object.fromEntries(sections.map((b) => [b?.type, b]));

  const renderedTypes = new Set<string>();

  return (
    <>
      {sections.map((block, i) => {
        if (!block) return null;
        if (renderedTypes.has(block.type)) return null;

        if (block.type === "navigation") {
          const linkedTypes =
            block.nav_link?.map((s) => s.link?.replace("#", "").trim()) ?? [];

          const linkedSections = linkedTypes
            .map((type: string) => blockMap[type])
            .filter(Boolean);

          linkedSections.forEach((b) => renderedTypes.add(b.type));

          return (
            <Navigation key={i} data={block}>
              {linkedSections.map((b, j) => renderBlock(b, j))}
            </Navigation>
          );
        }

        renderedTypes.add(block.type);
        return renderBlock(block, i);
      })}
    </>
  );
}

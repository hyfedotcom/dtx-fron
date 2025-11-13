import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { FeatureTabsUI } from "@types-content";
import { FeatureTabsLogic } from "./FeatureTabsLogic";

export function FeatureTabs({ data }: { data: FeatureTabsUI }) {
  return (
    <section className="bg-gray-50 ">
      <div className="container h-full flex flex-col items-center justify-center text-center space-y-10">
        <ContentContainer data={data} />

        <FeatureTabsLogic cards={data.cards} />
      
      </div>
    </section>
  );
}

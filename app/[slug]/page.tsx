import { getPage } from "app/lib/strapi/getPage";
import { getAllRoutes } from "app/lib/strapi/getAllRoutes";
import { mapPage } from "app/lib/mappers/mapPage";
import { RenderBlocks } from "@/sections/Registry";
import { getSeoMetadata } from "@/sections/Seo/getSeoMetadata";
import { mapSeo } from "app/lib/mappers/seo/mapSeo";
import { Metadata } from "next";

type Params = { slug: string };

// 👇 Это важно: SSG stage
export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const entry = await getPage(params.slug);
  const seo = mapSeo(entry?.seo);
  console.log(seo)
  return getSeoMetadata(seo);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = await getPage(slug);
  const page = mapPage(entry);

  if (!page) return <main className="p-10">Not found</main>;

  return (
    <>
      <RenderBlocks sections={page.sections} />
    </>
  );
}

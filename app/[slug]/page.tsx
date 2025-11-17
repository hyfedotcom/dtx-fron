import { getPage } from "app/lib/strapi/getPage";
import { getAllRoutes } from "app/lib/strapi/getAllRoutes";
import { mapPage } from "app/lib/mappers/mapPage";
import { RenderBlocks } from "@/sections/Registry";
import type { Metadata } from "next";
import { mapSeo } from "app/lib/mappers/seo/mapSeo";
import { getSeoMetadata } from "@/sections/Seo/getSeoMetadata";
import { notFound } from "next/navigation";
import { cache } from "react";

type Params = { slug: string };

type PageProps = {
  params: Promise<Params>;
};

export const revalidate = 60; // или то, что вам нужно
export const dynamicParams = false; // если все пути известны из CMS

// 1. Кэшируем запрос к Strapi, чтобы не дёргать его дважды
const getPageCached = cache(async (slug: string) => {
  const entry = await getPage(slug);
  if (!entry) return null;

  return {
    entry,
    page: mapPage(entry),
    seo: entry.seo ? mapSeo(entry.seo) : null,
  };
});

// 2. Генерация статических путей
export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((r) => ({ slug: r.slug }));
}

// 3. SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  try {
    const { slug } = await params; // ждём промис
    const data = await getPageCached(slug);

    if (!data) {
      return {
        title: "Page not found",
        description: "This page does not exist.",
        robots: { index: false, follow: false },
      };
    }

    if (!data.seo) {
      return {
        title: data.page?.title ?? "Page",
        description: "Default description",
        robots: { index: false, follow: false },
      };
    }

    return getSeoMetadata(data.seo);
  } catch (e) {
    console.error(`SEO error on slug (metadata):`, e);
    return {
      title: "Page",
      description: "Default description",
      robots: { index: false, follow: false },
    };
  }
}

// 4. Рендер страницы
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPageCached(slug);

  if (!data?.page) {
    notFound();
  }

  return <RenderBlocks sections={data.page.sections} />;
}

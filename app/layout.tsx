import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { getGlobal } from "./lib/strapi/getGlobal";
import { mapHeader } from "./lib/mappers/layouts/header";
import { Header } from "@/layouts/Header";
import { mapGlobalSetting } from "./lib/mappers/layouts/globalSetting";
import { Footer } from "@/layouts/Footer";
import { mapFooter } from "./lib/mappers/layouts/mapFooter";
import { getPage } from "./lib/strapi/getPage";
import { getSeoMetadata } from "@/sections/Seo/getSeoMetadata";
import { Metadata } from "next";
import { mapSeo } from "./lib/mappers/seo/mapSeo";
import { getAllRoutes } from "./lib/strapi/getAllRoutes";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const entry = await getPage(params.slug);

    if (!entry?.seo) {
      return {
        title: "Page",
        description: "Default description",
      };
    }

    const seo = mapSeo(entry.seo);
    return getSeoMetadata(seo);
  } catch (e) {
    console.error(`SEO error on slug ${params.slug}:`, e);
    return {
      title: "Page",
      description: "Default description",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const global = await getGlobal();
  const header = mapHeader(global.header);
  const footer = mapFooter(global.footer);
  const setting = mapGlobalSetting(global.global_setting);

  return (
    <html lang="en">
      <body className={`${notoSansJp.variable} ${inter.variable} antialiased`}>
        <Header
          data={header}
          logo={setting.logo_header}
          social_media={setting.social_media}
        />
        {children}
        <Footer data={footer} global={setting} />
      </body>
    </html>
  );
}

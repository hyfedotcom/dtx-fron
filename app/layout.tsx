import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { getGlobal } from "./lib/strapi/getGlobal";
import { mapHeader } from "./lib/mappers/layouts/header";
import { Header } from "@/layouts/Header";
import { mapGlobalSetting } from "./lib/mappers/layouts/globalSetting";
import { Footer } from "@/layouts/Footer";
import { mapFooter } from "./lib/mappers/layouts/mapFooter";
import { NavBetweenPaths } from "@/sections/NavBetweenPaths/NavBetweenPaths";

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
        />{" "}
        <NavBetweenPaths data={setting.navigation_between_paths} />
        {children}
        <Footer data={footer} global={setting} />
      </body>
    </html>
  );
}

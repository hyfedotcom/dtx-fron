import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { getGlobal } from "./lib/strapi/getGlobal";
import { mapHeader } from "./lib/mappers/layouts/header";
import { Header } from "@/layouts/Header";
import { mapGlobalSetting } from "./lib/mappers/layouts/globalSetting";
import { Footer } from "@/layouts/Footer";
import { mapFooter } from "./lib/mappers/layouts/mapFooter";
import { NavBetweenPaths } from "@/sections/NavBetweenPaths/NavBetweenPaths";
import { cookies } from "next/headers";
import {
  ANALYTICS_CONSENT_COOKIE,
  parseConsentFromCookieString,
  AnalyticsConsent,
} from "@/cookies/cookies";
import { ConsentProvider } from "./context/ConsentContext";
import { CookieBanner } from "@/cookies/CookieBanner";
import { CookieSettingsButton } from "@/cookies/CookieSettingsButton";
import { AnalyticsLoader } from "@/analytics/AnalyticsLoader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

  const cookiesStore = cookies();
  const raw = (await cookiesStore).get(ANALYTICS_CONSENT_COOKIE)?.value ?? null;
  const inittialConsent: AnalyticsConsent = parseConsentFromCookieString(
    raw ? `${ANALYTICS_CONSENT_COOKIE}=${raw}` : null
  );

  return (
    <html lang="en">
      <body className={`${notoSansJp.variable} ${inter.variable} antialiased`}>
        <Header
          data={header}
          logo={setting.logo_header}
          social_media={setting.social_media}
        />
        <ConsentProvider initialConsent={inittialConsent}>
          <CookieBanner />
          <CookieSettingsButton />
          <AnalyticsLoader />
        </ConsentProvider>
        <NavBetweenPaths data={setting.navigation_between_paths} />
        {children}
        <Footer data={footer} global={setting} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

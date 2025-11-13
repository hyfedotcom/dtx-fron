import { SocialMediaRender } from "@/ui/SocialMediaRender";
import getLinkKind from "@hooks/getLinkKind";
import { FooterUI, GlobalSetting } from "@types-content";
import Image from "next/image";
import Link from "next/link";

export function Footer({
  data,
  global,
}: {
  data: FooterUI;
  global: GlobalSetting;
}) {
  const { column_links, copyright, policy_links } = data;
  const { logo_footer, social_media = [] } = global;
 

  return (
    <footer className=" bg-white w-full  z-3 relative pt-20">
      <div className="container py-0! pt-[100px! pb-10! space-y-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="space-y-10">
            <a href="#hero">
              <Image
                src={logo_footer?.url || "/logos/logo.png"}
                alt={logo_footer?.alt || "logo"}
                width={logo_footer?.width ?? 200}
                height={logo_footer?.height ?? 70}
              />
            </a>

            <div className="flex gap-5 mt-6">
              {social_media &&
                social_media.length > 0 &&
                social_media.map((media, index) => (
                  <SocialMediaRender data={media} key={index} />
                ))}
            </div>
          </div>
          {column_links &&
            column_links.length > 0 &&
            column_links.map((column, idx) => (
              <div key={idx}>
                <p className="mb-6 text-[14px]! font-medium uppercase text-gray-600">
                  {column.heading}
                </p>
                <ul className="space-y-3">
                  {column.nav_link?.map((l, i) => {
                    const isExternal = getLinkKind(l.link);

                    return (
                      <li key={i}>
                        <Link
                          href={l.link}
                          target={
                            isExternal === "external"
                              ? "_blank"
                              : isExternal === "anchor"
                              ? ""
                              : "_self"
                          }
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-black font-semibold body-medium leading-[100%] transition-color duration-200 hover:text-primary "
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="flex justify-between">
          {copyright && <p>{copyright}</p>}

          {policy_links &&
            policy_links.length > 0 &&
            policy_links.map((l, index) => (
              <Link
                key={index}
                className="text-[14px] font-medium text-black hover:text-primary duration-200"
                href={l.link}
              >
                {l.label}
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}

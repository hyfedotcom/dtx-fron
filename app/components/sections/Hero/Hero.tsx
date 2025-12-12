import { Button } from "@/ui/Button/Button";
import { SubHeading } from "@/ui/SubHeading/SubHeading";
import { HeroUI } from "@types-content";
import { image } from "framer-motion/m";
import Image from "next/image";

export function Hero({ data }: { data: HeroUI }) {
  const {
    image_mobile,
    image_sreens_desktop,
    image_watch_desktop,
    content,
    ctas,
    heading,
    sub_heading,
    type,
  } = data;

  return (
    <main id={type} className="w-full bg-gray-50 p-0 lg:p-10 z-1003 relative">
      <div
        className={` pt-35 lg:pt-48 relative ${
          image_sreens_desktop?.url &&
          ctas.length != 0 &&
          content[0]?.paragraph != undefined
            ? "h-full lg:h-[1390px] "
            : sub_heading && ctas.length != 0
            ? "lg:h-[1390px]"
            : image_sreens_desktop?.url
            ? "lg:h-[1000px]"
            : "h-full flex items-center justify-center pb-48"
        } overflow-hidden rounded-b-[20px] lg:rounded-[40px] space-y-5 ${
          content.length != 0 ||
          (ctas.length != 0 && " md:space-y-10 lg:space-y-32")
        }`}
        style={{ background: "var(--shadow-brand)" }}
      >
        {/*  WATCH */}
        {image_watch_desktop?.url && image_sreens_desktop?.url && (
          <div
            className={`hidden lg:block  absolute -translate-[200%] ${
              ctas.length != 0 && content[0]?.paragraph != undefined
                ? "translate-y-[162%]"
                : sub_heading && ctas.length != 0
                ? "translate-y-[162%]"
                : "translate-y-[82%]"
            }  xl:-translate-x-[220%] left-1/2  glass max-w-[270px] h-max py-20 px-10  border-t-4 border-white/40 translate-y-[40%]  z-3`}
          >
            <Image
              src={image_watch_desktop?.url ?? ""}
              alt={image_watch_desktop?.alt ?? "screens of resolve dtx app"}
              width={190}
              height={image_watch_desktop?.height}
              priority  
              className="object-cover"
            ></Image>
          </div>
        )}

        {/*  SCREENS */}
        {image_sreens_desktop?.url && (
          <div
            className={`hidden lg:flex  glass absolute w-[1000px]  ${
              ctas.length != 0 && content[0]?.paragraph != undefined
                ? "translate-y-[65%]"
                : sub_heading && ctas.length != 0
                ? "translate-y-[65%]"
                : "translate-y-[35%]"
            } ${
              image_watch_desktop?.url
                ? "translate-x-[-40%]"
                : "translate-x-[-50%]"
            } left-1/2  max-w-[1017px]  py-10 px-20  border-t-4  border-white/40 z-2`}
          >
            <Image
              src={image_sreens_desktop?.url ?? ""}
              alt={image_sreens_desktop?.alt ?? "screens of resolve dtx app"}
              width={840}
              height={image_sreens_desktop?.height}
              priority
              className="object-cover"
            ></Image>
          </div>
        )}

        {/* CONTENT  */}
        <div className="relative z-2 px-4">
          {sub_heading && (
            <div className="mx-auto w-max mb-10">
              <SubHeading divClass="bg-[#F5F5F5]/40 border-white/0 shadow-classic">
                {sub_heading}
              </SubHeading>
            </div>
          )}
          <div className="max-w-[900px] text-center mx-auto space-y-7">
            {heading && <h1 className="title-grad ">{heading}</h1>}
            {content?.length != 0 &&
              content.map((c, i) => (
                <p key={i} className="body-large text-white font-medium!">
                  {c.paragraph}
                </p>
              ))}
          </div>
          {ctas?.length != 0 && (
            <div className="mx-auto flex flex-wrap justify-center gap-5 mt-10">
              {ctas.map((c, i) => {
                return (
                  <div
                    key={i}
                    className="w-full md:w-max shadow-button-hero rounded-full"
                  >
                    {" "}
                    <Button data={c} />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* MOBILE */}
        {image_mobile?.url && (
          <div className="md:w-[90%]  lg:hidden relative glass  mx-auto pt-3 border-t-4 border-white/40 translate-y-[15%] z-2">
            <Image
              src={image_mobile?.url ?? ""}
              alt={image_mobile?.alt ?? "screens of resolve dtx app"}
              width={image_mobile.width}
              height={image_mobile.height}
              priority
              className="object-cover w-full"
            ></Image>
          </div>
        )}
        {!image_mobile?.url && <div className="w-full h-[10vh]" />}

        {/* BG LAYOUT */}
        <div className=" absolute inset-0 w-full h-full bg-black/30 z-1"></div>
        <div className=" absolute inset-0 w-full h-full bg-[#F9FCFF]/10 backdrop-blur-[80px] z-1"></div>

        {/* VIDEO */}

        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video/hero-dtx.mp4"
          preload="metadata"
          autoPlay
          muted
          playsInline
          loop
          disableRemotePlayback
        ></video>
      </div>
    </main>
  );
}

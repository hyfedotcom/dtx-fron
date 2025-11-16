import { Button } from "@/ui/Button/Button";
import { SubHeading } from "@/ui/SubHeading/SubHeading";
import { HeroUI } from "@types-content";
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
  } = data;

  return (
    <main className="w-full p-0 md:p-10 bg-gray-50">
      <div
        className={` pt-35 lg:pt-48 relative ${
          image_sreens_desktop?.url
            ? "h-auto lg:h-[1390px] "
            : "h-auto flex items-center justify-center pb-48"
        } overflow-hidden rounded-b-[20px] lg:rounded-[40px] space-y-5 md:space-y-10 lg:space-y-32`}
        style={{ background: "var(--shadow-brand)" }}
      >
        {/* CONTENT  */}
        <div className="relative z-2 px-4">
          {sub_heading && (
            <div className="mx-auto w-max mb-10">
              <SubHeading>{sub_heading}</SubHeading>
            </div>
          )}
          <div className="max-w-[900px] text-center mx-auto space-y-7">
            {heading && (
              <h1 className="title-grad ">
                Digital Therapeutic for Chronic Cough
              </h1>
            )}
            {content &&
              content.map((c, i) => (
                <p key={i} className="body-large text-white font-medium!">
                  {c.paragraph}
                </p>
              ))}
          </div>
          {ctas && (
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

        {/*  WATCH */}
        {image_sreens_desktop?.url && (
          <div className="hidden lg:block  absolute -translate-[200%] xl:-translate-x-[220%] left-1/2  glass max-w-[270px] h-max py-20 px-10  border-t-4 border-white/40 translate-y-[40%]  z-3">
            <Image
              src={image_watch_desktop?.url ?? ""}
              alt={image_watch_desktop?.alt ?? "screens of resolve dtx app"}
              width={image_watch_desktop?.width}
              height={image_watch_desktop?.height}
            ></Image>
          </div>
        )}

        {/*  SCREENS */}
        {image_sreens_desktop?.url && (
          <div className="hidden lg:block  glass absolute w-[1000px] translate-x-[-48%] xl:translate-x-[-40%] left-1/2  max-w-[1017px]  py-10 px-20  border-t-4  border-white/40 z-2">
            <Image
              src={image_sreens_desktop?.url ?? ""}
              alt={image_sreens_desktop?.alt ?? "screens of resolve dtx app"}
              width={image_sreens_desktop?.width}
              height={image_sreens_desktop?.height}
            ></Image>
          </div>
        )}

        {/* MOBILE */}
        {image_mobile?.url && (
          <div className="md:w-[90%]  lg:hidden relative glass  mx-auto pt-3 border-t-4 border-white/40 translate-y-[15%] z-2">
            <Image
              src={image_mobile?.url ?? ""}
              alt={image_mobile?.alt ?? "screens of resolve dtx app"}
              width={image_mobile.width}
              height={image_mobile.height}
              className="object-cover w-full"
            ></Image>
          </div>
        )}

        {/* BG LAYOUT */}
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

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
        className={`bg-primary-800 pt-35 lg:pt-48 ${
          image_sreens_desktop?.url
            ? "lg:h-[1390px] "
            : "h-auto flex items-center justify-center pb-48"
        } overflow-hidden rounded-b-[20px] lg:rounded-[40px] space-y-10 lg:space-y-32`}
      >
        <div>
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
                  <div key={i} className="w-full md:w-max shadow-button-hero">
                    {" "}
                    <Button data={c} />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* DESKTOP   */}
        {image_sreens_desktop?.url && (
          <div className="hidden lg:flex justify-center pr-30">
            {/*  WATCH  */}
            {image_sreens_desktop?.url && (
              <div className="glass max-w-[270px] h-max py-20 px-10  border-t-4 border-white/40 translate-y-[30%] translate-x-20 z-1">
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
              <div className="glass max-w-[1017px] h-max py-10 px-20 border-t-4 border-white/40">
                <Image
                  src={image_sreens_desktop?.url ?? ""}
                  alt={
                    image_sreens_desktop?.alt ?? "screens of resolve dtx app"
                  }
                  width={image_sreens_desktop?.width}
                  height={image_sreens_desktop?.height}
                ></Image>
              </div>
            )}
          </div>
        )}

        {/* MOBILE */}
        {image_mobile?.url && (
          <div className=" glass w-full mx-auto pt-3 border-t-4 border-white/40 translate-y-[10%] z-1">
            <Image
              src={image_mobile?.url ?? ""}
              alt={image_mobile?.alt ?? "screens of resolve dtx app"}
              width={image_mobile.width}
              height={image_mobile.height}
              className="object-cover w-full"
            ></Image>
          </div>
        )}
      </div>
    </main>
  );
}

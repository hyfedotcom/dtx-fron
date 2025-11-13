import { Button } from "@/ui/Button/Button";
import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { CtaUI } from "@types-content";
import Image from "next/image";

export function Cta({ data }: { data: CtaUI }) {
  const { ctas, type, content, heading } = data;
  const sizeHeading = (heading ?? "").length;
  return (
    <section id={data.type} className="relative py-[200px]">
      <Image
        className="z-0"
        src="/cta/bg.png"
        alt="background image"
        fill
        sizes="100vh"
      />
      <div className="conteiner relative z-1">
        <div className="flex items-center justify-between flex-col text-center">
          <div className="space-y-5 md:space-y-6">
            {heading && (
              <h2
                className={`${
                  sizeHeading < 50
                    ? "text-[36px] md:text-[80px] "
                    : "text-[32px] md:text-[60px]"
                } max-w-[1200px] font-semibold title-grad leading-[130%] text-balance `}
              >
                {data.heading}
              </h2>
            )}
            {content && (
              <div>
                {content.map((p, i) => (
                  <p
                    className={`body-large mx-auto max-w-[700px] text-white font-medium! text-balance`}
                    key={i}
                  >
                    {p.paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
          {ctas?.length > 0 && (
            <div className="flex flex-wrap gap-5 mt-10">
              {ctas.map((ele, index) => (
                <Button key={index} data={ele} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

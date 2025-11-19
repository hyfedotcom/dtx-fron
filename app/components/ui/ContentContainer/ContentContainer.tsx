import { ButtonUI } from "@types-ui";
import { Button } from "../Button/Button";
import { SubHeading } from "../SubHeading/SubHeading";
import { SmartText } from "./SmartText";

type Props = {
  heading?: string;
  subHeading?: string;
  content?: { paragraph: string }[];
  ctas?: ButtonUI[];
};

export function ContentContainer({
  data,
  classContainer,
  classParagraph,
  classHeading,
  classTextContiner = "space-y-5 md:space-y-6`",
}: // layout,
{
  classContainer?: string;
  classHeading?: string;
  classParagraph?: string;
  classTextContiner?: string;
  data: Props;
  // layout?: "horizontal" | "vertical";
}) {
  const { content, ctas, heading, subHeading } = data;
  const headingSize = (heading ?? "").length > 50 ? "h2-medium" : "h2-large";
  const paragraphSize = (content ?? "").length < 100 ? "body-medium" : "h4";

  if (
    content?.length === 0 &&
    ctas?.length === 0 &&
    heading === "" &&
    subHeading === ""
  )
    return null;

  return (
    <div className={`${classContainer}`}>
      <div className={`${classTextContiner} `}>
        {subHeading && (
          <SubHeading
            divClass={`bg-[#87CAE7]/10 border-[#87CAE7]/100 w-max ${
              subHeading?.length > 25 && "hidden"
            } md:block`}
            pClass="text-black/60 text-[12px] text-[14px]"
          >
            {subHeading}
          </SubHeading>
        )}
        {heading && (
          <h2
            className={`text-heading text-balance ${classHeading} ${headingSize} `}
          >
            {heading}
          </h2>
        )}
        {content && (
          <div>
            {content.map((p, i) => (
              <p
                className={`${paragraphSize} ${classParagraph} text-balance`}
                key={i}
              >
                <SmartText text={p.paragraph} />
              </p>
            ))}
          </div>
        )}
      </div>
      {ctas?.length != undefined && ctas?.length > 0 && (
        <div className=" flex flex-wrap gap-5 mt-10">
          {ctas.map((ele, index) => (
            <Button key={index} data={ele} />
          ))}
        </div>
      )}
    </div>
  );
}

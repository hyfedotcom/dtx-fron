import { ButtonUI } from "@types-ui";
import { Button } from "../Button/Button";

type Props = {
  heading?: string;
  sub_heading?: string;
  content?: { paragraph: string }[];
  ctas?: ButtonUI[];
};

export function ContentContainer({
  data,
  classContainer,
  classParagraph,
  classHeading,
}: {
  classContainer?: string;
  classHeading?: string;
  classParagraph?: string;
  data: Props;
}) {
  const { content, ctas, heading, sub_heading } = data;
  const headingSize = (heading ?? "").length > 50 ? "h2-medium" : "h2-large";
  const paragraphSize = (heading ?? "").length < 100 ? "body-medium" : "h4";
  return (
    <div className={`${classContainer}`}>
      <div className="space-y-5 md:space-y-6">
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
                {p.paragraph}
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

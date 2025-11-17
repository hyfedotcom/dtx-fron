import { RichTextUI } from "@types-content";
import { RichTextBlocks } from "./RichTextBlocks";

export default async function RichText({ data }: { data: RichTextUI }) {
  const { rich_text, type } = data;
  console.log(data);
  return (
    <div id={type} className=" bg-gray-50">
      <section className="container">
        {rich_text && (
          <RichTextBlocks
            content={
              typeof rich_text === "string"
                ? JSON.parse(rich_text)
                : Array.isArray(rich_text)
                ? rich_text
                : null
            }
          />
        )}
      </section>
    </div>
  );
}

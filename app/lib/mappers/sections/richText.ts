import { RichTextUI, StrapiRichText } from "@types-content";

export function mapRichText(raw: StrapiRichText): RichTextUI {
  console.log(raw);
  return {
    type: "rich-text",
    rich_text: raw.rich_text_block ?? "",
  };
}

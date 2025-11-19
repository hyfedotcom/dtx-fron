import { RichTextUI, StrapiRichText } from "@types-content";

export function mapRichText(raw: StrapiRichText): RichTextUI {

  return {
    type: "rich-text",
    rich_text: raw.rich_text_block ?? "",
  };
}

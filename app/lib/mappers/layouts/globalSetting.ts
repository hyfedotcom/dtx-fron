import { StrapiGlobalSetting } from "@types-content";
import { GlobalSetting } from "@types-content";
import { mapMedia } from "../sanitize";

export function mapGlobalSetting(raw: StrapiGlobalSetting): GlobalSetting {
  return {
    logo_footer: mapMedia(raw.logo_footer),
    logo_header: mapMedia(raw.logo_header),
  };
}

import { StrapiGlobalSetting } from "@types-content";
import { GlobalSetting } from "@types-content";
import { mapColumnLinks, mapMedia, mapSocialMedia } from "../sanitize";

export function mapGlobalSetting(raw: StrapiGlobalSetting): GlobalSetting {
  return {
    logo_footer: mapMedia(raw.logo_footer),
    logo_header: mapMedia(raw.logo_header),
    social_media: mapSocialMedia(raw.social_media),
    navigation_between_paths: mapColumnLinks(raw.navigation_between_paths),
  };
}

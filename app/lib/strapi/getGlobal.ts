import { StrapiCollection } from "@types-content";
import { strapiFetch } from "./fetch";
import { StrapiGlobal } from "app/types/content/global";

export async function getGlobal() {
  const query = new URLSearchParams({
    "populate[footer][populate][policy_links][populate]": "*",
    "populate[footer][populate][column_links][populate][nav_link]": "*",
    "populate[header][populate][cta]": "*",
    "populate[header][populate][nav_links]": "*",
    "populate[global_setting][populate][logo_footer][populate]": "*",
    "populate[global_setting][populate][logo_header][populate]": "*",
    "populate[global_setting][populate][social_media][populate]": "*",
    "populate[global_setting][populate][navigation_between_paths][populate][nav_link]":
      "*",
  }).toString();

  const json = await strapiFetch<StrapiCollection<StrapiGlobal>>(
    `/api/globals?${query}`,
    "global"
  );

  return json.data[0];
}

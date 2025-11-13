import { StrapiCollection } from "@types-content";
import { strapiFetch } from "./fetch";
import { StrapiGlobal } from "app/types/content/global";

export async function getGlobal() {
  const query = new URLSearchParams({
    "populate[footer]": "*",
    "populate[footer][populate][policy_links]": "*",
    "populate[footer][populate][column_links][populate][nav_link]": "*",
    "populate[header][populate][cta]": "*",
    "populate[header][populate][nav_links]": "*",
    "populate[global_setting][populate]": "*",
  }).toString();

  const json = await strapiFetch<StrapiCollection<StrapiGlobal>>(
    `/api/globals?${query}`
  );

  return json.data[0];
}

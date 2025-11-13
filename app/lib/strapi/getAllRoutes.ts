import { strapiFetch } from "./fetch";

export async function getAllRoutes() {
  const qs = new URLSearchParams();
  qs.set("fields[0]", "slug");
  qs.set("pagination[pageSize]", "100");

  const json = await strapiFetch<{
    data: { slug: string }[];
  }>(`/api/pages?${qs}`);

  return json.data
    .filter((p) => p.slug)
    .map((p) => ({
      slug: p.slug,
    }));
}

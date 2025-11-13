const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
const TOKEN = process.env.STRAPI_API_TOKEN;

export async function strapiFetch<T>(
  path: string,
  tag?: string,
  params?: Record<string, string>
): Promise<T> {
  const query = params
    ? new URLSearchParams(
        Object.fromEntries(
          Object.entries(params).map(([k, v]) => [k, String(v)])
        )
      ).toString()
    : "";
  const url = `${STRAPI_URL}${path}${query ? "?" + query : ""}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    next: {
      tags: tag ? [tag] : [],
      revalidate: 60,
    },
  });

 
  if (!res.ok) {
    const text = await res.text();
    console.error("❌ Strapi error:", res.status, res.statusText, text);
    throw new Error(`Strapi ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

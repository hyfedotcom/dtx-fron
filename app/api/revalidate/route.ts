import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (secret != process.env.REVALIDATE_SECRET_KEY) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
  const body = await req.json();
  const model = body.model;
  const entry = body.entry;

  console.log("Oncoming webhook:", body);

  try {
    if (model === "global") {
      console.log(`🌍 Global content updated for site: global`);
      revalidateTag(`global`, "max");
      return NextResponse.json({ type: "global" });
    }

    if (model === "page") {
      const pageSlug = entry.slug;
      console.log(`Page updated ${pageSlug}`);

      revalidateTag(pageSlug, "max");
      return NextResponse.json({
        type: "Page",
        slug: pageSlug,
      });
    }
    return NextResponse.json({ message: "Unhandled model", model });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: "Revalidation failde" }, { status: 500 });
  }
}

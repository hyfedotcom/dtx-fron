import Page from "./[slug]/page";
import { generateMetadata as gen } from "./[slug]/page";

export default function MainPage() {
  return Page({ params: Promise.resolve({ slug: "original-home" }) });
}

export async function generateMetadata() {
  return gen({ params: Promise.resolve({ slug: "original-home" }) });
}

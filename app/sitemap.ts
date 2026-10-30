import type { MetadataRoute } from "next"
import { profile } from "~/data/portfolio"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${profile.url}/` }, { url: `${profile.url}/projects/` }]
}

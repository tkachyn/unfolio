import type { MetadataRoute } from "next";
import { site } from "@/site";

const routes = ["/", "/projects", "/work", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
  }));
}

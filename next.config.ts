import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A plain static site (out/), published to GitHub Pages and served at
  // knllabs.dev/ through the ENGINOS gateway.
  output: "export",
  // /projects → /projects/index.html, which every static host serves.
  trailingSlash: true,
  // There's no image optimization server on a static host.
  images: { unoptimized: true },
};

export default nextConfig;

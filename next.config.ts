import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy WordPress slug: "Accommodation" content was published at
      // /transportation-2/ (a copy-paste leftover from the Transportation page).
      // Canonical URL here is /accommodation.
      {
        source: "/transportation-2",
        destination: "/accommodation",
        permanent: true,
      },
      // WordPress served every page with a trailing slash; send old bookmarks/links
      // for any content route to the same path without one.
    ];
  },
};

export default nextConfig;

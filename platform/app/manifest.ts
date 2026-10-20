import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Velmora — Financing, made clearer",
    short_name: "Velmora",
    description: "Finanzierungsmöglichkeiten transparent berechnen und unverbindlich anfragen.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F6F0",
    theme_color: "#183B35",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

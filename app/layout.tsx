import type { Metadata } from "next";
import { Geist, IBM_Plex_Serif, Spectral } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { site, siteStyle } from "@/site";
import "./globals.css";

// register fonts at the root so every route shares the same CSS variables
const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spectral = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: site.name,
  description: `${site.name} — ${site.tagline}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-motion={site.appearance.motion.enabled ? "on" : "off"}
      className={`${geist.variable} ${plexSerif.variable} ${spectral.variable}`}
      style={siteStyle}
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

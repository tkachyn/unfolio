import type { ReactNode } from "react";
import Link from "next/link";
import { CopyEmail } from "@/components/copy-email";
import { HoverLink } from "@/components/hover-link";
import { site } from "@/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="shell">
      <header className="site-header">
        <div className="identity">
          <Link href="/" className="identity__name">
            {site.name}
          </Link>
          <p className="identity__tagline">{site.tagline}</p>
        </div>
        <nav className="site-nav" aria-label="primary">
          {site.nav.map((item) => (
            <HoverLink key={item.href} href={item.href}>
              {item.label}
            </HoverLink>
          ))}
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer id="site-footer" className="site-footer">
        <div className="socials">
          {site.socials.map((item) => (
            <span key={item.label} className="social">
              [{" "}
              <HoverLink href={item.href} variant="footer" external>
                {item.label}
              </HoverLink>{" "}
              ]
            </span>
          ))}
        </div>
        <CopyEmail />
      </footer>
    </div>
  );
}

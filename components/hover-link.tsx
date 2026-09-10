import Link from "next/link";

type HoverLinkProps = {
  href: string;
  children: string;
  variant?: "nav" | "inline" | "footer";
  external?: boolean;
};

export function HoverLink({
  href,
  children,
  variant = "nav",
  external = false,
}: HoverLinkProps) {
  const className = `hover-link hover-link--${variant}`;

  if (external) {
    // use a plain anchor so external URLs bypass client-side routing
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hover-link__label">{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="hover-link__label">{children}</span>
    </Link>
  );
}

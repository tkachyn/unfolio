import { HoverLink } from "@/components/hover-link";

// support the link syntax used in site.ts without adding a markdown dependency
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

export function RichText({ text }: { text: string }) {
  const nodes = [];
  let offset = 0;

  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;

    if (index > offset) {
      nodes.push(text.slice(offset, index));
    }

    const label = match[1];
    const href = match[2];

    nodes.push(
      <HoverLink
        key={`${href}-${index}`}
        href={href}
        variant="inline"
        external={isExternal(href)}
      >
        {label}
      </HoverLink>,
    );

    offset = index + match[0].length;
  }

  if (offset < text.length) {
    nodes.push(text.slice(offset));
  }

  return nodes;
}

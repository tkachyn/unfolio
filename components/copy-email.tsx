"use client";

import { useState } from "react";
import { site } from "@/site";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    // keep a DOM fallback for browsers without the async clipboard API
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const field = document.createElement("textarea");
      field.value = site.email;
      field.setAttribute("readonly", "");
      field.style.position = "absolute";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      className="copy-email"
      onClick={copy}
      aria-label={copied ? "email copied" : "click to copy email"}
    >
      <span className="copy-email__address">{site.email}</span>
      <span className="copy-email__hint" aria-hidden="true">
        {copied ? "copied" : "click to copy"}
      </span>
    </button>
  );
}

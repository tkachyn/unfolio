"use client";

import { useLayoutEffect, useRef } from "react";

type VerticalRuleProps = {
  className?: string;
};

const MODAL_DURATION_S = 1.2;
const MODAL_HEIGHT_REM = 18;

export function VerticalRule({ className = "panel__rule" }: VerticalRuleProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    const apply = (restart: boolean) => {
      // scale the drop animation to the rendered rule height
      const height = el.getBoundingClientRect().height;
      const rem = Number.parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const duration = Math.max(
        0.7,
        (height / rem) * (MODAL_DURATION_S / MODAL_HEIGHT_REM),
      );
      el.style.setProperty("--rule-drop-duration", `${duration}s`);

      if (restart) {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.removeProperty("animation");
      }
    };

    apply(true);
    const observer = new ResizeObserver(() => apply(false));
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={className} aria-hidden="true" />;
}

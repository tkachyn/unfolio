"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HoverLink } from "@/components/hover-link";
import { RichText } from "@/components/rich-text";
import type { Project } from "@/site";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const leavingRef = useRef(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const requestClose = useCallback(() => {
    if (leavingRef.current) {
      return;
    }

    leavingRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onCloseRef.current();
      return;
    }

    setLeaving(true);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [requestClose]);

  useEffect(() => {
    if (!leaving) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onCloseRef.current();
    }, 320);

    return () => window.clearTimeout(timeout);
  }, [leaving]);

  return (
    <div
      className={`modal${leaving ? " modal--leaving" : ""}`}
      role="presentation"
      onAnimationEnd={(event) => {
        if (!leaving || event.target !== event.currentTarget) {
          return;
        }

        onCloseRef.current();
      }}
    >
      <button
        type="button"
        className="modal__backdrop"
        aria-label="close project"
        onClick={requestClose}
      />
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="modal__top">
          <div>
            <h2 id="project-modal-title" className="modal__title">
              {project.title}
            </h2>
            <p className="modal__year">{project.year}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="hover-link hover-link--nav modal__close"
            onClick={requestClose}
          >
            <span className="hover-link__label">close</span>
          </button>
        </div>

        <div className="modal__body">
          <div className="modal__rule" aria-hidden="true" />
          <div className="modal__copy">
            <p>
              <RichText text={project.details} />
            </p>
            {project.benchmarks.length > 0 ? (
              <div className="modal__benchmarks">
                <p className="modal__benchmarks-label">benchmarks</p>
                <ul className="modal__benchmarks-list">
                  {project.benchmarks.map((benchmark) => (
                    <li key={benchmark}>{benchmark}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.stack.length > 0 ? (
              <p className="modal__stack">{project.stack.join("  ·  ")}</p>
            ) : null}
            {project.github ? (
              <p>
                <HoverLink href={project.github} variant="inline" external>
                  view on github
                </HoverLink>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

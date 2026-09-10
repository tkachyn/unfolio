"use client";

import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { RichText } from "@/components/rich-text";
import { site, type Project } from "@/site";

export function ProjectList() {
  const [active, setActive] = useState<Project | null>(null);

  // keep modal state local so project content remains editable in site.ts
  return (
    <>
      <div className="list">
        {site.projects.items.map((project) => (
          <article key={project.title} className="entry">
            <div className="entry__meta">
              <button
                type="button"
                className="entry__open"
                onClick={() => setActive(project)}
              >
                <span className="hover-link hover-link--inline">
                  <span className="hover-link__label">{project.title}</span>
                </span>
              </button>
              <span className="entry__year">{project.year}</span>
            </div>
            <p className="entry__body">
              <RichText text={project.description} />
            </p>
          </article>
        ))}
      </div>

      {active ? (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      ) : null}
    </>
  );
}

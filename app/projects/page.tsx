import { ProjectList } from "@/components/project-list";
import { VerticalRule } from "@/components/vertical-rule";
import { site } from "@/site";

export default function ProjectsPage() {
  return (
    <section className="panel" aria-labelledby="projects-title">
      <h1 id="projects-title" className="panel__title">
        {site.projects.title}
      </h1>
      <p className="panel__hint">click a title to view details</p>
      <div className="panel__body">
        <VerticalRule />
        <ProjectList />
      </div>
    </section>
  );
}

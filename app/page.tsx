import { RichText } from "@/components/rich-text";
import { VerticalRule } from "@/components/vertical-rule";
import { site } from "@/site";

export default function AboutPage() {
  return (
    <section className="panel" aria-labelledby="about-title">
      <h1 id="about-title" className="panel__title">
        {site.about.title}
      </h1>
      <div className="panel__body">
        <VerticalRule />
        <div className="panel__about">
          <div className="panel__copy">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
          {site.about.stack.length > 0 ? (
            <div className="panel__stack">
              <p className="panel__stack-label">stack</p>
              <p className="panel__stack-list">
                {site.about.stack.join("  ·  ")}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

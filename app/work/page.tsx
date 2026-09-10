import { RichText } from "@/components/rich-text";
import { VerticalRule } from "@/components/vertical-rule";
import { site } from "@/site";

export default function WorkPage() {
  return (
    <section className="panel" aria-labelledby="work-title">
      <h1 id="work-title" className="panel__title">
        {site.work.title}
      </h1>
      <div className="panel__body">
        <VerticalRule />
        <div className="list">
          {site.work.items.map((item) => (
            <article key={`${item.company}-${item.year}`} className="entry entry--work">
              <h2 className="entry__title">{item.role}</h2>
              <span className="entry__year">{item.year}</span>
              <p className="entry__place">{item.company}</p>
              {item.location ? (
                <span className="entry__location">{item.location}</span>
              ) : null}
              <p className="entry__body">
                <RichText text={item.description} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

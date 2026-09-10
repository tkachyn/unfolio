import { LocalTime } from "@/components/local-time";
import { RichText } from "@/components/rich-text";
import { VerticalRule } from "@/components/vertical-rule";
import { site } from "@/site";

export default function ContactPage() {
  return (
    <section className="panel panel--contact" aria-labelledby="contact-title">
      <h1 id="contact-title" className="panel__title">
        {site.contact.title}
      </h1>
      <div className="panel__body">
        <VerticalRule />
        <div className="panel__copy">
          {site.contact.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
      {site.contact.showClock ? <LocalTime /> : null}
      <div className="footer-arrow" aria-hidden="true">
        <span className="footer-arrow__motion">
          <svg
            className="footer-arrow__icon"
            viewBox="0 0 20 36"
            width="20"
            height="36"
            fill="none"
          >
            <g className="footer-arrow__stem">
              <path d="M10 33 V 3" />
            </g>
            <path className="footer-arrow__head" d="M5 26 L10 33 L15 26" />
          </svg>
        </span>
      </div>
    </section>
  );
}

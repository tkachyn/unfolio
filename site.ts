import type { CSSProperties } from "react";

export type SocialLink = {
  href: string;
  label: string;
};

export type Project = {
  title: string;
  year: string;
  description: string;
  details: string;
  benchmarks: string[];
  stack: string[];
  github: string;
};

export type Work = {
  role: string;
  company: string;
  location: string;
  year: string;
  description: string;
};

/*
 * configure the site's visual defaults here
 * these values match the current appearance, so content changes do not require CSS edits
 * font families accept any valid CSS font stack
 */
const appearance = {
  colors: {
    colorScheme: "dark",
    background: "#070605",
    text: "#fff5ef",
    textSoft: "color-mix(in srgb, var(--site-color-text) 72%, transparent)",
    rule: "color-mix(in srgb, var(--site-color-text) 88%, transparent)",
    scrollbar: "color-mix(in srgb, var(--site-color-text) 28%, transparent)",
    scrollbarHover:
      "color-mix(in srgb, var(--site-color-text) 50%, transparent)",
    selectionBackground:
      "color-mix(in srgb, var(--site-color-text) 22%, transparent)",
    border: "color-mix(in srgb, var(--site-color-text) 16%, transparent)",
    overlay: "color-mix(in srgb, var(--site-color-bg) 78%, transparent)",
    copyEmail: "color-mix(in srgb, var(--site-color-text) 38%, transparent)",
    copyHint: "color-mix(in srgb, var(--site-color-text) 52%, transparent)",
    panelHint: "color-mix(in srgb, var(--site-color-text) 48%, transparent)",
    inlineRule: "color-mix(in srgb, var(--site-color-text) 30%, transparent)",
  },

  fonts: {
    sans: 'var(--font-sans), "Segoe UI", sans-serif',
    display: "var(--font-display), Georgia, serif",
    serif: 'var(--font-serif), Georgia, "Times New Roman", serif',
  },

  typography: {
    scale: "1",
    sizes: {
      identityName: "clamp(2.35rem, 3.9vw, 3.2rem)",
      tagline: "0.9rem",
      nav: "1.08rem",
      footer: "1rem",
      copyEmail: "0.78rem",
      copyEmailHint: "0.68rem",
      panelTitle: "1.55rem",
      panelHint: "0.72rem",
      panelCopy: "1.04rem",
      list: "1.02rem",
      localTimePlace: "0.68rem",
      localTimeValue: "clamp(3.1rem, 7vw, 3.85rem)",
      localTimePeriod: "1.15rem",
      entryTitle: "1.2rem",
      entryMeta: "0.943rem",
      entryBody: "1.02rem",
      modalTitle: "1.7rem",
      modalYear: "0.82rem",
      modalClose: "0.95rem",
      modalCopy: "1.08rem",
      stackLabel: "0.782rem",
      stackList: "0.943rem",
      modalStack: "0.82rem",
      benchmarkLabel: "0.68rem",
      benchmarkList: "0.82rem",
    },
  },

  layout: {
    maxWidth: "63rem",
    pagePaddingX: "clamp(1.25rem, 4vw, 2rem)",
    pagePaddingY: "clamp(2rem, 5vw, 3.25rem)",
    shellBottomPadding: "1.75rem",
    headerGap: "2rem",
    taglineGap: "0.55rem",
    navGap: "clamp(1.25rem, 2.4vw, 2.15rem)",
    mainPaddingTop: "clamp(2.75rem, 7vh, 4.25rem)",
    footerGap: "0.7rem",
    socialsGap: "1.35rem",
    panelHeadingGap: "0.75rem",
    contentColumnGap: "0.85rem",
  },

  motion: {
    enabled: true,
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeEnter: "cubic-bezier(0.22, 1, 0.36, 1)",
    textFade: "780ms",
    ruleDrop: "1.2s",
    underline: "320ms",
  },
} as const;

export const site = {
  appearance,

  // header
  name: "John Doe",
  tagline: "placeholder tagline",

  email: "john.doe@example.com",
  url: "https://unfolio-one.vercel.app",

  location: {
    city: "your city",
    region: "your region",
    timeZone: "UTC",
  },

  nav: [
    { href: "/", label: "about" },
    { href: "/projects", label: "projects" },
    { href: "/work", label: "work" },
    { href: "/contact", label: "contact" },
  ],

  socials: [
    { href: "https://github.com/your-username", label: "github" },
    { href: "https://linkedin.com/in/your-username", label: "linkedin" },
  ] satisfies SocialLink[],

  // about
  about: {
    title: "about me",

    paragraphs: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. john doe builds thoughtful digital experiences and enjoys turning ideas into useful things.",

      "replace this paragraph with your story. explore [projects](/projects), read about [work](/work), or link to any external site with [placeholder text](https://example.com).",
    ],

    stack: [
      "skill one",
      "skill two",
      "skill three",
      "skill four",
    ],
  },

  // contact
  contact: {
    title: "contact",
    showClock: true,

    paragraphs: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. replace this text with your availability, preferred contact method, or a short invitation to get in touch.",

      "find placeholder profiles on [github](https://github.com/your-username) and [linkedin](https://linkedin.com/in/your-username).",

      "replace this with your expected response time.",
    ],
  },

  // projects
  projects: {
    title: "projects",

    items: [
      {
        title: "project one",
        year: "20XX",

        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. see the [project website](https://example.com/project-one) or use an internal [project link](/projects).",

        details:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. describe what this project does, why you built it, and what you learned. add a [documentation link](https://example.com/docs) anywhere in the text.",

        benchmarks: [
          "placeholder metric · lorem ipsum",
          "placeholder result · lorem ipsum",
          "placeholder comparison · lorem ipsum",
        ],

        stack: ["technology one", "technology two", "technology three"],

        github: "https://github.com/your-username/project-one",
      },

      {
        title: "project two",
        year: "20XX",

        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. link to a [live demo](https://example.com/project-two) or another [internal page](/contact).",

        details:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. use this longer field for the project story, implementation details, and useful links such as [source code](https://github.com/your-username/project-two).",

        benchmarks: [
          "placeholder metric · lorem ipsum",
          "placeholder result · lorem ipsum",
        ],

        stack: ["technology one", "technology two", "technology three"],

        github: "https://github.com/your-username/project-two",
      },
    ] satisfies Project[],
  },

  // work
  work: {
    title: "work",

    items: [
      {
        role: "your role",
        company: "your organization",
        location: "your city, region",
        year: "20XX–20XX",

        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. summarize your responsibilities, outcomes, and the skills you developed. add a [company link](https://example.com) if useful.",
      },

      {
        role: "another role",
        company: "another organization",
        location: "your city, region",
        year: "20XX",

        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. replace this entry with another role, project, or meaningful experience.",
      },
    ] satisfies Work[],
  },
};

export type SiteStyle = CSSProperties & Record<`--site-${string}`, string>;

export const siteStyle: SiteStyle = {
  "--site-color-scheme": appearance.colors.colorScheme,
  "--site-color-bg": appearance.colors.background,
  "--site-color-text": appearance.colors.text,
  "--site-color-text-soft": appearance.colors.textSoft,
  "--site-color-rule": appearance.colors.rule,
  "--site-color-scrollbar": appearance.colors.scrollbar,
  "--site-color-scrollbar-hover": appearance.colors.scrollbarHover,
  "--site-color-selection": appearance.colors.selectionBackground,
  "--site-color-border": appearance.colors.border,
  "--site-color-overlay": appearance.colors.overlay,
  "--site-color-copy-email": appearance.colors.copyEmail,
  "--site-color-copy-hint": appearance.colors.copyHint,
  "--site-color-panel-hint": appearance.colors.panelHint,
  "--site-color-inline-rule": appearance.colors.inlineRule,
  "--site-font-sans": appearance.fonts.sans,
  "--site-font-display": appearance.fonts.display,
  "--site-font-serif": appearance.fonts.serif,
  "--site-type-scale": appearance.typography.scale,
  "--site-size-identity-name": appearance.typography.sizes.identityName,
  "--site-size-tagline": appearance.typography.sizes.tagline,
  "--site-size-nav": appearance.typography.sizes.nav,
  "--site-size-footer": appearance.typography.sizes.footer,
  "--site-size-copy-email": appearance.typography.sizes.copyEmail,
  "--site-size-copy-email-hint": appearance.typography.sizes.copyEmailHint,
  "--site-size-panel-title": appearance.typography.sizes.panelTitle,
  "--site-size-panel-hint": appearance.typography.sizes.panelHint,
  "--site-size-panel-copy": appearance.typography.sizes.panelCopy,
  "--site-size-list": appearance.typography.sizes.list,
  "--site-size-local-time-place": appearance.typography.sizes.localTimePlace,
  "--site-size-local-time-value": appearance.typography.sizes.localTimeValue,
  "--site-size-local-time-period": appearance.typography.sizes.localTimePeriod,
  "--site-size-entry-title": appearance.typography.sizes.entryTitle,
  "--site-size-entry-meta": appearance.typography.sizes.entryMeta,
  "--site-size-entry-body": appearance.typography.sizes.entryBody,
  "--site-size-modal-title": appearance.typography.sizes.modalTitle,
  "--site-size-modal-year": appearance.typography.sizes.modalYear,
  "--site-size-modal-close": appearance.typography.sizes.modalClose,
  "--site-size-modal-copy": appearance.typography.sizes.modalCopy,
  "--site-size-stack-label": appearance.typography.sizes.stackLabel,
  "--site-size-stack-list": appearance.typography.sizes.stackList,
  "--site-size-modal-stack": appearance.typography.sizes.modalStack,
  "--site-size-benchmark-label": appearance.typography.sizes.benchmarkLabel,
  "--site-size-benchmark-list": appearance.typography.sizes.benchmarkList,
  "--site-max-width": appearance.layout.maxWidth,
  "--site-page-pad-x": appearance.layout.pagePaddingX,
  "--site-page-pad-y": appearance.layout.pagePaddingY,
  "--site-shell-bottom-pad": appearance.layout.shellBottomPadding,
  "--site-header-gap": appearance.layout.headerGap,
  "--site-tagline-gap": appearance.layout.taglineGap,
  "--site-nav-gap": appearance.layout.navGap,
  "--site-main-pad-top": appearance.layout.mainPaddingTop,
  "--site-footer-gap": appearance.layout.footerGap,
  "--site-socials-gap": appearance.layout.socialsGap,
  "--site-panel-heading-gap": appearance.layout.panelHeadingGap,
  "--site-content-column-gap": appearance.layout.contentColumnGap,
  "--site-ease": appearance.motion.ease,
  "--site-ease-enter": appearance.motion.easeEnter,
  "--site-text-fade": appearance.motion.textFade,
  "--site-rule-drop": appearance.motion.ruleDrop,
  "--site-underline": appearance.motion.underline,
};

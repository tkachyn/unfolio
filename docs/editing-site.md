# Editing `site.ts`

`site.ts` is the single content and appearance configuration file for the
portfolio. You do not need to edit the page components for normal
customization.

## Editing workflow

1. Open [`../site.ts`](../site.ts).
2. Replace the John Doe and placeholder values with your own content.
3. Keep the existing object shape and property names.
4. Save the file and check the result with `npm run dev`.
5. Run `npm run lint` before publishing.

The TypeScript types at the top of the file describe the required shape for
projects, work entries, and social links. Keep those types unchanged unless
you are changing how the application works.

## Header and identity

These values control the top-left identity block and the email action in the
footer:

- `name`: your display name
- `tagline`: the short line below your name
- `email`: the address shown in the footer and copied by the email button
- `url`: the public site URL used by `robots.txt` and `sitemap.xml`

The name is also used as the browser title and the default metadata
description.

## Location and clock

The contact page can show a live local-time card:

```ts
location: {
  city: "your city",
  region: "your region",
  timeZone: "America/New_York",
},
```

Use a valid IANA time-zone name, such as `America/New_York`,
`Europe/London`, or `UTC`. Set `contact.showClock` to `false` to hide the
clock.

## Navigation and social links

`nav` controls the links shown in the header. The existing routes are:

- `/` — about
- `/projects` — projects
- `/work` — work
- `/contact` — contact

Removing an item hides it from the header; it does not remove the route.
Only add a new navigation item after creating a matching route in `app/`.

`socials` controls the links shown in the footer. Each item needs an `href` and
a `label`:

```ts
socials: [
  { href: "https://github.com/your-username", label: "github" },
  { href: "https://example.com", label: "website" },
],
```

Social links are treated as external links and open in a new tab.

## About page

`about.title` sets the page heading. Each string in `about.paragraphs`
becomes one paragraph. `about.stack` is the short technology or skill list
shown below the paragraphs.

Keep the stack concise because it is displayed as one line:

```ts
stack: ["skill one", "skill two", "skill three"],
```

## Contact page

`contact.title` sets the page heading. Each item in `contact.paragraphs`
becomes one paragraph. Use these paragraphs for availability, contact
preferences, a short call to action, or links to other profiles.

## Links inside descriptions

About, contact, project, and work descriptions support this Markdown-style
syntax:

```text
read my [projects](/projects) or visit [my website](https://example.com).
```

The text inside the square brackets is what visitors see. The URL inside the
parentheses is where the link goes.

- Use a site path such as `/projects` for an internal link.
- Use a complete `https://` URL for an external link.
- External links open in a new tab.
- Keep the URL free of spaces or closing parentheses.

The syntax only applies to the supported description fields. It will remain
plain text in fields such as `title`, `tagline`, `label`, `stack`, and
`benchmarks`.

## Projects

Each object in `projects.items` becomes a clickable project entry:

- `title`: the project name shown in the list and modal
- `year`: the year or date range
- `description`: the short text shown in the project list
- `details`: the longer text shown in the modal
- `benchmarks`: optional result or performance lines
- `stack`: optional technologies shown in the modal
- `github`: optional source-code URL

Descriptions and details support inline links. Set `benchmarks` or `stack` to
an empty array when you do not want to show those sections. Set `github` to an
empty string to hide the source-code link.

Copy an existing project object to add another project. Keep every project
title unique so React can identify each list item correctly.

## Work

Each object in `work.items` contains:

- `role`: your title or the type of work
- `company`: the organization, client, or project
- `location`: the city, region, or remote status
- `year`: the year or date range
- `description`: the work summary

Work descriptions support the same inline link syntax as project descriptions.
Use an empty `location` string if the location should be hidden.

## Appearance

The `appearance` object keeps visual customization separate from page content.
Changes here apply throughout the site.

### Colors

`appearance.colors` controls the theme:

- `colorScheme`: browser color-scheme hint, usually `dark` or `light`
- `background`: page background
- `text`: primary text
- `textSoft`: secondary text
- `rule`: vertical rules and separators
- `scrollbar` and `scrollbarHover`: scrollbar colors
- `selectionBackground`: selected-text background
- `border`: borders around panels and modals
- `overlay`: modal backdrop
- `copyEmail` and `copyHint`: footer email action
- `panelHint` and `inlineRule`: supporting interface details

Values can be hex colors, CSS color functions, or other valid CSS color
values. The `color-mix` values reference the CSS variables generated at the
bottom of the file, so update those expressions rather than replacing them
with JavaScript values.

### Fonts and typography

`appearance.fonts` defines the CSS font stacks used for sans, display, and
serif text. The `var(--font-...)` values come from the fonts loaded in
`app/layout.tsx`; fallback fonts keep the site usable if a font cannot load.

`appearance.typography.scale` changes the overall type scale. The `sizes`
object contains independent sizes for the identity, navigation, panels,
entries, clock, modal, stack, and benchmark text.

Use valid CSS length values such as `1rem`, `1.1rem`, or `clamp(...)`.

### Layout and motion

`appearance.layout` controls maximum width, page padding, gaps, and vertical
spacing. `appearance.motion` controls whether motion is enabled, along with
the easing curves and animation durations.

Set `appearance.motion.enabled` to `false` to turn off animations and
transitions:

```ts
motion: {
  enabled: false,
  ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeEnter: "cubic-bezier(0.22, 1, 0.36, 1)",
  textFade: "780ms",
  ruleDrop: "1.2s",
  underline: "320ms",
},
```

Keep the other motion values when toggling the setting so they can be restored
later. Durations should use CSS time values such as `320ms` or `1.2s`.

The layout and motion keys are intentionally grouped by purpose. Change the
smallest relevant value instead of changing component CSS for a content
customization.

## Browser icon

The browser tab icon is stored at [`../app/favicon.ico`](../app/favicon.ico).
It is currently the default starter icon. Replace that file with your own
`.ico` favicon to personalize the browser tab.

## What not to change

The `siteStyle` object at the bottom maps the appearance settings to CSS
custom properties. It should update automatically when you edit
`appearance`; do not duplicate values there.

You normally do not need to edit files in `app/` or `components/`. Only change
those files when you are extending the site's behavior or adding a new page
type.

# Developer Portfolio (React + Tailwind CSS v4)

A responsive portfolio with dark/light mode, persistent theme preference, category filters, search, and 40 editable project entries.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Customize

- **Project links and content:** edit `src/projects.ts`. All 40 project records currently use `https://example.com` placeholders; replace with real live websites. The first two names reference example project concepts, but should still be verified and edited.
- **Your name, hero copy, social links and email:** edit `src/App.tsx` (`social` at the top, and the headings/text in the JSX). Email and LinkedIn are placeholders.
- **Colors and typography:** edit `src/styles.css` CSS variables for light and dark themes.
- **Cards:** the project artwork is decorative CSS. Replace `ProjectCard` browser mockups with actual project thumbnails if desired.

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to any static host.

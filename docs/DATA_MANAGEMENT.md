# Managing BDCA Content

All site content lives in TypeScript modules under `src/data/`. Run `npm run check` after edits to verify that both English (`en`) and Indonesian (`id`) fields stay in sync.

## Team roster

Edit `teamGroups` and `rosterPeriod` in `src/data/team.ts`. Place each member in the appropriate group's `members` array with a `name` and `role` (keys must match `rolesInIndonesian`). Array order controls display order.

For a portrait, save a WebP image with a 4:5 aspect ratio in `src/assets/team/`, import it in `src/data/team.ts`, and assign it to the member's optional `avatar` field. Astro generates responsive sizes (`144`, `216`, `288`) during build. Omitting `avatar` renders `/assets/team/placeholder.svg`.

The 2026–2027 portraits are cropped from the official BDCA announcements:

- [Core Leadership](https://www.instagram.com/bidarcyberarmy/p/DXWttk7gb3q/)
- [Education & Research](https://www.instagram.com/bidarcyberarmy/p/DXWsm4jgdfI/)
- [Software Development](https://www.instagram.com/bidarcyberarmy/p/DYR-Pj5TseC/)
- [Creative & Branding](https://www.instagram.com/bidarcyberarmy/p/DXWsYnmASmj/)
- [Public Relations](https://www.instagram.com/bidarcyberarmy/p/DXWrRw5gYnd/)

## Navigation & featured showcases

Edit `src/data/copy.ts` to update localized labels and copy across the site:

- **Navbar links:** labels live under `nav` in `src/data/copy.ts`, and destinations (including the external `Certificates` link to `https://cert.bidarcyberarmy.org/`) are configured in `src/components/Navbar.astro`.
- **BDCAHOOT showcase:** copy lives under `bdcahoot` in `src/data/copy.ts`; layout and GitHub repository URL live in `src/components/Bdcahoot.astro`.
- **BDCA Certification showcase:** copy lives under `certificates` in `src/data/copy.ts`; layout and portal URL (`https://cert.bidarcyberarmy.org/`) live in `src/components/Certificates.astro`.

## Ecosystem

Edit `src/data/subwebs.ts` to change a portal's title, description, category, or status. An `online` entry requires an HTTPS `url`. `maintenance` and `internal` entries render a localized status label instead of a link.

## Competition record

Edit `src/data/achievements.ts` to add results. Provide `en` and `id` date labels, keep official event and team names in their original spelling, and include localized `rank` and `description` fields where available.

## Site information

Update `src/data/site.ts` for the organization name, localized description, contact email, official links, and social preview image. The canonical build origin comes from `site` in `astro.config.mjs`.

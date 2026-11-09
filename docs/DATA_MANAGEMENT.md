# Managing BDCA content

## Team roster

Edit `teamGroups` and `rosterPeriod` in `src/data/team.ts`. Put each member in the appropriate group's `members` array with a name and role. The array order controls display order.

For a portrait, save an optimized WebP image in `public/assets/team/`, preferably close to a 4:5 aspect ratio. Set the member's optional `avatar` field to its public path, for example `/assets/team/member.webp`. The site displays a silhouette when the field is omitted.

## Ecosystem

Edit `src/data/subwebs.ts` to change the resource title, description, category, or status. An `online` resource requires an HTTPS URL. `maintenance` and `internal` resources display a status label in place of a link.

## Competition record

Edit `src/data/achievements.ts` to add results. Use an English date label, keep official event and team names, and add the rank and description where available.

## Site information

Update `src/data/site.ts` for the organization name, description, contact email, official links, and social preview image. The site's canonical origin comes from `astro.config.mjs`.

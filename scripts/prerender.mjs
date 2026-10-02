// Runs after `vite build`: writes a real HTML file for every page so search engines
// and AI tools that don't run JavaScript still receive the page's content.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, allRoutes, canonicalUrl, renderHeadTags, SITE_URL } =
  await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const template = await readFile(path.join(dist, "index.html"), "utf8");
const headBlock = /<!--seo:start-->[\s\S]*<!--seo:end-->/;
const rootDiv = '<div id="root"></div>';
if (!headBlock.test(template) || !template.includes(rootDiv)) {
  throw new Error("index.html is missing the seo block or the empty #root div");
}

for (const route of allRoutes) {
  const html = template
    .replace(headBlock, () => renderHeadTags(route))
    .replace(rootDiv, () => `<div id="root">${render(route)}</div>`);
  const dir = route === "/" ? dist : path.join(dist, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) =>
      `  <url><loc>${canonicalUrl(route)}</loc><lastmod>${today}</lastmod></url>`,
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
await writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Pre-rendered ${allRoutes.length} pages, sitemap.xml and robots.txt`);

import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App";

/* Used only at build time by scripts/prerender.mjs to write real HTML for each page */
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}

export { allRoutes, canonicalUrl, renderHeadTags, SITE_URL } from "./seo";

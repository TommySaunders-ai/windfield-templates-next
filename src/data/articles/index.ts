import type { ComponentType } from "react";

/* Article content registry */
const registry: Record<string, Record<string, ComponentType>> = {};

/* Register content modules eagerly so static export works */
function register(seriesSlug: string, articleSlug: string, mod: ComponentType) {
  if (!registry[seriesSlug]) registry[seriesSlug] = {};
  registry[seriesSlug][articleSlug] = mod;
}

/* Series 01: IO Marketing OS */
import { MK1Content } from "./series-01/mk1";
import { MK2Content } from "./series-01/mk2";
import { MK3Content } from "./series-01/mk3";
import { MK4Content } from "./series-01/mk4";
import { MK5Content } from "./series-01/mk5";
import { MK6Content } from "./series-01/mk6";
import { MK7Content } from "./series-01/mk7";
import { MK8Content } from "./series-01/mk8";
import { MK9Content } from "./series-01/mk9";

register("io-marketing-os", "knowledge-base", MK1Content);
register("io-marketing-os", "intelligence-layer", MK2Content);
register("io-marketing-os", "strategy-engine", MK3Content);
register("io-marketing-os", "context-briefs", MK4Content);
register("io-marketing-os", "distribution-matrix", MK5Content);
register("io-marketing-os", "content-types", MK6Content);
register("io-marketing-os", "execution-system", MK7Content);
register("io-marketing-os", "organic-workspaces", MK8Content);
register("io-marketing-os", "paid-campaigns", MK9Content);

export function getArticleContent(
  seriesSlug: string,
  articleSlug: string
): ComponentType | null {
  return registry[seriesSlug]?.[articleSlug] ?? null;
}

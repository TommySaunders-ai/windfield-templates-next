import Link from "next/link";
import type { Article } from "@/data/series";

interface IndexGridProps {
  articles: Article[];
  seriesSlug: string;
  seriesColor: string;
}

export function IndexGrid({ articles, seriesSlug, seriesColor }: IndexGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-px border border-border bg-border rounded-xl overflow-hidden my-4 w-full">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/${seriesSlug}/${article.slug}`}
          className="bg-bg-elevated p-5 cursor-pointer hover:bg-brand/[0.06] transition-all duration-200 block group relative"
        >
          {/* Hover accent */}
          <div
            className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: seriesColor }}
          />

          <p className="text-[9px] font-bold tracking-[.2em] uppercase mb-2 flex items-center gap-1.5" style={{ color: seriesColor }}>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: seriesColor }}
            />
            {article.number}
          </p>
          <p className="text-[15px] font-semibold text-fg mb-1.5 leading-snug tracking-tight">{article.title}</p>
          {article.subtitle && (
            <p className="text-[11px] text-fg-muted leading-snug line-clamp-2">
              {article.subtitle}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}

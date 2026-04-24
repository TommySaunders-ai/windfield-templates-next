import Link from "next/link";
import type { Article } from "@/data/series";

interface IndexGridProps {
  articles: Article[];
  seriesSlug: string;
  seriesColor: string;
}

export function IndexGrid({ articles, seriesSlug, seriesColor }: IndexGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-px border border-border bg-border rounded-xl overflow-hidden my-7 w-full">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/${seriesSlug}/${article.slug}`}
          className="bg-surface p-4 cursor-pointer hover:bg-brand/[0.06] transition block"
        >
          <p className="text-[9.5px] font-bold tracking-[.15em] uppercase text-brand opacity-60 mb-1 flex items-center gap-1.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: seriesColor }}
            />
            {article.number}
          </p>
          <p className="text-base font-semibold text-fg mb-1">{article.title}</p>
          {article.subtitle && (
            <p className="text-[11.5px] text-fg-muted leading-snug">
              {article.subtitle}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}

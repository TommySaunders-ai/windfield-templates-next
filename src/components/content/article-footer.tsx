import Link from "next/link";

interface NavItem {
  slug: string;
  title: string;
}

interface ArticleFooterProps {
  prev?: NavItem;
  next?: NavItem;
  seriesSlug: string;
  articleNumber: string;
}

export function ArticleFooter({
  prev,
  next,
  seriesSlug,
  articleNumber,
}: ArticleFooterProps) {
  return (
    <footer className="mt-16 pt-6 border-t border-border">
      <div className="flex justify-between items-stretch gap-4 flex-wrap">
        {prev ? (
          <Link
            href={`/${seriesSlug}/${prev.slug}`}
            className="flex-1 min-w-[180px] border border-border rounded-xl px-5 py-4 hover:bg-brand/[0.04] hover:border-brand/30 transition-all group"
          >
            <p className="text-[9px] font-bold tracking-[.18em] uppercase text-fg-faint mb-1.5">Previous</p>
            <p className="text-sm font-semibold text-fg group-hover:text-brand transition-colors">← {prev.title}</p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <Link
            href={`/${seriesSlug}/${next.slug}`}
            className="flex-1 min-w-[180px] border border-border rounded-xl px-5 py-4 text-right hover:bg-brand/[0.04] hover:border-brand/30 transition-all group"
          >
            <p className="text-[9px] font-bold tracking-[.18em] uppercase text-fg-faint mb-1.5">Next</p>
            <p className="text-sm font-semibold text-fg group-hover:text-brand transition-colors">{next.title} →</p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      <p className="text-center text-[9px] font-semibold tracking-[.15em] uppercase text-fg-faint mt-6 mb-2">
        Article {articleNumber}
      </p>
    </footer>
  );
}

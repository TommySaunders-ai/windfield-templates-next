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
    <footer className="mt-14 pt-5 border-t border-border flex justify-between items-center flex-wrap gap-4">
      {prev ? (
        <Link
          href={`/${seriesSlug}/${prev.slug}`}
          className="border border-border rounded-[10px] px-4 py-2 text-[11.5px] font-semibold text-fg hover:bg-brand-muted hover:border-brand hover:text-brand transition"
        >
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}

      <span className="text-[10.5px] text-fg-subtle tracking-[.1em] uppercase">
        Article {articleNumber}
      </span>

      {next ? (
        <Link
          href={`/${seriesSlug}/${next.slug}`}
          className="border border-border rounded-[10px] px-4 py-2 text-[11.5px] font-semibold text-fg hover:bg-brand-muted hover:border-brand hover:text-brand transition"
        >
          {next.title} →
        </Link>
      ) : (
        <span />
      )}
    </footer>
  );
}

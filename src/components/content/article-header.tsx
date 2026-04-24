interface ArticleHeaderProps {
  seriesNumber: string;
  articleNumber: string;
  totalArticles: string;
  title: string;
  deck: string;
}

export function ArticleHeader({
  seriesNumber,
  articleNumber,
  totalArticles,
  title,
  deck,
}: ArticleHeaderProps) {
  return (
    <header>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-semibold tracking-[.18em] uppercase text-brand">
          Series {seriesNumber} · Article {articleNumber} of {totalArticles}
        </span>
        <span className="w-[44px] h-px bg-brand opacity-35" />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-fg mb-4">
        {title}
      </h1>
      <p className="text-lg text-fg-muted italic leading-relaxed mb-10">
        {deck}
      </p>
    </header>
  );
}

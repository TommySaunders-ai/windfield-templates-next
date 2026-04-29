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
    <header className="mb-10 pb-8 border-b border-border">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[.2em] uppercase text-brand">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          Series {seriesNumber} · Article {articleNumber} of {totalArticles}
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] text-fg mb-4">
        {title}
      </h1>
      {deck && (
        <p className="text-base md:text-lg text-fg-muted leading-relaxed max-w-[680px]" style={{ fontStyle: 'italic' }}>
          {deck}
        </p>
      )}
    </header>
  );
}

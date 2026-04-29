import { notFound } from "next/navigation";
import Link from "next/link";
import { allSeries, getArticle, generateStaticArticles } from "@/data/series";
import { getArticleContent } from "@/data/articles";

export function generateStaticParams() {
  return generateStaticArticles();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ series: string; article: string }>;
}) {
  const { series, article } = await params;
  const result = getArticle(series, article);
  if (!result) return {};
  return {
    title: `${result.article.title} — ${result.series.title} — Project IO`,
    description: result.article.subtitle,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ series: string; article: string }>;
}) {
  const { series: seriesSlug, article: articleSlug } = await params;
  const result = getArticle(seriesSlug, articleSlug);
  if (!result) notFound();

  const { series, article, prev, next } = result;
  const totalArticles = series.articles.length;

  const Content = getArticleContent(series.slug, article.slug);

  return (
    <>
      {/* AO-style Hero */}
      <div className="wf-ao-hero">
        <div
          className="wf-ao-hero-gradient"
          style={{
            background: `linear-gradient(135deg, ${series.color}10, transparent 50%, ${series.color}08)`,
          }}
        />
        <div className="wf-ao-hero-watermark">IO</div>

        <div className="wf-ao-hero-kicker">
          <span
            className="wf-ao-hero-kicker-bar"
            style={{ background: series.color }}
          />
          <span className="wf-ao-hero-kicker-label">
            Series {series.number} &middot; Article {article.number} of {totalArticles}
          </span>
        </div>

        <h1 className="wf-ao-hero-title">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="wf-ao-hero-desc">{article.subtitle}</p>
        )}

        <div className="wf-ao-stats">
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num" style={{ color: series.color }}>{article.number}</span>
            <span>of {totalArticles}</span>
          </div>
          <span className="wf-ao-stat-divider" />
          <div className="wf-ao-stat">
            <span style={{ color: series.color }}>{series.title}</span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="wf-article-body">
        <div className="prose">
          {Content ? <Content /> : (
            <p style={{ color: "var(--wf-text-muted)", fontStyle: "italic" }}>
              Content for this article is being migrated. Check back soon.
            </p>
          )}
        </div>

        {/* Prev / Next navigation */}
        <div className="wf-article-nav">
          {prev ? (
            <Link href={`/${series.slug}/${prev.slug}`} className="wf-article-nav-card">
              <span className="wf-article-nav-label">Previous</span>
              <span className="wf-article-nav-title">&larr; {prev.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link href={`/${series.slug}/${next.slug}`} className="wf-article-nav-card wf-article-nav-card-next">
              <span className="wf-article-nav-label">Next</span>
              <span className="wf-article-nav-title">{next.title} &rarr;</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="wf-article-footer-label">
          Article {article.number} &middot; {series.title}
        </div>
      </div>
    </>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { allSeries, getSeriesBySlug, generateStaticSeries } from "@/data/series";

export function generateStaticParams() {
  return generateStaticSeries();
}

export async function generateMetadata({ params }: { params: Promise<{ series: string }> }) {
  const { series: seriesSlug } = await params;
  const series = getSeriesBySlug(seriesSlug);
  if (!series) return {};
  return {
    title: `${series.title} — Project IO`,
    description: series.description,
  };
}

export default async function SeriesPage({ params }: { params: Promise<{ series: string }> }) {
  const { series: seriesSlug } = await params;
  const series = getSeriesBySlug(seriesSlug);
  if (!series) notFound();

  const seriesIndex = allSeries.indexOf(series);

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
            Series {series.number} of {String(allSeries.length).padStart(2, "0")}
          </span>
        </div>

        <h1 className="wf-ao-hero-title">
          {series.title.replace(/IO/g, "")}
          {series.title.includes("IO") && <em>IO</em>}
          {!series.title.includes("IO") && (
            <>
              {" "}
              <em>IO</em>
            </>
          )}
        </h1>

        <p className="wf-ao-hero-desc">{series.description}</p>

        <div className="wf-ao-stats">
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">{series.articles.length}</span>
            <span>Articles</span>
          </div>
          <span className="wf-ao-stat-divider" />
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">1</span>
            <span>Section</span>
          </div>
        </div>
      </div>

      {/* Article cards grid */}
      <div className="wf-ao-cards">
        <div className="wf-ao-cards-heading">Articles</div>
        <div className="wf-ao-grid">
          {series.articles.map((article, idx) => (
            <Link
              key={article.slug}
              href={`/${series.slug}/${article.slug}`}
              className="wf-ao-card"
            >
              <span className="wf-ao-card-num">{article.number}</span>
              <span className="wf-ao-card-name">{article.title}</span>
              {article.subtitle && (
                <span className="wf-ao-card-desc">{article.subtitle}</span>
              )}
              <span className="wf-ao-card-footer">
                <span
                  className="wf-ao-card-footer-dot"
                  style={{ background: series.color }}
                />
                {series.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

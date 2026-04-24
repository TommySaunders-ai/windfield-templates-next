import { notFound } from "next/navigation";
import { DocLayout } from "@/components/layout/doc-layout";
import { ArticleHeader } from "@/components/content/article-header";
import { ArticleFooter } from "@/components/content/article-footer";
import { getArticle, generateStaticArticles } from "@/data/series";
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
    <DocLayout
      seriesTitle={series.title}
      articleTitle={article.title}
      seriesSlug={series.slug}
    >
      <div className="px-6 md:px-10 py-8 max-w-none">
        <ArticleHeader
          seriesNumber={series.number}
          articleNumber={article.number}
          totalArticles={String(totalArticles)}
          title={article.title}
          deck={article.subtitle || ""}
        />

        <div className="prose">
          {Content ? <Content /> : (
            <p className="text-fg-muted italic">
              Content for this article is being migrated. Check back soon.
            </p>
          )}
        </div>

        <ArticleFooter
          prev={prev ? { slug: prev.slug, title: prev.title } : undefined}
          next={next ? { slug: next.slug, title: next.title } : undefined}
          seriesSlug={series.slug}
          articleNumber={article.number}
        />
      </div>
    </DocLayout>
  );
}

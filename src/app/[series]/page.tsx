import { notFound } from "next/navigation";
import { DocLayout } from "@/components/layout/doc-layout";
import { Masthead } from "@/components/content/masthead";
import { IndexGrid } from "@/components/content/index-grid";
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

  const totalSeries = allSeries.length;

  return (
    <DocLayout seriesTitle={series.title} seriesSlug={series.slug}>
      <Masthead
        seriesLabel={`Project IO \u00b7 Series ${series.number} of ${String(totalSeries).padStart(2, "0")}`}
        title={series.title}
        subtitle={series.description}
        count={series.count}
      />
      <div className="px-6 md:px-10 py-8">
        <IndexGrid
          articles={series.articles}
          seriesSlug={series.slug}
          seriesColor={series.color}
        />
      </div>
    </DocLayout>
  );
}

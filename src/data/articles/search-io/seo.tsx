import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function SEOContent() {
  return (<>
    <SectionDivider label="SEO — 10 Target Keywords" />
    <SpecTable headers={["Keyword", "Volume", "Priority", "Target"]} rows={[
      ["medical office for sale Kansas City", "50-100", "Highest", "Page 1 in 90 days"],
      ["KC Northland medical office space", "20-50", "Highest", "Page 1 in 60 days"],
      ["Class A office building Kansas City", "20-50", "High", "Page 1 in 90 days"],
      ["medical office space requirements", "200-500", "High", "Page 1 in 120 days"],
      ["SBA 504 loan medical practice", "50-100", "High", "Page 1 in 120 days"],
      ["cost to build out medical office", "100-200", "High", "Top 5 in 120 days"],
      ["Green Hills Road commercial property", "10-20", "High", "Position 1 in 30 days"],
      ["dental office space Kansas City", "20-50", "High", "Page 1 in 90 days"],
      ["urgent care space Kansas City", "20-50", "High", "Page 1 in 90 days"],
      ["med spa space Kansas City", "10-20", "Highest", "Position 1 in 60 days"],
    ]} />
  </>);
}

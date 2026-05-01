import { SectionDivider } from "@/components/content/section-divider";
import { PullQuote } from "@/components/content/pull-quote";
export function HeadlinesContent() {
  return (<>
    <SectionDivider label="Marketing Headlines" />
    <PullQuote>Class-A Medical Office — Green Hills Road at M-152</PullQuote>
    <div className="prose">
      <p><strong>Primary:</strong> Class-A Medical Office — Green Hills Road at M-152</p>
      <p><strong>Secondary:</strong> 10,500 SF. Built 2020. Own Your Practice Location.</p>
      <p><strong>Tertiary:</strong> KC Northland&apos;s Newest Medical Office Building — Available for Sale</p>
    </div>
    <SectionDivider label="Key Selling Points (Top 7)" />
    <div className="prose">
      <ol>
        <li>Newest Class-A office building in the KC Northland corridor (2020)</li>
        <li>B3-3 zoning permits every medical use — no zoning variance needed</li>
        <li>Single-story, ADA-compliant, 4.0/1,000 SF parking</li>
        <li>M-152/I-29 interchange visibility — the best exposure in the submarket</li>
        <li>Adjacent to established medical cluster on Green Hills Road</li>
        <li>$107K avg HHI within 2 miles — premium patient demographics</li>
        <li>Available for sale — own your practice real estate, build equity</li>
      </ol>
    </div>
  </>);
}

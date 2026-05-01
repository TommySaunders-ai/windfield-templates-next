import { SectionDivider } from "@/components/content/section-divider";
export function SeoDescriptionContent() {
  return (<>
    <SectionDivider label="SEO Description" />
    <div className="prose">
      <p>10,500 SF Class-A office building for sale in Kansas City&apos;s Northland — built 2020, single-story, B3-3 medical zoning. Located at M-152 and Green Hills Road with I-29 access. Ideal for medical practice, dental office, urgent care, or healthcare investor. 1.29 acres, private parking, turnkey ready. Platte County, MO 64154.</p>
    </div>
    <SectionDivider label="Property Highlights (Bullet Format)" />
    <div className="prose">
      <ul>
        <li>10,500 SF Class-A office building on 1.29 acres</li>
        <li>Built 2020 — single-story, modern construction</li>
        <li>B3-3 zoning — all medical uses permitted</li>
        <li>M-152 and Green Hills Road intersection — high visibility</li>
        <li>Immediate I-29 access, 2 minutes from NW Barry Road</li>
        <li>Turnkey/move-in ready with high-end interior finish</li>
        <li>Private surface parking — 4.0 spaces per 1,000 SF</li>
        <li>Adjacent to Northland Eye Specialists and Magnolia Chiropractic</li>
        <li>Tiffany Hills/Coves North commercial corridor</li>
        <li>Kansas City, MO 64154 — Platte County</li>
      </ul>
    </div>
  </>);
}

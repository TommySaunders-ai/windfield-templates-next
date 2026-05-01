import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function PerformanceDashboardContent() {
  return (<>
    <SectionDivider label="Journey Stage KPIs" />
    <SpecTable headers={["Stage", "Primary KPI", "Success Threshold", "Warning"]} rows={[
      ["Unaware", "Video Completion Rate", ">35%, 500+ viewers/mo, CPV <$0.50", "VCR <20% = creative problem"],
      ["Problem Aware", "Lead Magnet Download Rate", ">5%, VCR >40%, CPL <$25", "Download <2% = value mismatch"],
      ["Solution Aware", "Calculator Download Rate", ">8%, VCR >45%", "Download <3% = targeting issue"],
      ["Product Aware", "Property Brief Request", ">12%, VCR >50%, Tour >5%", "Brief <5% = product objection"],
      ["Conversion", "Tour Scheduling Rate", ">8%, LOI >2%, CPC <$75", "Tour <3% = escalate to Sales"],
    ]} />
    <SectionDivider label="ROI Framework" />
    <div className="prose">
      <ul>
        <li><strong>Attribution:</strong> Linear — each stage gets equal credit for final conversion</li>
        <li><strong>Pipeline Value:</strong> Tour = $500, LOI = $10,000, Closed = actual sale price</li>
        <li><strong>Target ROI:</strong> 5x minimum ($5,000/month spend = $25,000+ pipeline value)</li>
        <li><strong>Journey Velocity Target:</strong> 45-60 days from Unaware to Conversion</li>
      </ul>
    </div>
  </>);
}

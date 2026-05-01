import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";
export function AwarenessCampaignContent() {
  return (<>
    <SectionDivider label="Stage 1: Unaware — Video Campaign" />
    <SpecTable headers={["Field", "Value"]} rows={[
      ["Campaign Name", "KC Medical Office Space Challenge — Awareness"],
      ["Objective", "Video Views"],
      ["Audience Size", "8,000-15,000 KC metro medical professionals"],
      ["Budget", "20% of total ($1,000/month)"],
      ["Video Length", "45-60 seconds"],
      ["VCR Goal", ">35%"],
    ]} />
    <div className="prose">
      <p><strong>Topic:</strong> Why KC Northland Medical Practices Are Outgrowing Their Space — focus on the problem of outdated medical offices, insufficient parking, poor visibility, and the hidden cost of leasing vs. owning.</p>
      <p><strong>Video Style:</strong> Documentary-style with b-roll of generic medical office exteriors (not 8630), statistics overlay, professional voiceover. Minimal Windfield branding until end card.</p>
    </div>
    <PullQuote>KC Northland&apos;s medical corridor is growing but the available office inventory is aging — practices that don&apos;t upgrade lose patients to competitors in newer facilities.</PullQuote>
    <SectionDivider label="Progression Triggers" />
    <div className="prose">
      <ul>
        <li>75% video completion qualifies for Stage 2 targeting</li>
        <li>Like, comment, share, or click-through also qualify</li>
        <li>14-day rolling window for audience progression</li>
        <li>Audience tag: 8630_MEDICAL_UNAWARE_QUALIFIED</li>
      </ul>
    </div>
  </>);
}

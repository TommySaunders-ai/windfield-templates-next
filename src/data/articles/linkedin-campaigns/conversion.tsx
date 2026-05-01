import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function ConversionCampaignContent() {
  return (<>
    <SectionDivider label="Stage 5: Conversion" />
    <SpecTable headers={["Field", "Value"]} rows={[
      ["Campaign Name", "8630 Green Hills — Medical Conversion"],
      ["Objective", "Tour Scheduling / LOI Submission"],
      ["Audience", "Stage 4 graduates + Tier A prospects"],
      ["Budget", "20% of total ($1,000/month)"],
      ["Video Length", "30-45 seconds"],
      ["Conversion Goal", "8-12% of audience takes action"],
    ]} />
    <div className="prose">
      <p><strong>Lead Gen Form:</strong> First Name, Last Name, Email, Phone, Practice Name, Practice Type, Number of Providers, Timeline (0-3mo / 3-6mo / 6-12mo / 12+mo)</p>
      <p><strong>Scoring:</strong> 0-3 months + 3+ providers = Score 95. Andrew Danner calls within 2 hours. 3-6 months = Score 80, personalized email within 24 hours.</p>
    </div>
  </>);
}

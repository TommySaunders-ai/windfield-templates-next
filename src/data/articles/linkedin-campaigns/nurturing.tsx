import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function NurturingCampaignContent() {
  return (<>
    <SectionDivider label="Stage 6: Customer Nurturing" />
    <SpecTable headers={["Field", "Value"]} rows={[
      ["Campaign Name", "8630 Green Hills — Medical Owner Success"],
      ["Objective", "Engagement / Retention"],
      ["Audience", "Toured prospects + Tier A/B (score 60+)"],
      ["Budget", "5% of total ($250/month)"],
      ["Video Length", "2-3 minutes"],
    ]} />
    <div className="prose">
      <p><strong>Topic:</strong> What Happens After You Buy a Medical Office — buildout timeline, TI process, equipment installation, licensing, patient transition planning.</p>
      <p><strong>Support Resources:</strong> Medical office buildout guide, recommended KC architects, SBA 504 loan guide for medical practice real estate.</p>
      <p><strong>Cycle:</strong> 90-day nurture with monthly touchpoints.</p>
    </div>
  </>);
}

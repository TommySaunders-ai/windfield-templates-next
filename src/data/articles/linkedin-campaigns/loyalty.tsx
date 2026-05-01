import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function LoyaltyCampaignContent() {
  return (<>
    <SectionDivider label="Stage 7: Loyalty & Advocacy" />
    <SpecTable headers={["Field", "Value"]} rows={[
      ["Campaign Name", "Green Hills Medical Corridor — Community"],
      ["Objective", "Referrals / Brand Building"],
      ["Audience", "Closed deals + corridor partners"],
      ["Budget", "5% of total ($250/month)"],
      ["Video Length", "3-5 minutes (mini-documentary)"],
    ]} />
    <div className="prose">
      <p><strong>Topic:</strong> The Green Hills Medical Corridor — spotlight video featuring medical practices on Green Hills Rd, their outcomes, corridor growth story, and healthcare community.</p>
      <p><strong>Referral Program:</strong> $5,000 referral fee for introductions that lead to a signed deal.</p>
      <p><strong>Brand Building:</strong> Green Hills Medical Corridor branded materials, shared website presence, Google Maps cluster optimization.</p>
    </div>
  </>);
}

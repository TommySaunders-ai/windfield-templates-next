import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function SEMContent() {
  return (<>
    <SectionDivider label="SEM — 7 Google Ads Campaigns" />
    <SpecTable headers={["Campaign", "Budget/mo", "Bid Strategy", "Conv. Target", "CPA Target"]} rows={[
      ["Medical Office Sale KC", "$500", "Target CPA", "5%", "$100"],
      ["Owner-Occupant Medical", "$300", "Target CPA", "4%", "$75"],
      ["Dental Space KC", "$200", "Max Clicks", "3%", "$65"],
      ["Urgent Care Space KC", "$200", "Max Clicks", "3%", "$65"],
      ["Med Spa Space KC (HIGHEST)", "$300", "Target CPA", "5%", "$60"],
      ["Healthcare Investment KC", "$300", "Target CPA", "2%", "$150"],
      ["Retargeting (Site Visitors)", "$200", "Target CPA", "8%", "$40"],
    ]} />
    <div className="prose">
      <p><strong>Total SEM Budget:</strong> $2,000/month</p>
      <p><strong>Expected Monthly:</strong> 30-50 qualified clicks, 5-10 form submissions, 2-4 tour requests</p>
    </div>
  </>);
}

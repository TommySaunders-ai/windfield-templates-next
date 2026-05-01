import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function HealthcareInvestorsListContent() {
  return (
    <>
      <SectionDivider label="Healthcare Real Estate Investors" />
      <div className="prose">
        <p><strong>Target Count:</strong> 15-20 targets</p>
        <p>REITs, private equity firms, and individual investors specializing in medical office building acquisitions.</p>
      </div>
      <SectionDivider label="Target Companies" />
      <SpecTable headers={["Company", "Type", "Focus", "Signal"]} rows={[
        ["Physicians Realty Trust (DOC)", "REIT", "Medical office", "National, KC market presence"],
        ["Healthcare Trust (HTIA)", "REIT", "Medical outpatient", "Active Midwest acquisitions"],
        ["Global Medical REIT (GMRE)", "REIT", "Net lease medical", "Acquiring single-tenant medical"],
        ["Montecito Medical", "Private", "MOB acquisitions", "Active buyer, relationship-based"],
        ["NexCore Group", "Developer/Investor", "Medical office", "Development + acquisition"],
        ["Anchor Health Properties", "Private", "MOB/outpatient", "Active acquirer"],
        ["PMB Real Estate Services", "Developer/Investor", "Healthcare RE", "West/Midwest expansion"],
      ]} />
    </>
  );
}

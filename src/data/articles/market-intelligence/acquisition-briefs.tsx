import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function AcquisitionBriefsContent() {
  return (
    <>
      <SectionDivider label="Brief 1: Medical Group Owner-Occupant" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Priority", "Highest"],
          ["Objective", "Identify multi-physician medical group seeking to own their facility in KC Northland"],
          ["Ideal Profile", "3-8 physician group, $5M-20M revenue, currently leasing, seeking equity"],
          ["Expected Count", "15-25 targets"],
        ]}
      />
      <div className="prose">
        <p><strong>Outreach Angle:</strong> &ldquo;Own your practice location — 2020 Class-A office building on Green Hills Rd, configured for medical use, immediate I-29 access.&rdquo;</p>
      </div>

      <SectionDivider label="Brief 2: Medical REIT / Healthcare Investor" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Priority", "High"],
          ["Objective", "Identify healthcare-focused REITs and private investors seeking KC market entry"],
          ["Ideal Profile", "Healthcare REIT, medical office fund, or private investor with medical tenant relationships"],
          ["Expected Count", "10-15 targets"],
        ]}
      />
      <div className="prose">
        <p><strong>Outreach Angle:</strong> &ldquo;10,500 SF Class-A medical office opportunity in growing KC Northland corridor — strong demographics, adjacent medical cluster.&rdquo;</p>
      </div>

      <SectionDivider label="Brief 3: Urgent Care / Med Spa Chain" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Priority", "High"],
          ["Objective", "National and regional urgent care and med spa chains expanding in KC"],
          ["Expected Count", "20-30 targets"],
        ]}
      />
      <div className="prose">
        <p><strong>Outreach Angle:</strong> &ldquo;Turnkey Class-A space on high-traffic Green Hills Rd corridor — ideal for your next KC Northland location.&rdquo;</p>
      </div>
    </>
  );
}

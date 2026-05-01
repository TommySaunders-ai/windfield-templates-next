import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function ClayConfigsContent() {
  return (
    <>
      <SectionDivider label="12 Clay Search Configurations" />
      <SpecTable headers={["Config", "Search Name", "Priority", "Max Results"]} rows={[
        ["1", "Urgent Care & Walk-In Clinic Operators — KC Metro", "Highest", "50"],
        ["2", "Med Spa & Aesthetic Medicine — KC Metro", "Highest", "50"],
        ["3", "Chiropractic Practices — KC Northland", "High", "30"],
        ["4", "Physical Therapy & Rehab — KC Metro", "High", "40"],
        ["5", "Dental & Orthodontic — KC Northland", "High", "30"],
        ["6", "Optometry & Eye Care — KC Metro", "Medium-High", "25"],
        ["7", "Behavioral Health & Counseling — KC Metro", "Medium-High", "25"],
        ["8", "Medical Staffing & Home Health — KC Metro", "Medium", "25"],
        ["9", "Specialty Medical (Derm, Podiatry, ENT, Allergy)", "Medium", "30"],
        ["10", "Google Maps — Medical Businesses Near Property", "Highest", "30/query"],
        ["11", "Healthcare REIT & Medical Office Investors", "High", "25"],
        ["12", "Medical Franchise Development Officers", "High", "30"],
      ]} />
      <div className="prose">
        <p>All configs target medical decision makers — Practice Owner, Medical Director, CEO, VP Real Estate, Director Site Selection — across Healthcare, Medical Practice, and Franchise industries.</p>
        <p>Location targeting ranges from KC Northland (local practices) to United States (national chains and REITs).</p>
      </div>
    </>
  );
}

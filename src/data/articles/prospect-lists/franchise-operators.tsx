import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { LayerStack } from "@/components/content/layer-stack";

export function FranchiseOperatorsListContent() {
  return (
    <>
      <SectionDivider label="Medical Franchise Expansion Targets" />
      <div className="prose">
        <p><strong>Target Count:</strong> 30-50 targets</p>
        <p>National and regional franchise operators in urgent care, med spa, PT, dental, and specialty medical categories actively seeking KC Northland locations.</p>
      </div>

      <LayerStack layers={[
        { header: "Urgent Care", items: ["CareNow (HCA)", "NextCare", "Total Access", "MedExpress (Optum)", "GoHealth", "CityMD / Summit", "Carbon Health", "Concentra"] },
        { header: "Med Spa", items: ["Ideal Image", "LaserAway", "SkinSpirit", "Sono Bello", "AesthetiCare", "Restore Hyper Wellness", "European Wax Center"] },
        { header: "Physical Therapy", items: ["ATI", "PT Solutions", "Select (Select Medical)", "Athletico", "Pivot", "CORA"] },
        { header: "Dental", items: ["Heartland Dental", "Aspen Dental", "Pacific Dental Services", "Dental Care Alliance", "Smile Brands"] },
        { header: "Specialty", items: ["The Joint Chiropractic", "Pearle Vision / LensCrafters", "MyEyeDr", "Quest Diagnostics", "Labcorp", "Any Lab Test Now"] },
      ]} />

      <SectionDivider label="Search Parameters" />
      <SpecTable headers={["Parameter", "Value"]} rows={[
        ["Job Titles", "Franchise Development Officer, VP Real Estate, Director Site Selection, CDO"],
        ["Seniority", "VP, Director, CXO"],
        ["Company Size", "50-5,000 employees"],
        ["Location", "United States (national chains)"],
      ]} />
    </>
  );
}

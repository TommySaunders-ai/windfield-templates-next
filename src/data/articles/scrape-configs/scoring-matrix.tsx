import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function ScoringMatrixContent() {
  return (
    <>
      <SectionDivider label="Scoring Dimensions" />
      <SpecTable headers={["Dimension", "Weight", "How to Score"]} rows={[
        ["Medical Category Fit", "30%", "Med spa, urgent care, orthopedic = highest. Chiro, PT = medium (saturation)."],
        ["Decision-Maker Authority", "20%", "Practice Owner/MD = 100. Office Manager = 70. Staff = 30."],
        ["Space Need Alignment", "15%", "Needs 2,000-10,500 SF = 100. Under 1,500 or over 15,000 = 30."],
        ["Geographic Proximity", "15%", "Within 5mi = 100. Within 15mi = 70. Within 25mi = 50. Outside = 20."],
        ["Financial Capacity", "10%", "Revenue >$2M or multi-physician = 100. Solo = 60. Startup = 30."],
        ["Data Completeness", "10%", "Email + phone + LinkedIn = 100. Email only = 60. No contact = 20."],
      ]} />

      <SectionDivider label="Medical Category Fit Scores" />
      <SpecTable headers={["Category", "Score", "Rationale"]} rows={[
        ["Med Spa / Aesthetic", "95", "HIGHEST GAP — zero competition, demographics support elective spend"],
        ["Urgent Care / Walk-In", "90", "Underserved corridor, high visibility, chains expanding"],
        ["Orthopedic / Sports Med", "85", "Low supply, active population, existing contact"],
        ["Dental / Ortho (DSO/Group)", "85", "Modern plumbing, demographics support dental"],
        ["Behavioral Health", "80", "National shortage, telehealth satellite model"],
        ["Medical Lab / Imaging", "80", "Adjacent cluster = referral pipeline"],
        ["Specialty Medical", "75", "Growing suburban population, underserved vs JoCo"],
        ["Pharmacy / Compounding", "70", "Adjacent cluster creates Rx volume"],
        ["Medical Staffing", "65", "Administrative office, I-29 access for dispatch"],
        ["Optometry", "60", "Existing Northland Eye on corridor — served"],
        ["Physical Therapy", "55", "3 competitors within 2mi"],
        ["Chiropractic", "50", "5+ competitors within 2mi, well-served"],
      ]} />

      <SectionDivider label="Priority Tiers" />
      <SpecTable headers={["Tier", "Score", "Target Count", "Action"]} rows={[
        ["A (Hot)", "80-100", "15-25", "Immediate personal call + email + LinkedIn InMail"],
        ["B (Warm)", "60-79", "30-50", "Personalized 5-touch email sequence"],
        ["C (Nurture)", "40-59", "50-75", "Automated drip campaign + LinkedIn ads"],
        ["D (Monitor)", "20-39", "75+", "Property newsletter + retargeting"],
      ]} />
    </>
  );
}

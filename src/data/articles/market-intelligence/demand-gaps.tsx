import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function DemandGapsContent() {
  return (
    <>
      <SectionDivider label="Medical Demand Gaps" />
      <SpecTable
        headers={["Category", "Current Supply", "Demand Signal", "Opportunity"]}
        rows={[
          ["Med Spa / Aesthetic", "LOW — no dedicated med spa in corridor", "High-income demographics support elective spend", "HIGH — 2,000-3,000 SF suite"],
          ["Urgent Care", "MODERATE — Saint Luke's 1.5 mi away", "Growing population, M-152 daytime traffic", "MEDIUM-HIGH — 3,000-5,000 SF"],
          ["Orthopedic / Sports Med", "LOW — existing contact interest", "Active/suburban population, youth sports", "HIGH — 2,500-4,000 SF"],
          ["Behavioral Health", "LOW — limited presence", "National shortage, telehealth satellite model", "MEDIUM — 1,500-2,500 SF"],
          ["Dental / Orthodontic", "MODERATE — some area coverage", "Population supports additional practice", "MEDIUM — 2,500-3,500 SF"],
          ["Physical Therapy", "HIGH — 3 PT clinics within 2 mi", "Served but fragmented; consolidation play", "LOW-MEDIUM"],
          ["Chiropractic", "HIGH — 5+ chiropractors within 2 mi", "Market well-served", "LOW"],
        ]}
      />

      <PullQuote>
        HIGHEST DEMAND GAP: Med spa / aesthetic medicine — zero dedicated med spa in the Tiffany Hills corridor despite $107K avg HHI demographics that strongly support elective aesthetic procedures.
      </PullQuote>

      <SectionDivider label="Risk Factors" />
      <SpecTable
        headers={["Risk", "Category", "Severity", "Mitigation"]}
        rows={[
          ["Medical buildout cost", "Financial", "Medium", "Negotiate TI allowance; medical users accustomed to $50-80/SF buildout"],
          ["Competing development", "Market", "Low", "No announced new medical office construction in corridor"],
          ["PT/chiro saturation", "Demand", "Medium", "Focus on underserved categories (med spa, urgent care, orthopedic)"],
          ["Single-story limits expansion", "Physical", "Low", "10,500 SF sufficient for most medical groups"],
          ["Call For Pricing uncertainty", "Sales", "Medium", "Provide comp data and pro forma to qualified buyers"],
        ]}
      />
    </>
  );
}

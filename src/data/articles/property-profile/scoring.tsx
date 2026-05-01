import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function ScoringIntelligenceContent() {
  return (
    <>
      <SectionDivider label="Scoring & Intelligence" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Completeness Score", "70/100"],
          ["Investment Score", "84/100"],
          ["Lead Temperature", "Hot"],
          ["Enrichment Status", "Complete"],
          ["Last Enriched", "2026-04-16"],
        ]}
      />

      <SectionDivider label="Score Breakdown" />
      <div className="prose">
        <h4>Completeness Score: 70/100</h4>
        <p>
          Property data is substantially complete with core identity, building characteristics, pricing framework, and medical use case analysis in place. Remaining gaps include detailed financial pro forma (cap rate, NOI) and granular demographic data beyond the 2-mile radius.
        </p>

        <h4>Investment Score: 84/100</h4>
        <p>
          Strong investment fundamentals driven by 2020 construction vintage, B3-3 medical zoning flexibility, adjacent medical cluster momentum, and $107K avg HHI demographics. The corridor has no competing new medical office construction in the pipeline.
        </p>

        <h4>Lead Temperature: Hot</h4>
        <p>
          Active interest from medical groups in KC Northland. The med spa demand gap (zero competition on corridor) and urgent care underservice create immediate tenant demand opportunities.
        </p>
      </div>
    </>
  );
}

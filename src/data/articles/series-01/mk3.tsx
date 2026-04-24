import { SectionDivider } from "@/components/content/section-divider";
import { TagList } from "@/components/content/tag-list";
import { SystemCard } from "@/components/content/system-card";
import { SpecTable } from "@/components/content/spec-table";

export function MK3Content() {
  return (
    <>
      <SectionDivider label="Five Strategy Tracks" />

      <TagList
        tags={[
          "Organic Marketing",
          "Influencer Marketing",
          "Social Media Marketing",
        ]}
      />
      <TagList
        tags={[
          "SEO",
          "CRO",
          "GEO",
          "LLM Search",
          "SEM",
          "AI Powered Browsers",
          "AEO",
        ]}
      />
      <TagList
        tags={[
          "Paid Acquisition",
          "Performance Marketing",
          "Demand Generation",
          "Paid Social",
        ]}
      />
      <TagList
        tags={[
          "Sales & Distribution",
          "Account-Based Marketing",
          "Email Marketing",
        ]}
      />
      <TagList tags={["Growth Strategy", "Social Scaling & Engagement"]} />

      <SystemCard label="Track Summary" title="Time Horizons & Primary Metrics">
        <SpecTable
          headers={["Track", "Time horizon", "Primary metric"]}
          rows={[
            ["Organic", "12\u201324 months", "Reach, brand equity"],
            [
              "Search",
              "6\u201318 mo SEO / Immediate SEM",
              "Impressions, answer presence",
            ],
            ["Paid", "Immediate\u201390 days", "ROAS, CPL, CAC"],
            ["Sales", "Deal cycle length", "Pipeline, revenue, retention"],
            [
              "Growth",
              "30\u201390 days per experiment",
              "Growth rate, viral coefficient",
            ],
          ]}
        />
      </SystemCard>
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function AdjacentServicesListContent() {
  return (
    <>
      <SectionDivider label="Medical-Adjacent Professional Services" />
      <div className="prose">
        <p><strong>Target Count:</strong> 15-20 targets</p>
        <p>Insurance agents, financial advisors, accountants, and attorneys who specialize in serving medical practices. These firms benefit from proximity to a medical cluster.</p>
      </div>
      <SectionDivider label="Known Prospects" />
      <SpecTable headers={["Business", "Category", "Fit Score"]} rows={[
        ["Northland Independent Insurance Group", "Insurance", "75"],
        ["AssuredPartners Kansas City", "Insurance", "75"],
        ["American Family Insurance (Dalton Owen)", "Insurance", "70"],
        ["Stephen Heffner Financial Partners", "Financial", "70"],
        ["WealthStar Advisors", "Financial", "70"],
        ["Reller & Company CPA", "CPA", "75"],
        ["Forvis Mazars KC", "CPA", "75"],
      ]} />
      <PullQuote>
        We are building a medical-focused office campus at 8630 N Green Hills Road. Co-locating adjacent to medical practices could strengthen your referral pipeline.
      </PullQuote>
    </>
  );
}

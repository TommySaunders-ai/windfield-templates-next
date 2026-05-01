import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function MedicalPracticesListContent() {
  return (
    <>
      <SectionDivider label="Medical Practice Prospect List" />
      <div className="prose">
        <p><strong>Target Count:</strong> 50-75 targets</p>
        <p>Medical practices (primary care, specialist, multi-physician groups) within 25-mile radius seeking to purchase or lease Class-A office space in KC Northland.</p>
      </div>
      <SectionDivider label="Clay Search Parameters" />
      <SpecTable headers={["Parameter", "Value"]} rows={[
        ["Job Titles", "Practice Owner, Medical Director, CEO, Managing Partner, Office Manager"],
        ["Seniority", "Owner, Partner, CXO, Director"],
        ["Industries", "Healthcare, Medical Practice, Ambulatory Care, Physician Groups"],
        ["Company Size", "5-200 employees"],
        ["Location", "Kansas City Metro (25-mile radius)"],
        ["Revenue Range", "$500K - $20M"],
      ]} />
      <SectionDivider label="Qualification Criteria" />
      <div className="prose">
        <ul>
          <li>Licensed medical practice in Missouri or Kansas</li>
          <li>Actively expanding, opening second location, or seeking facility upgrade</li>
          <li>Financial capacity to purchase at market price or lease at $18-28 PSF NNN</li>
          <li>Practice size compatible with 2,000-10,500 SF</li>
          <li>Decision-maker accessible via LinkedIn or direct contact</li>
        </ul>
      </div>
      <PullQuote>
        We represent a 2020 Class-A office building at 8630 N Green Hills Road in the Tiffany Hills corridor — 10,500 SF, single-story, with modern infrastructure ideal for medical buildout.
      </PullQuote>
    </>
  );
}

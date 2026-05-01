import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function UrgentCareProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Urgent Care / Walk-In Clinic"],
        ["Space Requirement", "3,000 - 5,000 SF"],
        ["Rent Budget PSF", "$22 - $28 NNN"],
        ["Annual Revenue", "$2M - $8M"],
        ["Industry", "Healthcare — Ambulatory Care"],
        ["NAICS Codes", "621493, 621498"],
        ["Company Size", "10-75 employees per location"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Single-story Class-A with M-152/I-29 visibility drives walk-in patient volume</li>
          <li>2020 construction supports modern medical infrastructure (plumbing, HVAC, electrical)</li>
          <li>B3-3 zoning permits urgent care use</li>
          <li>KC Northland underserved — nearest urgent care (Saint Luke&apos;s) is 1.5 mi away on Barry Rd</li>
          <li>Parking ratio (4.0/1,000 SF) supports high patient throughput</li>
          <li>$107K avg HHI within 2mi — patients with insurance and ability to pay</li>
        </ul>
      </div>

      <SectionDivider label="Decision Maker Titles" />
      <div className="prose">
        <p>Practice Owner, CEO, VP of Real Estate, Director of Site Selection, Chief Development Officer, VP Operations, Franchise Development Officer</p>
      </div>

      <SectionDivider label="Known Targets" />
      <SpecTable headers={["Company", "Contact", "Status"]} rows={[
        ["Total Access Urgent Care", "Joe Godfrey", "Existing CRM contact"],
        ["Next Care Urgent Care", "Gregory Valladao", "Existing CRM contact"],
        ["Next Care Urgent Care", "Phil Lesnik", "Existing CRM contact"],
      ]} />

      <PullQuote>
        KC Northland underserved — nearest urgent care is 1.5 miles away on Barry Road. The M-152/I-29 interchange drives the walk-in volume that urgent care models depend on.
      </PullQuote>

      <SectionDivider label="Growth Signals to Watch" />
      <div className="prose">
        <ul>
          <li>Announced expansion plans in KC metro</li>
          <li>Recent franchise agreement filings in Missouri</li>
          <li>Job postings for KC-area clinical staff</li>
          <li>New LLC registrations in Platte/Clay County</li>
          <li>Certificate of Need applications</li>
        </ul>
      </div>
    </>
  );
}

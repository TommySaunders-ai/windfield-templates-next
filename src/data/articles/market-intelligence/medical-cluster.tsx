import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function MedicalClusterContent() {
  return (
    <>
      <SectionDivider label="Existing Medical Cluster (Within 2 Miles)" />
      <SpecTable
        headers={["Practice", "Category", "Address", "Distance"]}
        rows={[
          ["Northland Eye Specialists", "Optometry", "8660 N Green Hills Rd", "0.1 mi"],
          ["Magnolia Family Chiropractic", "Chiropractic", "8560 N Green Hills Rd Ste 116", "0.1 mi"],
          ["PT Solutions Platte Woods", "Physical Therapy", "8644 N Boardwalk Ave Ste 21", "0.3 mi"],
          ["Professional EyeCare KC", "Optometry", "8403 N Mercier Rd", "0.4 mi"],
          ["I Got Your Back Chiropractic", "Chiropractic", "8359 N Congress Ave", "0.5 mi"],
          ["Barry Road Chiropractic", "Chiropractic", "6316 NW Barry Rd", "0.8 mi"],
          ["Vision Source Eyecare", "Optometry", "9596 N McGee St", "1.2 mi"],
          ["Curtis Chiropractic", "Chiropractic", "208 NE Barry Rd", "1.5 mi"],
          ["Modern Physical Therapy", "Physical Therapy", "335 NW Barry Rd", "1.5 mi"],
          ["Saint Luke's Convenient Care", "Urgent Care", "500 NE Barry Rd", "1.5 mi"],
          ["Metro North Chiropractic", "Chiropractic", "27 NW Barry Rd", "1.8 mi"],
          ["Select Physical Therapy Metro North", "Physical Therapy", "9411 N Oak Trfy Ste 200", "1.8 mi"],
          ["Northland Spine and Rehab", "Chiropractic", "KC Northland", "2.0 mi"],
        ]}
      />

      <PullQuote>
        13 medical practices within 2 miles — the corridor is establishing itself as a healthcare destination. 8630 Green Hills sits at the center of this emerging medical cluster.
      </PullQuote>

      <SectionDivider label="Medical Market Trends — Kansas City" />
      <div className="prose">
        <ul>
          <li><strong>Suburban migration of medical practices</strong> — physicians leaving hospital campuses for standalone offices with lower overhead and better patient access</li>
          <li><strong>Med spa explosion</strong> — aesthetic medicine growing 15-20% annually; KC Northland underserved relative to south JoCo</li>
          <li><strong>Urgent care expansion</strong> — national chains (CareNow, NextCare, Total Access) actively seeking KC Northland locations</li>
          <li><strong>Physical therapy consolidation</strong> — ATI, PT Solutions, Select acquiring independent practices; need larger consolidated spaces</li>
          <li><strong>Telehealth satellite offices</strong> — behavioral health and specialty practices establishing small satellite locations for in-person visits</li>
          <li><strong>Owner-occupant trend</strong> — medical groups purchasing buildings rather than leasing, building equity in practice real estate</li>
        </ul>
      </div>
    </>
  );
}

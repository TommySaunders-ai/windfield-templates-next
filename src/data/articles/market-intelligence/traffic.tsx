import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function TrafficAccessContent() {
  return (
    <>
      <SectionDivider label="Traffic Counts" />
      <SpecTable
        headers={["Road", "VPD", "Notes"]}
        rows={[
          ["N Green Hills Road", "8,000-12,000", "Primary property frontage"],
          ["M-152 (NW 152nd St)", "15,000-20,000", "Adjacent highway interchange"],
          ["I-29", "40,000+", "2 miles east"],
          ["NW Barry Road", "25,000+", "Major retail corridor, 2 miles south"],
        ]}
      />

      <SectionDivider label="Access Points" />
      <div className="prose">
        <ul>
          <li><strong>M-152 Interchange</strong> — immediate access from Green Hills Road intersection, primary driver of visibility and patient traffic</li>
          <li><strong>I-29</strong> — 2 minutes east via M-152, connects to downtown KC and northbound to St. Joseph</li>
          <li><strong>NW Barry Road</strong> — 2 miles south, the Northland&apos;s primary retail corridor with 25,000+ VPD</li>
          <li><strong>N Oak Trafficway</strong> — regional north-south corridor providing secondary access from Gladstone, Liberty, and North KC</li>
        </ul>
      </div>
    </>
  );
}

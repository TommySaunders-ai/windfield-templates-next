import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function ChiropracticContactsContent() {
  return (<>
    <SectionDivider label="Chiropractic Prospects (6 total)" />
    <SpecTable headers={["Business", "Address", "Phone", "Score"]} rows={[
      ["Curtis Chiropractic", "208 NE Barry Rd, KC 64155", "(816) 468-8866", "77"],
      ["Barry Road Chiropractic", "6316 NW Barry Rd, KC 64154", "(816) 505-1772", "77"],
      ["I Got Your Back Chiropractic", "8359 N Congress Ave, KC 64155", "(816) 468-9990", "77"],
      ["Magnolia Family Chiropractic", "8560 N Green Hills Rd Ste 116", "(816) 205-8304", "77"],
      ["Metro North Chiropractic", "27 NW Barry Rd, KC 64155", "(816) 468-1825", "77"],
      ["Northland Spine and Rehab", "KC Northland, KC 64155", "—", "67"],
    ]} />
    <div className="prose"><p>All scraped from local business directories. Need Clay enrichment for owner names, emails, and LinkedIn profiles to begin outreach.</p></div>
  </>);
}

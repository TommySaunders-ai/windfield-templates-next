import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function PTContactsContent() {
  return (<>
    <SectionDivider label="Physical Therapy Prospects (8 total)" />
    <SpecTable headers={["Business/Contact", "Type", "Phone", "Status"]} rows={[
      ["John Alarik — ATI Physical Therapy", "CRM Contact", "(847) 942-8844", "Existing"],
      ["Sharon Fleming — PT Clinic", "CRM Contact", "(816) 591-1365", "Existing"],
      ["Modern Physical Therapy", "Scraped", "(816) 468-5278", "335 NW Barry Rd"],
      ["PT Solutions Platte Woods", "Scraped", "(913) 632-4740", "8644 N Boardwalk Ave"],
      ["Select PT Metro North", "Scraped", "(816) 792-2266", "9411 N Oak Trfy"],
      ["Northland PT & Rehab", "Scraped", "—", "7609 NW Roanridge Rd"],
      ["KC Rehab PT", "Scraped", "—", "Multiple Locations"],
      ["Ignite Medical Resorts", "Scraped", "—", "KC Northland"],
    ]} />
  </>);
}

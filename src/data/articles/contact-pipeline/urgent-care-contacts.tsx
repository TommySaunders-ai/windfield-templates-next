import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function UrgentCareContactsContent() {
  return (<>
    <SectionDivider label="Urgent Care Prospects (6 total)" />
    <SpecTable headers={["Business/Contact", "Type", "Phone", "Status"]} rows={[
      ["Joe Godfrey — Total Access UC", "CRM Contact", "(317) 383-1340", "Existing"],
      ["Gregory Valladao — NextCare", "CRM Contact", "(602) 697-0078", "Existing"],
      ["Phil Lesnik — NextCare", "CRM Contact", "(708) 829-2124", "Existing"],
      ["Saint Luke's Convenient Care", "Scraped", "—", "500 NE Barry Rd, 1.5 mi"],
      ["Concentra NKC", "Scraped", "—", "North Kansas City"],
      ["Gladstone Urgent Care", "Scraped", "—", "7642 N Oak Trafficway"],
    ]} />
  </>);
}

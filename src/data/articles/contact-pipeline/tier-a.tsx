import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function TierAContent() {
  return (<>
    <SectionDivider label="CRM Contacts — Medical (Direct)" />
    <SpecTable headers={["Name", "Company", "Phone", "Email", "Category"]} rows={[
      ["John Eggers", "Orthopedic Health of KC", "(402) 301-3324", "johnpeggers@gmail.com", "Orthopedic"],
      ["Sharon Fleming", "Physical Therapy Clinic", "(816) 591-1365", "sharlojo75@yahoo.com", "PT"],
      ["Joe Godfrey", "Total Access Urgent Care", "(317) 383-1340", "jgodfrey@tauc.com", "Urgent Care"],
      ["John Alarik", "ATI Physical Therapy", "(847) 942-8844", "john.alarik@gmail.com", "PT"],
      ["Gregory Valladao", "Next Care Urgent Care", "(602) 697-0078", "gregvalladao@nextcare.com", "Urgent Care"],
      ["Phil Lesnik", "Next Care Urgent Care", "(708) 829-2124", "philiplesnik@nextcare.com", "Urgent Care"],
    ]} />
    <SectionDivider label="Pipeline Summary" />
    <SpecTable headers={["Category", "CRM", "Scraped", "Total"]} rows={[
      ["Urgent Care", "3", "3", "6"],
      ["Physical Therapy", "2", "6", "8"],
      ["Chiropractic", "0", "6", "6"],
      ["Optometry", "0", "3", "3"],
      ["Orthopedic", "1", "0", "1"],
      ["Dental", "0", "2", "2"],
      ["Med Spa", "0", "0", "0 (HIGHEST PRIORITY)"],
      ["Behavioral Health", "0", "0", "0 (HIGH PRIORITY)"],
      ["TOTAL", "6", "20", "26"],
    ]} />
  </>);
}

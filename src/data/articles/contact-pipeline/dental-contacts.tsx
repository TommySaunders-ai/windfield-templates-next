import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function DentalContactsContent() {
  return (<>
    <SectionDivider label="Dental Prospects (2 total)" />
    <SpecTable headers={["Business", "Location", "Phone", "Score"]} rows={[
      ["KC North Dentist", "64154 area", "—", "67"],
      ["Staley Dental Arts", "KC Northland, 64155", "—", "67"],
    ]} />
    <div className="prose"><p>Only 2 dental prospects with no contact info. Run Clay Config 5 for DSO/franchise targets (Heartland Dental, Aspen Dental, Pacific Dental) and Google Maps Scrape 6 to expand this category.</p></div>
  </>);
}

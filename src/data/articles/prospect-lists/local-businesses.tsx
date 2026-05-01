import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function LocalBusinessesListContent() {
  return (
    <>
      <SectionDivider label="Local Medical Business Targets" />
      <div className="prose">
        <p><strong>Target Count:</strong> 25-40 targets (13 already identified)</p>
        <p>Existing medical practices within 5 miles of the property that may be seeking better facilities, expansion space, or building ownership opportunity.</p>
      </div>

      <SectionDivider label="Chiropractic (6 practices)" />
      <SpecTable headers={["Business", "Address", "Phone", "Score"]} rows={[
        ["Curtis Chiropractic", "208 NE Barry Rd", "(816) 468-8866", "77"],
        ["Barry Road Chiropractic", "6316 NW Barry Rd", "(816) 505-1772", "77"],
        ["I Got Your Back Chiro", "8359 N Congress Ave", "(816) 468-9990", "77"],
        ["Magnolia Family Chiro", "8560 N Green Hills Rd Ste 116", "(816) 205-8304", "77"],
        ["Metro North Chiro", "27 NW Barry Rd", "(816) 468-1825", "77"],
        ["Northland Spine & Rehab", "KC Northland", "—", "67"],
      ]} />

      <SectionDivider label="Optometry (3 practices)" />
      <SpecTable headers={["Business", "Address", "Phone", "Score"]} rows={[
        ["Professional EyeCare KC", "8403 N Mercier Rd", "(816) 468-1220", "77"],
        ["Northland Eye Specialists", "8660 N Green Hills Rd", "(816) 584-1901", "77"],
        ["Vision Source Eyecare", "9596 N McGee St", "(816) 476-4017", "77"],
      ]} />

      <SectionDivider label="Physical Therapy (6 practices)" />
      <SpecTable headers={["Business", "Address", "Phone", "Score"]} rows={[
        ["Modern Physical Therapy", "335 NW Barry Rd", "(816) 468-5278", "77"],
        ["PT Solutions Platte Woods", "8644 N Boardwalk Ave Ste 21", "(913) 632-4740", "77"],
        ["Select PT Metro North", "9411 N Oak Trfy Ste 200", "(816) 792-2266", "77"],
        ["Northland PT & Rehab", "7609 NW Roanridge Rd", "—", "67"],
        ["KC Rehab PT", "Multiple Locations", "—", "67"],
        ["Ignite Medical Resorts", "KC Northland", "—", "67"],
      ]} />

      <SectionDivider label="Dental (2) & Urgent Care (3)" />
      <SpecTable headers={["Business", "Category", "Phone", "Score"]} rows={[
        ["KC North Dentist", "Dental", "—", "67"],
        ["Staley Dental Arts", "Dental", "—", "67"],
        ["Saint Luke's Convenient Care", "Urgent Care", "—", "67"],
        ["Concentra NKC", "Urgent Care", "—", "57"],
        ["Gladstone Urgent Care", "Urgent Care", "—", "57"],
      ]} />
    </>
  );
}

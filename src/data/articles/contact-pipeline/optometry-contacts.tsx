import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function OptometryContactsContent() {
  return (<>
    <SectionDivider label="Optometry Prospects (3 total)" />
    <SpecTable headers={["Business", "Address", "Phone", "Score"]} rows={[
      ["Professional EyeCare KC", "8403 N Mercier Rd, KC 64155", "(816) 468-1220", "77"],
      ["Northland Eye Specialists", "8660 N Green Hills Rd, KC 64154", "(816) 584-1901", "77"],
      ["Vision Source Eyecare", "9596 N McGee St, KC 64155", "(816) 476-4017", "77"],
    ]} />
    <div className="prose"><p>Northland Eye Specialists is adjacent to the property at 8660 — proven eye care demand on corridor. Professional EyeCare KC at 0.4 mi and Vision Source at 1.2 mi round out the optometry cluster.</p></div>
  </>);
}

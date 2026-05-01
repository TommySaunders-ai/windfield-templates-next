import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function OptometryProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Optometry / Ophthalmology"],
        ["Space Requirement", "2,000 - 3,500 SF"],
        ["Rent Budget PSF", "$20 - $26 NNN"],
        ["Annual Revenue", "$800K - $3M"],
        ["Industry", "Healthcare — Eye Care"],
        ["NAICS Codes", "621320"],
        ["Company Size", "3-20 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Northland Eye Specialists already at 8660 N Green Hills Rd — proven eye care demand</li>
          <li>Modern construction supports optical equipment (darkrooms, exam lanes, pre-test areas)</li>
          <li>Demographics support vision care: aging suburban population, family-oriented community</li>
          <li>Single-story important for elderly patients</li>
          <li>High visibility for optical retail (frames, contacts)</li>
        </ul>
      </div>
      <SectionDivider label="Known Prospects" />
      <SpecTable headers={["Business", "Location", "Status"]} rows={[
        ["Northland Eye Specialists", "8660 N Green Hills Rd, 0.1 mi", "Scraped"],
        ["Professional EyeCare KC", "8403 N Mercier Rd, 0.4 mi", "Scraped"],
        ["Vision Source Eyecare", "9596 N McGee St, 1.2 mi", "Scraped"]
      ]} />
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function MedSpaProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Med Spa / Aesthetic Medicine"],
        ["Space Requirement", "2,000 - 4,000 SF"],
        ["Rent Budget PSF", "$22 - $30 NNN"],
        ["Annual Revenue", "$1M - $5M"],
        ["Industry", "Healthcare — Aesthetic / Cosmetic"],
        ["NAICS Codes", "621999, 812199"],
        ["Company Size", "5-25 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li><strong>HIGHEST DEMAND GAP</strong> — no dedicated med spa in Tiffany Hills/Coves North corridor</li>
          <li>$107K avg HHI within 2mi — prime demographic for elective aesthetic procedures</li>
          <li>Class-A modern interior — suitable for treatment rooms, consultation areas, retail display</li>
          <li>High visibility on M-152 corridor — brand building for aesthetic practice</li>
          <li>Single-story with parking — discreet patient access for cosmetic procedures</li>
          <li>Med spa industry growing 15-20% annually nationally</li>
        </ul>
      </div>
      <SectionDivider label="Known Prospects" />
      <SpecTable headers={["Business", "Location", "Status"]} rows={[
        ["Ideal Image", "National — 150+ locations", "Actively expanding Midwest"],
        ["LaserAway", "National — 100+ locations", "Recent KC market research"],
        ["SkinSpirit", "Premium — 30+ locations", "Expanding beyond West Coast"],
        ["Sono Bello", "Body contouring — 100+ locations", "KC market underserved"],
        ["AesthetiCare", "Regional — Midwest focus", "Active KC expansion"]
      ]} />
      <PullQuote>HIGHEST DEMAND GAP — zero dedicated med spa in the Tiffany Hills corridor despite $107K avg HHI demographics that strongly support Botox, fillers, laser, CoolSculpting, and elective aesthetic procedures.</PullQuote>
    </>
  );
}

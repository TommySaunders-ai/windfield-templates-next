import { SectionDivider } from "@/components/content/section-divider";
import { PullQuote } from "@/components/content/pull-quote";
import { ChannelCols } from "@/components/content/channel-cols";

export function MedicalUseCaseContent() {
  return (
    <>
      <SectionDivider label="Why This Property Fits Medical Users" />
      <div className="prose">
        <ul>
          <li><strong>B3-3 Zoning</strong> — permits medical, dental, chiropractic, optometry, PT, urgent care, med spa, and all professional medical services</li>
          <li><strong>Class-A Build-Out (2020)</strong> — modern HVAC, electrical, plumbing infrastructure suitable for medical buildout</li>
          <li><strong>10,500 SF</strong> — divisible for multi-tenant medical (3-4 practices) or single large medical group</li>
          <li><strong>Single-Story</strong> — ADA compliant, no elevator needed, easy patient access</li>
          <li><strong>High Visibility</strong> — M-152/Green Hills Rd intersection drives patient traffic</li>
          <li><strong>Parking Ratio</strong> — 4.0/1,000 SF supports high-volume medical patient flow</li>
          <li><strong>Adjacent Medical Cluster</strong> — Northland Eye Specialists already at 8660 N Green Hills, Magnolia Family Chiropractic at 8560 N Green Hills</li>
          <li><strong>Demographics</strong> — KC Northland population supports medical demand; avg HHI $107K at 2mi radius</li>
        </ul>
      </div>

      <PullQuote>
        B3-3 zoning permits every medical use — no zoning variance needed. From urgent care to med spa to dental to pharmacy, this building is pre-approved for the full spectrum of healthcare.
      </PullQuote>

      <SectionDivider label="Medical Infrastructure Advantages" />
      <ChannelCols
        columns={[
          {
            header: "HVAC / Electrical",
            items: [
              "Modern 2020 systems",
              "Medical equipment capacity",
              "Procedure room ready",
            ],
          },
          {
            header: "Plumbing",
            items: [
              "Dental operatory capable",
              "Lab/sterilization support",
              "Multiple wet walls",
            ],
          },
          {
            header: "Access / ADA",
            items: [
              "Single-story, no elevator",
              "Wide corridors",
              "Wheelchair/walker friendly",
            ],
          },
          {
            header: "Parking",
            items: [
              "4.0/1,000 SF ratio",
              "Exceeds medical minimum",
              "Private surface lot",
            ],
          },
        ]}
      />
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function TenantMixContent() {
  return (
    <>
      <SectionDivider label="Ideal Medical Tenant Mix" />
      <div className="prose">
        <p>
          The 10,500 SF floorplate supports both single-tenant owner-occupancy and a multi-tenant medical campus strategy. The multi-tenant approach maximizes rent yield while creating a self-reinforcing medical cluster that drives patient traffic to all tenants.
        </p>
      </div>

      <SectionDivider label="Multi-Tenant Configuration" />
      <SpecTable
        headers={["Suite", "Size", "Ideal Use", "Rent Capacity"]}
        rows={[
          ["Suite A", "3,500 SF", "Primary Care / Urgent Care / Orthopedic", "$22-28 PSF NNN"],
          ["Suite B", "2,500 SF", "Dental / Orthodontic Practice", "$20-26 PSF NNN"],
          ["Suite C", "2,500 SF", "Chiropractic / Physical Therapy", "$18-24 PSF NNN"],
          ["Suite D", "2,000 SF", "Med Spa / Optometry / Specialty", "$20-26 PSF NNN"],
        ]}
      />

      <PullQuote>
        Multi-tenant medical strategy creates synergy — patients visiting one practice discover adjacent services. The medical cluster effect is proven on Green Hills Rd with Northland Eye and Magnolia Chiropractic already drawing healthcare traffic.
      </PullQuote>

      <SectionDivider label="Single-Tenant Scenarios" />
      <SpecTable
        headers={["Scenario", "Tenant Type", "Size", "Expected Rent"]}
        rows={[
          ["Owner-Occupant", "Multi-physician medical group", "10,500 SF", "Purchase at market"],
          ["NNN Lease", "Urgent care chain (NextCare, Total Access, CareNow)", "10,500 SF", "$22-28 PSF NNN"],
          ["NNN Lease", "Dental/ortho group (Heartland, Aspen)", "10,500 SF", "$20-26 PSF NNN"],
        ]}
      />

      <SectionDivider label="Tenant Compatibility Matrix" />
      <div className="prose">
        <p><strong>High Synergy Combinations:</strong></p>
        <ul>
          <li>Urgent Care + Pharmacy + Lab — built-in Rx and diagnostic referrals</li>
          <li>Dental + Orthodontic + Pediatric — family-oriented, shared patient base</li>
          <li>Chiropractic + PT + Sports Medicine — rehabilitation continuum</li>
          <li>Med Spa + Dermatology + Plastic Surgery — aesthetic medicine cluster</li>
        </ul>
      </div>
    </>
  );
}

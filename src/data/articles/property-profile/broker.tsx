import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function BrokerOwnershipContent() {
  return (
    <>
      <SectionDivider label="Broker Information" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Listing Broker", "Andrew Danner"],
          ["Company", "Windfield Real Estate"],
          ["Phone", "(816) 612-5191"],
          ["Affiliation", "CORFAC International"],
        ]}
      />

      <SectionDivider label="About Windfield Real Estate" />
      <div className="prose">
        <p>
          Windfield Real Estate is a Kansas City-based commercial real estate firm specializing in office, medical, and investment properties across the KC metro area. As a member of CORFAC International, Windfield provides clients with local market expertise backed by a global network of independent commercial real estate firms.
        </p>
        <p>
          Andrew Danner leads the listing for 8630 N Green Hills Road, bringing deep knowledge of the KC Northland submarket and medical tenant requirements to every conversation.
        </p>
      </div>

      <SectionDivider label="Contact" />
      <div className="prose">
        <p>
          For property information, tour scheduling, or co-broke inquiries:
        </p>
        <ul>
          <li><strong>Phone:</strong> (816) 612-5191</li>
          <li><strong>Broker:</strong> Andrew Danner</li>
          <li><strong>Company:</strong> Windfield Real Estate</li>
        </ul>
      </div>
    </>
  );
}

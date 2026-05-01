import { SectionDivider } from "@/components/content/section-divider";
export function LinkedInPostsContent() {
  return (<>
    <SectionDivider label="Post 1: Property Announcement" />
    <div className="prose">
      <p>New on the market: 8630 N Green Hills Road in KC Northland.</p>
      <p>10,500 SF. Class-A. Built 2020. Single-story. B3-3 medical zoning.</p>
      <p>This building sits at the M-152/Green Hills Road interchange — the most visible intersection in the Tiffany Hills/Coves North corridor. It&apos;s adjacent to Northland Eye Specialists and Magnolia Family Chiropractic, establishing Green Hills as a medical destination.</p>
    </div>

    <SectionDivider label="Post 2: Medical Use Case" />
    <div className="prose">
      <p>Most medical practices lease space from a landlord and never build equity in their real estate.</p>
      <p>At 8630 N Green Hills Road, a physician group can own a 2020 Class-A building — single-story, ADA-compliant, 4.0/1,000 parking — in one of KC Northland&apos;s strongest demographic corridors ($107K avg HHI).</p>
      <p>B3-3 zoning means: primary care, dental, chiropractic, PT, urgent care, med spa, labs, pharmacy — all permitted.</p>
    </div>

    <SectionDivider label="Post 3: Investor Angle" />
    <div className="prose">
      <p>Medical office is the most resilient CRE asset class.</p>
      <p>8630 N Green Hills Road — 10,500 SF, 2020 Class-A, single-story — is available for sale in KC Northland. B3-3 zoning, $107K avg HHI trade area, no competing construction in pipeline.</p>
      <p>Multi-tenant medical strategy (3-4 suites at $20-28 PSF NNN) produces strong yield on a 2020-vintage asset.</p>
    </div>

    <SectionDivider label="Post 4: Med Spa Demand Gap" />
    <div className="prose">
      <p>KC Northland has zero dedicated med spas in the Tiffany Hills/Coves North corridor.</p>
      <p>The demographics are there: $107K avg household income. The traffic is there: M-152/I-29 interchange. The infrastructure is there: 2020 Class-A build.</p>
      <p>8630 N Green Hills Road — 10,500 SF available for sale — is the ideal location for the first premium med spa in KC Northland.</p>
    </div>
  </>);
}

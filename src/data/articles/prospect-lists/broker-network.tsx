import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function BrokerNetworkListContent() {
  return (
    <>
      <SectionDivider label="Medical RE Broker Network" />
      <div className="prose">
        <p><strong>Target Count:</strong> 20-30 targets</p>
        <p>Commercial real estate brokers in KC metro who specialize in or actively represent medical tenants and healthcare buyers.</p>
      </div>
      <SectionDivider label="Known Broker Contacts (CRM)" />
      <SpecTable headers={["Company", "Contact", "Phone", "Email"]} rows={[
        ["Windfield Real Estate", "Marcus Webb", "(816) 612-5191", "mwebb@windfieldre.com"],
        ["Colliers", "RC Jensen", "(816) 556-1128", "rc.jensen@colliers.com"],
        ["Colliers", "Elliot Stauffer", "(573) 777-0417", "elliott.stauffer@colliers.com"],
        ["Colliers", "Alli Ramsey", "(816) 556-1138", "alli.ramsey@colliers.com"],
        ["CBRE KC", "Sean Randall-Thompson", "(804) 347-0265", "sean.randallthompson@cbre.com"],
        ["CBRE KC", "Doug McFadden", "(816) 968-5829", "doug.mcfadden@cbre.com"],
        ["CBRE KC", "Ted Claney", "(214) 252-1135", "ted.claney@cbre.com"],
        ["CBRE", "Jody House", "(913) 205-0802", "jody.house@cbre.com"],
        ["Cushman & Wakefield", "Whitt Potts", "(816) 221-2200", "whitt.potts@cushwake.com"],
        ["Cushman & Wakefield", "Dexter Deeds", "(785) 821-0087", "dexter.deeds@cushwake.com"],
        ["Cushman & Wakefield", "Bailey Cooke", "(816) 221-2200", "bailey.cooke@cushwake.com"],
        ["Cushman & Wakefield", "Alec Blackwell, SIOR", "(816) 412-0242", "alec.blackwell@cushwake.com"],
        ["Newmark Zimmer", "John Hoefer", "(816) 268-4248", "jhoefer@nzimmer.com"],
        ["Lane 4 CRE", "Chase Glaeser", "(816) 268-9110", "cglaeser@lane4group.com"],
        ["KW Commercial", "Michael Fabian", "(816) 820-8934", "michaelfabian@kw.com"],
      ]} />
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { PullQuote } from "@/components/content/pull-quote";
export function TenantAppealContent() {
  return (<>
    <SectionDivider label="Tenant Appeal Statement" />
    <div className="prose">
      <p>This property is purpose-built for medical professionals who want to own their practice location rather than paying rent to a landlord. The 2020 Class-A construction eliminates the deferred maintenance and renovation cost associated with older medical office space. Single-story design means zero elevator cost and full ADA compliance from day one. The 4.0/1,000 SF parking ratio supports high-volume patient flow without the parking friction common in medical strip centers. And the M-152/Green Hills Road location puts your practice on the most visible corridor in KC Northland — where Northland Eye Specialists and Magnolia Chiropractic are already drawing healthcare patients.</p>
    </div>
    <PullQuote>Own your practice location instead of paying rent. Build equity in your real estate while providing patients with a modern, Class-A medical facility.</PullQuote>
  </>);
}

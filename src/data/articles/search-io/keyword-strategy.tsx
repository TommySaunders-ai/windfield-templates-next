import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function KeywordStrategyContent() {
  return (<>
    <SectionDivider label="Branded Keywords (8)" />
    <SpecTable headers={["Keyword", "Volume", "Priority"]} rows={[
      ["Windfield Real Estate", "50-100/mo", "High"],
      ["8630 N Green Hills Road", "10-20/mo", "Highest"],
      ["Green Hills Road office building", "10-20/mo", "Highest"],
      ["Andrew Danner real estate", "10-20/mo", "Medium"],
    ]} />
    <SectionDivider label="Industry Keywords (10)" />
    <SpecTable headers={["Keyword", "Volume", "Difficulty", "Priority"]} rows={[
      ["medical office space Kansas City", "100-200/mo", "Medium", "Highest"],
      ["medical office for sale Kansas City", "50-100/mo", "Medium", "Highest"],
      ["commercial office building for sale KC", "100-200/mo", "High", "High"],
      ["office space for sale Kansas City MO", "200-500/mo", "High", "High"],
      ["medical office lease Kansas City", "50-100/mo", "Medium", "High"],
      ["Class A office building Kansas City", "20-50/mo", "Low", "High"],
      ["KC Northland commercial real estate", "50-100/mo", "Low", "High"],
      ["Platte County office space", "20-50/mo", "Low", "High"],
    ]} />
    <SectionDivider label="Content Pillars" />
    <SpecTable headers={["Pillar", "Focus", "Target Pages"]} rows={[
      ["Medical Office RE KC", "Finding, leasing, buying medical office space", "Property listing, market report, blog"],
      ["KC Northland Market", "Submarket data, demographics, growth trends", "Market intelligence, data reports"],
      ["Medical Practice Ownership", "Financial case for owning vs leasing", "Calculator tool, educational content"],
      ["8630 Green Hills Property", "Specific property information", "Property detail page, virtual tour"],
      ["Medical Tenant Types", "Content per medical category", "Targeting landing pages"],
    ]} />
  </>);
}

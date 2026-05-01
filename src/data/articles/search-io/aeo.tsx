import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function AEOContent() {
  return (<>
    <SectionDivider label="AEO — 8 Featured Snippet Targets" />
    <SpecTable headers={["Question", "Answer Format", "Schema"]} rows={[
      ["How much does medical office space cost in KC?", "Paragraph + Table", "FAQPage + HowTo"],
      ["What is B3-3 zoning in Kansas City?", "Definition + List", "FAQPage"],
      ["What is the best area for a medical practice in KC?", "List + Paragraph", "FAQPage + Article"],
      ["How much does it cost to build out a medical office?", "Paragraph + Table", "FAQPage + HowTo"],
      ["What is the parking ratio for medical offices?", "Direct answer", "FAQPage"],
      ["Can I use an SBA 504 loan to buy a medical office?", "Yes/No + Explanation", "FAQPage"],
      ["What is a medical office REIT?", "Definition + Examples", "FAQPage + Article"],
      ["How do I find medical office tenants?", "Step-by-step", "HowTo"],
    ]} />
    <div className="prose"><p>All 8 questions require structured content with direct answers optimized for Google Featured Snippet (position 0) capture. Status: TO BUILD.</p></div>
  </>);
}

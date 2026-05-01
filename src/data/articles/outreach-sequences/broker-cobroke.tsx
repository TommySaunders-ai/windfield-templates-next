import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";
export function BrokerCobrokeSequenceContent() {
  return (<>
    <SectionDivider label="Medical Broker Co-Broke — 3-Touch / 10 Days" />
    <SpecTable headers={["Touch", "Channel", "Day", "Subject/Approach"]} rows={[
      ["1", "Email", "Day 0", "Co-Broke — Class-A Medical Office, Green Hills Rd"],
      ["2", "LinkedIn", "Day 5", "10,500 SF medical office co-broke opportunity"],
      ["3", "Email", "Day 10", "RE: Green Hills — medical campus, all categories fit zoning"],
    ]} />
    <PullQuote>Full co-broke commission offered. Do you have any medical clients seeking space in KC Northland? The property is adjacent to Northland Eye Specialists and has infrastructure for medical buildout.</PullQuote>
  </>);
}

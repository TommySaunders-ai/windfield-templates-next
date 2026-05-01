import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { FlowChart } from "@/components/content/flow-chart";

export function ApifyGoogleMapsContent() {
  return (
    <>
      <SectionDivider label="17 Apify Scrape Configurations" />
      <SpecTable headers={["Scrape", "Category", "Est. Cost", "Est. Results"]} rows={[
        ["01", "Chiropractic", "~0.07 CU", "30-50"],
        ["02", "Optometry", "~0.07 CU", "20-40"],
        ["03", "Med Spa (HIGHEST PRIORITY)", "~0.10 CU", "25-60"],
        ["04", "Physical Therapy", "~0.07 CU", "30-50"],
        ["05", "Urgent Care (HIGHEST)", "~0.07 CU", "15-30"],
        ["06", "Dental", "~0.07 CU", "40-70"],
        ["07", "Behavioral Health (ZERO current)", "~0.07 CU", "20-40"],
        ["08", "Specialty Medical (ZERO current)", "~0.10 CU", "30-50"],
        ["09", "Labs/Imaging/Pharmacy", "~0.07 CU", "15-30"],
        ["10", "Staffing/Home Health", "~0.05 CU", "15-25"],
        ["11", "Veterinary", "~0.05 CU", "15-25"],
        ["12", "Comprehensive Catch-All", "~0.15 CU", "50-100"],
        ["13", "LinkedIn Medical Owners", "~0.40 CU", "50-100"],
        ["14", "LinkedIn Med Spa", "~0.30 CU", "30-60"],
        ["15", "LinkedIn Urgent Care/Franchise", "~0.30 CU", "30-50"],
        ["16", "LinkedIn Healthcare RE", "~0.30 CU", "30-50"],
        ["17", "Website Content Crawl", "~0.50 CU", "N/A"],
      ]} />
      <SectionDivider label="Total Cost" />
      <div className="prose">
        <p><strong>Total estimated Apify cost: ~$5.50 USD</strong> for 445-780 prospects across all medical categories.</p>
      </div>
      <SectionDivider label="Execution Order" />
      <FlowChart nodes={[
        "Run Scrapes 3, 5, 7, 8 FIRST (zero-prospect categories)",
        "Run Scrapes 1, 2, 4, 6 (expand existing)",
        "Run Scrapes 9, 10, 11 (remaining categories)",
        "Run Scrape 12 (catch-all)",
        "Run Scrapes 13-16 (LinkedIn decision-makers)",
        "Run Scrape 17 (website crawl top 20)",
        "Deduplicate all results",
        "Pass domains to Clay for enrichment",
      ]} />
    </>
  );
}

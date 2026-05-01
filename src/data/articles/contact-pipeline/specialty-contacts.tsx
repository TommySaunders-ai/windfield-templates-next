import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function SpecialtyContactsContent() {
  return (<>
    <SectionDivider label="Specialty & Other Medical Contacts" />
    <div className="prose">
      <p><strong>Orthopedic:</strong> John Eggers at Orthopedic Health of KC — existing CRM contact, (402) 301-3324, johnpeggers@gmail.com</p>
      <p><strong>Behavioral Health:</strong> ZERO prospects — run Clay Config 7 + Google Maps Scrape 7</p>
      <p><strong>Specialty Medical (Derm/ENT/Allergy):</strong> ZERO prospects — run Clay Config 9 + Google Maps Scrape 8</p>
      <p><strong>Medical Lab/Imaging:</strong> ZERO prospects — run Google Maps Scrape 9</p>
      <p><strong>Pharmacy/Compounding:</strong> ZERO prospects — run Google Maps Scrape 9</p>
    </div>
    <SectionDivider label="Priority Actions" />
    <div className="prose">
      <ol>
        <li><strong>Med Spa scrape</strong> — ZERO prospects. Highest priority gap.</li>
        <li><strong>Behavioral Health scrape</strong> — ZERO prospects.</li>
        <li><strong>Dental expansion</strong> — Only 2 scraped, no contacts.</li>
        <li><strong>Specialty Medical</strong> — ZERO prospects.</li>
        <li><strong>Enrich existing 20 scraped</strong> — Get owner names, emails, LinkedIn.</li>
      </ol>
    </div>
  </>);
}

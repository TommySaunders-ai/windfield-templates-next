import type { ComponentType } from "react";

/* Article content registry */
const registry: Record<string, Record<string, ComponentType>> = {};

/* Register content modules eagerly so static export works */
function register(seriesSlug: string, articleSlug: string, mod: ComponentType) {
  if (!registry[seriesSlug]) registry[seriesSlug] = {};
  registry[seriesSlug][articleSlug] = mod;
}

/* ── Series 01: Property Profile ── */
import { PropertyIdentityContent } from "./property-profile/identity";
import { BuildingCharacteristicsContent } from "./property-profile/building";
import { PricingFinancialsContent } from "./property-profile/pricing";
import { MedicalUseCaseContent } from "./property-profile/medical-use-case";
import { TenantMixContent } from "./property-profile/tenant-mix";
import { ScoringIntelligenceContent } from "./property-profile/scoring";
import { BrokerOwnershipContent } from "./property-profile/broker";

register("property-profile", "identity", PropertyIdentityContent);
register("property-profile", "building", BuildingCharacteristicsContent);
register("property-profile", "pricing", PricingFinancialsContent);
register("property-profile", "medical-use-case", MedicalUseCaseContent);
register("property-profile", "tenant-mix", TenantMixContent);
register("property-profile", "scoring", ScoringIntelligenceContent);
register("property-profile", "broker", BrokerOwnershipContent);

/* ── Series 02: Market Intelligence ── */
import { DemographicsContent } from "./market-intelligence/demographics";
import { TrafficAccessContent } from "./market-intelligence/traffic";
import { MedicalClusterContent } from "./market-intelligence/medical-cluster";
import { DemandGapsContent } from "./market-intelligence/demand-gaps";
import { CompetitiveLandscapeContent } from "./market-intelligence/competitive-landscape";
import { AcquisitionBriefsContent } from "./market-intelligence/acquisition-briefs";

register("market-intelligence", "demographics", DemographicsContent);
register("market-intelligence", "traffic", TrafficAccessContent);
register("market-intelligence", "medical-cluster", MedicalClusterContent);
register("market-intelligence", "demand-gaps", DemandGapsContent);
register("market-intelligence", "competitive-landscape", CompetitiveLandscapeContent);
register("market-intelligence", "acquisition-briefs", AcquisitionBriefsContent);

/* ── Series 03: Target Tenant Profiles ── */
import { UrgentCareProfileContent } from "./target-profiles/urgent-care";
import { MedSpaProfileContent } from "./target-profiles/med-spa";
import { ChiropracticProfileContent } from "./target-profiles/chiropractic";
import { OptometryProfileContent } from "./target-profiles/optometry";
import { PhysicalTherapyProfileContent } from "./target-profiles/physical-therapy";
import { DentalProfileContent } from "./target-profiles/dental";
import { BehavioralHealthProfileContent } from "./target-profiles/behavioral-health";
import { MedicalStaffingProfileContent } from "./target-profiles/medical-staffing";
import { SpecialtyMedicalProfileContent } from "./target-profiles/specialty-medical";
import { LabsImagingProfileContent } from "./target-profiles/labs-imaging";
import { PharmacyProfileContent } from "./target-profiles/pharmacy";

register("target-profiles", "urgent-care", UrgentCareProfileContent);
register("target-profiles", "med-spa", MedSpaProfileContent);
register("target-profiles", "chiropractic", ChiropracticProfileContent);
register("target-profiles", "optometry", OptometryProfileContent);
register("target-profiles", "physical-therapy", PhysicalTherapyProfileContent);
register("target-profiles", "dental", DentalProfileContent);
register("target-profiles", "behavioral-health", BehavioralHealthProfileContent);
register("target-profiles", "medical-staffing", MedicalStaffingProfileContent);
register("target-profiles", "specialty-medical", SpecialtyMedicalProfileContent);
register("target-profiles", "labs-imaging", LabsImagingProfileContent);
register("target-profiles", "pharmacy", PharmacyProfileContent);

/* ── Series 04: Prospect Targeting Lists ── */
import { MedicalPracticesListContent } from "./prospect-lists/medical-practices";
import { LocalBusinessesListContent } from "./prospect-lists/local-businesses";
import { FranchiseOperatorsListContent } from "./prospect-lists/franchise-operators";
import { OwnerOccupantListContent } from "./prospect-lists/owner-occupant";
import { HealthcareInvestorsListContent } from "./prospect-lists/healthcare-investors";
import { BrokerNetworkListContent } from "./prospect-lists/broker-network";
import { AdjacentServicesListContent } from "./prospect-lists/adjacent-services";

register("prospect-lists", "medical-practices", MedicalPracticesListContent);
register("prospect-lists", "local-businesses", LocalBusinessesListContent);
register("prospect-lists", "franchise-operators", FranchiseOperatorsListContent);
register("prospect-lists", "owner-occupant", OwnerOccupantListContent);
register("prospect-lists", "healthcare-investors", HealthcareInvestorsListContent);
register("prospect-lists", "broker-network", BrokerNetworkListContent);
register("prospect-lists", "adjacent-services", AdjacentServicesListContent);

/* ── Series 05: Scrape & Enrichment Configs ── */
import { ClayConfigsContent } from "./scrape-configs/clay-configs";
import { ApifyGoogleMapsContent } from "./scrape-configs/apify-google-maps";
import { ApifyLinkedInContent } from "./scrape-configs/apify-linkedin";
import { ClayEnrichmentContent } from "./scrape-configs/clay-enrichment";
import { ScoringMatrixContent } from "./scrape-configs/scoring-matrix";
import { ExecutionOrderContent } from "./scrape-configs/execution-order";

register("scrape-configs", "clay-configs", ClayConfigsContent);
register("scrape-configs", "apify-google-maps", ApifyGoogleMapsContent);
register("scrape-configs", "apify-linkedin", ApifyLinkedInContent);
register("scrape-configs", "clay-enrichment", ClayEnrichmentContent);
register("scrape-configs", "scoring-matrix", ScoringMatrixContent);
register("scrape-configs", "execution-order", ExecutionOrderContent);

/* ── Series 06: LinkedIn Campaigns ── */
import { LinkedInAudiencesContent } from "./linkedin-campaigns/audiences";
import { AwarenessCampaignContent } from "./linkedin-campaigns/awareness";
import { ProblemAwareCampaignContent } from "./linkedin-campaigns/problem-aware";
import { SolutionAwareCampaignContent } from "./linkedin-campaigns/solution-aware";
import { ProductAwareCampaignContent } from "./linkedin-campaigns/product-aware";
import { ConversionCampaignContent } from "./linkedin-campaigns/conversion";
import { NurturingCampaignContent } from "./linkedin-campaigns/nurturing";
import { LoyaltyCampaignContent } from "./linkedin-campaigns/loyalty";
import { LeadMagnetsContent } from "./linkedin-campaigns/lead-magnets";
import { PerformanceDashboardContent } from "./linkedin-campaigns/performance-dashboard";

register("linkedin-campaigns", "audiences", LinkedInAudiencesContent);
register("linkedin-campaigns", "awareness", AwarenessCampaignContent);
register("linkedin-campaigns", "problem-aware", ProblemAwareCampaignContent);
register("linkedin-campaigns", "solution-aware", SolutionAwareCampaignContent);
register("linkedin-campaigns", "product-aware", ProductAwareCampaignContent);
register("linkedin-campaigns", "conversion", ConversionCampaignContent);
register("linkedin-campaigns", "nurturing", NurturingCampaignContent);
register("linkedin-campaigns", "loyalty", LoyaltyCampaignContent);
register("linkedin-campaigns", "lead-magnets", LeadMagnetsContent);
register("linkedin-campaigns", "performance-dashboard", PerformanceDashboardContent);

/* ── Series 07: Outreach Sequences ── */
import { MedicalOwnerSequenceContent } from "./outreach-sequences/medical-owner";
import { FranchiseDevSequenceContent } from "./outreach-sequences/franchise-dev";
import { HealthcareInvestorSequenceContent } from "./outreach-sequences/healthcare-investor";
import { BrokerCobrokeSequenceContent } from "./outreach-sequences/broker-cobroke";

register("outreach-sequences", "medical-owner", MedicalOwnerSequenceContent);
register("outreach-sequences", "franchise-dev", FranchiseDevSequenceContent);
register("outreach-sequences", "healthcare-investor", HealthcareInvestorSequenceContent);
register("outreach-sequences", "broker-cobroke", BrokerCobrokeSequenceContent);

/* ── Series 08: Marketing Content ── */
import { HeadlinesContent } from "./marketing-content/headlines";
import { ExecutiveSummaryContent } from "./marketing-content/executive-summary";
import { InvestmentThesisContent } from "./marketing-content/investment-thesis";
import { TenantAppealContent } from "./marketing-content/tenant-appeal";
import { LocationNarrativeContent } from "./marketing-content/location-narrative";
import { SeoDescriptionContent } from "./marketing-content/seo-description";
import { EmailMarketingContent } from "./marketing-content/email-marketing";
import { LinkedInPostsContent } from "./marketing-content/linkedin-posts";

register("marketing-content", "headlines", HeadlinesContent);
register("marketing-content", "executive-summary", ExecutiveSummaryContent);
register("marketing-content", "investment-thesis", InvestmentThesisContent);
register("marketing-content", "tenant-appeal", TenantAppealContent);
register("marketing-content", "location-narrative", LocationNarrativeContent);
register("marketing-content", "seo-description", SeoDescriptionContent);
register("marketing-content", "email-marketing", EmailMarketingContent);
register("marketing-content", "linkedin-posts", LinkedInPostsContent);

/* ── Series 09: Contact Pipeline ── */
import { TierAContent } from "./contact-pipeline/tier-a";
import { MedSpaContactsContent } from "./contact-pipeline/med-spa-contacts";
import { UrgentCareContactsContent } from "./contact-pipeline/urgent-care-contacts";
import { ChiropracticContactsContent } from "./contact-pipeline/chiropractic-contacts";
import { PTContactsContent } from "./contact-pipeline/pt-contacts";
import { DentalContactsContent } from "./contact-pipeline/dental-contacts";
import { OptometryContactsContent } from "./contact-pipeline/optometry-contacts";
import { SpecialtyContactsContent } from "./contact-pipeline/specialty-contacts";

register("contact-pipeline", "tier-a", TierAContent);
register("contact-pipeline", "med-spa-contacts", MedSpaContactsContent);
register("contact-pipeline", "urgent-care-contacts", UrgentCareContactsContent);
register("contact-pipeline", "chiropractic-contacts", ChiropracticContactsContent);
register("contact-pipeline", "pt-contacts", PTContactsContent);
register("contact-pipeline", "dental-contacts", DentalContactsContent);
register("contact-pipeline", "optometry-contacts", OptometryContactsContent);
register("contact-pipeline", "specialty-contacts", SpecialtyContactsContent);

/* ── Series 10: Search IO ── */
import { KeywordStrategyContent } from "./search-io/keyword-strategy";
import { SEOContent } from "./search-io/seo";
import { SEMContent } from "./search-io/sem";
import { AEOContent } from "./search-io/aeo";
import { GEOContent } from "./search-io/geo";
import { UserIntentContent } from "./search-io/user-intent";

register("search-io", "keyword-strategy", KeywordStrategyContent);
register("search-io", "seo", SEOContent);
register("search-io", "sem", SEMContent);
register("search-io", "aeo", AEOContent);
register("search-io", "geo", GEOContent);
register("search-io", "user-intent", UserIntentContent);

/* ── Series 11: Media & Documents ── */
import { PhotosContent } from "./media-docs/photos";
import { BuildoutImagesContent } from "./media-docs/buildout-images";
import { PdfsContent } from "./media-docs/pdfs";
import { DataFilesContent } from "./media-docs/data-files";

register("media-docs", "photos", PhotosContent);
register("media-docs", "buildout-images", BuildoutImagesContent);
register("media-docs", "pdfs", PdfsContent);
register("media-docs", "data-files", DataFilesContent);

/* ── Series 12: Execution Prompts ── */
import { ApifyPromptsContent } from "./execution-prompts/apify-prompts";
import { ClayPromptsContent } from "./execution-prompts/clay-prompts";
import { SearchPromptsContent } from "./execution-prompts/search-prompts";
import { ProspectingPromptsContent } from "./execution-prompts/prospecting-prompts";

register("execution-prompts", "apify-prompts", ApifyPromptsContent);
register("execution-prompts", "clay-prompts", ClayPromptsContent);
register("execution-prompts", "search-prompts", SearchPromptsContent);
register("execution-prompts", "prospecting-prompts", ProspectingPromptsContent);

export function getArticleContent(
  seriesSlug: string,
  articleSlug: string
): ComponentType | null {
  return registry[seriesSlug]?.[articleSlug] ?? null;
}

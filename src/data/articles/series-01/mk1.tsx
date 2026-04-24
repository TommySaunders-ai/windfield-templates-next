import { SectionDivider } from "@/components/content/section-divider";
import { PullQuote } from "@/components/content/pull-quote";
import { ChannelCols } from "@/components/content/channel-cols";

export function MK1Content() {
  return (
    <>
      <SectionDivider label="The Eight Pillars" />

      <div className="prose">
        <p>
          An operating system needs persistent memory. The amber Knowledge Base
          is this memory — the root of the tree. Nothing valid can flow downward
          without first passing through the constraints this card defines. It
          answers eight structural questions about the business so every
          downstream process can make correct decisions without constant
          clarification.
        </p>
      </div>

      <ChannelCols
        columns={[
          {
            header: "Company",
            items: [
              "Legal name & founding story",
              "Team structure & core values",
              "Mission statement",
            ],
          },
          {
            header: "Branding",
            items: [
              "Voice & tone guidelines",
              "Visual identity system",
              "Brand story & taglines",
            ],
          },
          {
            header: "Services & Offerings",
            items: [
              "Service catalog",
              "Pricing tiers & delivery model",
              "Guarantees",
            ],
          },
          {
            header: "Ideal Customer Profile",
            items: [
              "Demographics & psychographics",
              "Pain points & jobs to be done",
            ],
          },
          {
            header: "Business Strategy",
            items: ["Growth model & positioning", "Moat / differentiation"],
          },
          {
            header: "Product Offerings",
            items: ["Roadmap, features, use cases", "Integrations"],
          },
          {
            header: "Goals & KPIs",
            items: [
              "Revenue & acquisition targets",
              "CAC / LTV \u00B7 OKR cycle",
            ],
          },
          {
            header: "Customer Lifecycle",
            items: [
              "Stage 00 Unaware \u2192 Stage 06 Advocacy",
              "Retention model & churn triggers",
            ],
          },
        ]}
      />

      <PullQuote>
        The Knowledge Base is not written for the marketing team. It is written
        for the system itself — so every process downstream can operate
        intelligently without human supervision on each decision.
      </PullQuote>
    </>
  );
}

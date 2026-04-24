import { SectionDivider } from "@/components/content/section-divider";
import { ChannelCols } from "@/components/content/channel-cols";
import { PullQuote } from "@/components/content/pull-quote";

export function MK4Content() {
  return (
    <>
      <SectionDivider label="Four Briefing Modules" />

      <ChannelCols
        columns={[
          {
            header: "Actionable Insights",
            items: ["Campaign Reporting", "Insight Generation", "Briefs"],
          },
          {
            header: "User Search",
            items: [
              "Keywords",
              "User Search Questions",
              "User Prompts (AI interfaces)",
            ],
          },
          {
            header: "Creative",
            items: [
              "Pillar Topics",
              "Storytelling & Messaging",
              "UVP & USP",
              "Topic Generation",
            ],
          },
          {
            header: "Offers & CTAs",
            items: ["Offerings", "Promotions", "Calls to Action library"],
          },
        ]}
      />

      <PullQuote>
        The Context Briefs are the system&apos;s memory of what works, what the
        audience wants, and what the business is selling right now. They save
        every producer from starting from scratch.
      </PullQuote>
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { SystemCard } from "@/components/content/system-card";
import { SpecTable } from "@/components/content/spec-table";

export function MK9Content() {
  return (
    <>
      <SectionDivider label="Universal Schema \u00B7 Nine Platforms" />

      <div className="prose">
        <p>
          The deepest layer. Nine platform-specific paid campaign systems —
          each structured on the same universal schema.
        </p>
      </div>

      <SystemCard
        label="Paid Platform Summary"
        title="Platform Strengths & Journey Stages"
      >
        <SpecTable
          headers={["Platform", "Primary strength", "Journey stages served"]}
          rows={[
            [
              "Google Ads",
              "Intent capture (search)",
              "02\u201304 Consideration \u2192 Conversion",
            ],
            [
              "LinkedIn Ads",
              "B2B audience precision",
              "00\u201304 Full funnel, B2B",
            ],
            [
              "Facebook Ads",
              "Audience scale, retargeting",
              "00\u201305 Full funnel",
            ],
            [
              "YouTube Ads",
              "Video awareness, pre-roll",
              "00\u201302 Awareness \u2192 Consideration",
            ],
            [
              "TikTok Ads",
              "Entertainment-native reach",
              "00\u201301 Unaware \u2192 Awareness",
            ],
            [
              "Pinterest Ads",
              "Discovery, high purchase intent",
              "01\u201304 Awareness \u2192 Conversion",
            ],
            [
              "X (Twitter) Ads",
              "Real-time conversation, reach",
              "00\u201302 Unaware \u2192 Consideration",
            ],
            [
              "Microsoft Ads",
              "Search intent, Bing demographics",
              "02\u201304 Consideration \u2192 Conversion",
            ],
            [
              "Reddit Ads",
              "Niche community targeting",
              "01\u201303 Awareness \u2192 Decision",
            ],
          ]}
        />
      </SystemCard>
    </>
  );
}

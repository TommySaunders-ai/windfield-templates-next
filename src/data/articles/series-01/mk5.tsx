import { SectionDivider } from "@/components/content/section-divider";
import { ChannelCols } from "@/components/content/channel-cols";

export function MK5Content() {
  return (
    <>
      <SectionDivider label="Six Channel Categories" />

      <ChannelCols
        columns={[
          {
            header: "Marketplaces",
            items: [
              "Amazon \u00B7 Notion \u00B7 Etsy",
              "Whop \u00B7 Gumroad",
            ],
          },
          {
            header: "Paid Channels",
            items: [
              "Google \u00B7 Microsoft \u00B7 YouTube",
              "LinkedIn \u00B7 Facebook \u00B7 Instagram",
              "TikTok \u00B7 Pinterest \u00B7 Reddit \u00B7 X",
            ],
          },
          {
            header: "Organic Channels",
            items: [
              "YouTube \u00B7 LinkedIn \u00B7 X",
              "Facebook \u00B7 Instagram \u00B7 Reddit",
              "TikTok \u00B7 Pinterest \u00B7 Medium \u00B7 Wikipedia",
            ],
          },
          {
            header: "Website",
            items: [
              "Strategy \u00B7 Architecture \u00B7 UX",
              "Personalization",
              "Landing Pages & Lead Capture",
            ],
          },
          {
            header: "AI Search",
            items: [
              "Google Gemini \u00B7 Perplexity Comet",
              "ChatGPT Atlas",
              "MS Edge Copilot \u00B7 Apple",
            ],
          },
          {
            header: "AI Chats",
            items: [
              "ChatGPT \u00B7 Claude \u00B7 DeepSeek",
              "Gemini \u00B7 Perplexity \u00B7 Copilot",
              "Meta AI \u00B7 Grok",
            ],
          },
        ]}
      />
    </>
  );
}

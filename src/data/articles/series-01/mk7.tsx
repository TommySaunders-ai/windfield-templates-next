import { SectionDivider } from "@/components/content/section-divider";
import { ChannelCols } from "@/components/content/channel-cols";

export function MK7Content() {
  return (
    <>
      <SectionDivider label="Eight Execution Disciplines" />

      <ChannelCols
        columns={[
          {
            header: "Planning",
            items: [
              "Content calendar",
              "Campaign timelines",
              "Resource allocation",
            ],
          },
          {
            header: "Scheduling",
            items: ["Post scheduling", "Ad flight dates", "Publish queues"],
          },
          {
            header: "Posting",
            items: [
              "Native posting",
              "Cross-posting logic",
              "Format adaptation",
            ],
          },
          {
            header: "Engaging",
            items: [
              "Comment responses",
              "DM management",
              "Community building",
            ],
          },
          {
            header: "Every Day Actions",
            items: [
              "Daily content check",
              "Trend monitoring",
              "Quick-turn content",
            ],
          },
          {
            header: "Social Scaling",
            items: ["Amplification", "Repurposing", "Collaboration asks"],
          },
          {
            header: "Measurement",
            items: ["KPI tracking", "Attribution", "Weekly reporting"],
          },
          {
            header: "Task Execution",
            items: ["Production tasks", "Approvals workflow", "QA & review"],
          },
        ]}
      />
    </>
  );
}

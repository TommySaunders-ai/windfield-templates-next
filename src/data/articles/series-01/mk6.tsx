import { SectionDivider } from "@/components/content/section-divider";
import { TagList } from "@/components/content/tag-list";

export function MK6Content() {
  return (
    <>
      <SectionDivider label="27 Authorized Formats" />

      <div className="prose">
        <p>
          A purple container with twenty-seven cells — the complete vocabulary
          of deliverables the system is authorized to produce.
        </p>
      </div>

      <TagList
        tags={[
          "Knowledge Base",
          "Website Pages",
          "Documents",
          "Briefs",
          "Strategy",
          "Reports",
          "Story Cards",
          "Scripts",
          "Articles / Blogs",
          "Social Media",
          "Paid Media",
          "Podcast",
          "Images",
          "Videos",
          "Ads",
          "Courses",
          "E-Books / Lead Magnets",
          "White Papers",
          "Tweets",
          "Memes",
          "GIFs",
          "Emails & Newsletters",
          "ManyChat Automations",
          "Prompts / AI Communications",
        ]}
      />
    </>
  );
}

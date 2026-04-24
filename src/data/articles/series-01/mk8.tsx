import { SectionDivider } from "@/components/content/section-divider";
import { SystemCard } from "@/components/content/system-card";

export function MK8Content() {
  return (
    <>
      <SectionDivider label="Per-Platform Environments" />

      <div className="prose">
        <p>
          Per-platform production environments — dedicated workspaces for each
          organic channel where general strategy becomes platform-specific,
          algorithm-native content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SystemCard label="YouTube Organic" title="Long-form, Shorts, playlists">
          <p className="text-sm text-fg-muted">
            SEO-optimized. Series architecture. Thumbnail strategy.
          </p>
        </SystemCard>

        <SystemCard label="Facebook Organic" title="Page, Groups, Reels, Events">
          <p className="text-sm text-fg-muted">
            Community-building. Video boosted by algorithm.
          </p>
        </SystemCard>

        <SystemCard label="LinkedIn Organic" title="Thought leadership, articles">
          <p className="text-sm text-fg-muted">
            B2B-native. Personal brand &gt; company page.
          </p>
        </SystemCard>

        <SystemCard label="Pinterest Organic" title="Idea Pins, boards, collections">
          <p className="text-sm text-fg-muted">
            Discovery. Long evergreen lifespan.
          </p>
        </SystemCard>

        <SystemCard label="X (Twitter) Organic" title="Threads, tweets, Spaces">
          <p className="text-sm text-fg-muted">
            Real-time. High-frequency cadence.
          </p>
        </SystemCard>

        <SystemCard label="Instagram Organic" title="Reels, carousels, stories">
          <p className="text-sm text-fg-muted">
            Reels are the primary reach driver.
          </p>
        </SystemCard>
      </div>
    </>
  );
}

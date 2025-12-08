import UnicornScene from "unicornstudio-react";
import { memo, useEffect, useMemo, useState } from "react";

interface Breakpoint {
  name: string;
  props: Record<string, unknown>;
}

interface SceneNode {
  breakpoints?: Breakpoint[];
  [key: string]: unknown;
}

// Create a static hash for caching
const SPRING26_HASH = "a1b232c76723d2dy6";

const Spring26 = memo(({ className }: { className?: string }) => {
  // Use a static URL with hash for proper caching
  const jsonUrl = useMemo(() => `/spring26.json?v=${SPRING26_HASH}`, []);

  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    let currentBlobUrl: string | null = null;

    const addDesktopBreakpointIfMissing = (node: SceneNode) => {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node.breakpoints)) {
        const hasDesktop = node.breakpoints.some(
          (bp: Breakpoint) => bp && bp.name === "Desktop"
        );
        if (!hasDesktop) {
          node.breakpoints.unshift({ name: "Desktop", props: {} });
        }
      }
      for (const key of Object.keys(node)) {
        const value = node[key];
        if (value && typeof value === "object") {
          addDesktopBreakpointIfMissing(value as SceneNode);
        }
      }
    };

    const loadAndNormalize = async () => {
      try {
        const res = await fetch(jsonUrl, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load scene: ${res.status}`);
        const data = await res.json();
        addDesktopBreakpointIfMissing(data);
        const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
        currentBlobUrl = URL.createObjectURL(blob);
        if (active) setBlobUrl(currentBlobUrl);
      } catch (err) {
        console.warn("Failed to normalize scene JSON", err);
        if (active) setBlobUrl(jsonUrl);
      }
    };

    loadAndNormalize();

    return () => {
      active = false;
      if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
    };
  }, [jsonUrl]);

  if (!blobUrl) return null;

  return (
    <div className={`w-full h-full ${className || ""}`}>
      <UnicornScene
        jsonFilePath={blobUrl}
        width="100%"
        height="100%"
        scale={1}
        dpi={1}
        fps={60}
        lazyLoad={true}
      />
    </div>
  );
});

Spring26.displayName = "Spring26";

export default Spring26;
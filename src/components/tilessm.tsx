import UnicornScene from "unicornstudio-react";
import { UNICORN_SDK_URL } from "./unicorn-sdk";
import { memo, useEffect, useMemo, useState } from "react";

// Create a static hash for caching
const TILES_HASH = "a3w3e8";

interface Breakpoint {
  name: string;
  props: Record<string, unknown>;
}

interface SceneNode {
  breakpoints?: Breakpoint[];
  [key: string]: unknown;
}

const TilesSM = memo(({ className }: { className?: string }) => {
  // Use a static URL with hash for proper caching
  const jsonUrl = useMemo(() => `/tilessm.json?v=${TILES_HASH}`, []);

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
    <UnicornScene
      jsonFilePath={blobUrl}
      sdkUrl={UNICORN_SDK_URL}
      width={className ? "100%" : "100%"}
      height={className ? "100%" : "100%"}
      scale={1}
      dpi={1}
      fps={60}
      lazyLoad={true}
    />
  );
});

TilesSM.displayName = "TilesSM";

export default TilesSM;
// Single pinned unicornstudio.js runtime for every scene component.
// unicornstudio-react's default sdkUrl is v1.5.2, which predates effects
// used by newer scene exports (e.g. glyphDither) and drops them silently.
// All scenes must load the SAME version: the loader dedupes the script tag
// per URL, and window.UnicornStudio is whichever script loaded last — mixed
// versions break scenes on client-side route round trips.
export const UNICORN_SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.6/dist/unicornStudio.umd.js";

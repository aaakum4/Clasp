import type { ManifestV3Export } from "@crxjs/vite-plugin";

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: "Clasp",
  description: "A minimal, focused todo capture tool that lives in your browser.",
  version: "0.1.0",

  action: {
    default_popup: "index.html",
  },

  permissions: [],
};

export default manifest;
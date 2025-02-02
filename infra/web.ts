import { auth } from "./auth";
import { dns, domain } from "./dns";
import { zeroURL } from "./zero";

export const web = new sst.aws.StaticSite("Web", {
  path: "packages/web",
  dev: {
    command: "bun run dev",
    url: "http://localhost:5173",
  },
  domain: {
    name: domain,
    dns,
  },
  build: {
    command: "bun run build",
    output: "dist",
  },
  environment: {
    VITE_PUBLIC_AUTH_ISSUER: auth.url,
    VITE_PUBLIC_ZERO_URL: zeroURL,
    VITE_PUBLIC_DEV: String($dev),
  },
});

export const outputs = {
  WebURL: web.url,
};

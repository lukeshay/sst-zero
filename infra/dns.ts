import { ensureEnv } from "./util";

export const dns = process.env.ROUTE53_HOSTED_ZONE_ID
  ? sst.aws.dns({
      zone: process.env.ROUTE53_HOSTED_ZONE_ID,
    })
  : sst.cloudflare.dns({
      zone: ensureEnv("CLOUDFLARE_ZONE_ID"),
    });

export const domain = [$app.stage !== "prod" && $app.stage, ensureEnv("DOMAIN")]
  .filter(Boolean)
  .join(".");

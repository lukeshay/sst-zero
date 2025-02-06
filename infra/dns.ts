export const dns = sst.cloudflare.dns({
  zone: process.env.CLOUDFLARE_ZONE_ID!,
});

export const domain = [
  $app.stage !== "prod" && $app.stage,
  "sst-zero.lshay.xyz",
]
  .filter(Boolean)
  .join(".");

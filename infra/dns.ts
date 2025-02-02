export const dns = sst.cloudflare.dns({
  zone: "REPLACE_ME",
});

export const domain = [
  $app.stage !== "prod" && $app.stage,
  "sst-zero.lshay.xyz",
]
  .filter(Boolean)
  .join(".");

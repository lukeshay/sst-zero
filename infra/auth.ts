import { bus } from "./bus";
import { dns, domain } from "./dns";

export const auth = new sst.aws.Auth("Auth", {
  authorizer: {
    handler: "packages/functions/src/auth.handler",
    link: [bus],
    environment: {
      EMAIL_FROM: process.env.EMAIL_FROM!,
    },
    permissions: [
      {
        actions: ["ses:SendEmail"],
        resources: ["*"],
      },
    ],
  },
  domain: {
    name: $util.interpolate`auth.${domain}`,
    dns,
  },
});

export const outputs = {
  AuthURL: auth.url,
};

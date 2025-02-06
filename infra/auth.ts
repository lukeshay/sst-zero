import { bus } from "./bus";
import { dns, domain } from "./dns";
import { email } from "./email";

export const auth = new sst.aws.Auth("Auth", {
  authorizer: {
    handler: "packages/functions/src/auth.handler",
    link: [bus, email],
  },
  domain: {
    name: $util.interpolate`auth.${domain}`,
    dns,
  },
});

export const outputs = {
  AuthURL: auth.url,
};

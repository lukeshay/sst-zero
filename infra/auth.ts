import { bus } from "./bus";

export const auth = new sst.aws.Auth("Auth", {
  authorizer: {
    handler: "packages/functions/src/auth.handler",
    link: [bus],
    environment: {
      EMAIL_FROM: "shay.luke17@gmail.com",
    },
    permissions: [
      {
        actions: ["ses:SendEmail"],
        resources: ["*"],
      },
    ],
  },
});

export const outputs = {
  AuthURL: auth.url,
};

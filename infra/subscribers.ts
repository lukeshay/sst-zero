import { bus } from "./bus";
import { zeroDatabase } from "./db";
import { vpc } from "./vpc";

bus.subscribe(
  "AuthUserCreate",
  {
    handler:
      "packages/functions/src/subscribers/sst-zero.auth.user.create.handler",
    link: [zeroDatabase],
    vpc,
  },
  {
    pattern: {
      source: ["sst-zero.auth"],
      detailType: ["user.create", "user.signin"],
    },
  },
);

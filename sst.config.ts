/// <reference path="./.sst/platform/config.d.ts" />

import { readdirSync, statSync } from "node:fs";

export default $config({
  app(input) {
    return {
      name: "sst-zero",
      removal: input?.stage === "prod" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-west-2",
          version: "6.67.0",
        },
        command: {
          version: "1.0.1",
        },
      },
    };
  },
  async run() {
    $transform(sst.aws.Function, (args) => {
      args.runtime = "nodejs22.x";
      args.transform = {
        ...args.transform,
        function: {
          ...args.transform?.function,
          tracingConfig: {
            mode: "Active",
          },
        },
      };
    });

    const outputs = {};

    for (const value of readdirSync("./infra/")) {
      if (statSync(`./infra/${value}`).isDirectory()) continue;
      const result = await import(`./infra/${value}`);
      if (result.outputs) Object.assign(outputs, result.outputs);
    }

    return outputs;
  },
});

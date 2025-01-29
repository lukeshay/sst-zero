import { nonProd } from "./const";
import { vpc } from "./vpc";
import { dcp } from "./dcp";
import { resolve } from "node:path";
import { cwd } from "node:process";

export const zeroDatabase = new sst.aws.Postgres(
  "ZeroDatabase",
  {
    vpc,
    dev: {
      username: "postgres",
      password: "password",
      database: "local",
      port: 7004,
    },
    instance: nonProd ? "t4g.micro" : "m7g.xlarge",
    version: "17.2",
  },
  {
    dependsOn: dcp ? [dcp] : undefined,
  },
);

// const init = new command.local.Command("ZeroInit", {
//   create: "sst shell bun run ./scripts/init-db.bun.ts",
//   dir: cwd(),
//   environment: {
//     SST_RESOURCE_ZeroDatabase: $util.jsonStringify(zeroDatabase.getSSTLink()),
//   },
// });

new command.local.Command(
  "ZeroMigrate",
  {
    create: "bun run migrate",
    dir: resolve(cwd(), "packages/zero-db"),
    environment: {
      SST_RESOURCE_ZeroDatabase: $util.jsonStringify(zeroDatabase.getSSTLink()),
    },
    triggers: [new Date()],
  },
  // {
  //   dependsOn: [init],
  // },
);

// new sst.x.DevCommand("DrizzleStudio", {
//   dev: {
//     command: "bunx sst shell drizzle-kit studio",
//     directory: "packages/zero-db",
//     title: "Drizzle Studio",
//   },
//   link: [zeroDatabase],
// });

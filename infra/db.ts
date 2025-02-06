import { nonProd } from "./const";
import { dcp } from "./dcp";
import { vpc } from "./vpc";

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

const migrator = new sst.aws.Function("DatabaseMigrator", {
  handler: "packages/functions/src/migrator.handler",
  link: [zeroDatabase],
  vpc,
  copyFiles: [
    {
      from: "packages/zero-db/drizzle",
      to: "./drizzle",
    },
  ],
});

if (!$dev) {
  new aws.lambda.Invocation("DatabaseMigratorInvocation", {
    input: Date.now().toString(),
    functionName: migrator.name,
  });
}

new sst.x.DevCommand("DrizzleStudio", {
  dev: {
    autostart: false,
    command: "bun run studio",
    directory: "packages/zero-db",
    title: "Drizzle Studio",
  },
  link: [zeroDatabase],
});

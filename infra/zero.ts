import { cwd } from "node:process";
import { nonProd } from "./const";
import { zeroDatabase } from "./db";
import { vpc } from "./vpc";
import { auth } from "./auth";

const cluster = new sst.aws.Cluster("Cluster", { vpc });
const efs = $dev ? undefined : new sst.aws.Efs("ZeroEFS", { vpc });

const connectionString = $util.interpolate`postgresql://${zeroDatabase.username}:${zeroDatabase.password}@${zeroDatabase.host}:${zeroDatabase.port}/${zeroDatabase.database}`;

const service = cluster.addService("ZeroService", {
  link: [zeroDatabase],
  image: "registry.hub.docker.com/rocicorp/zero:latest",
  serviceRegistry: {
    port: 4848,
  },
  scaling: {
    min: nonProd ? 1 : 2,
    max: nonProd ? 1 : 4,
  },
  memory: nonProd ? "1 GB" : "2 GB",
  cpu: nonProd ? "0.25 vCPU" : "2 vCPU",
  capacity: nonProd ? "spot" : undefined,
  environment: {
    ZERO_REPLICA_FILE: $dev
      ? `${cwd()}/packages/zero-schema/zstart_replica.db`
      : "/mnt/data/sync-replica.db",
    ZERO_UPSTREAM_DB: connectionString,
    ZERO_CVR_DB: connectionString,
    ZERO_CHANGE_DB: connectionString,
    ZERO_AUTH_JWKS_URL: $util.interpolate`${auth.url}/.well-known/jwks.json`,
  },
  volumes: efs
    ? [
        {
          efs,
          path: "/mnt/data",
        },
      ]
    : [],
  dev: {
    command: "bun run --cwd packages/zero-schema dev",
    url: "http://localhost:4848",
  },
});

export let zeroURL: $util.Output<string> | string = "http://localhost:4848";

if (!$dev) {
  const api = new sst.aws.ApiGatewayV2("ZeroAPI", { vpc });
  api.route("$default", service.nodes.cloudmapService.arn);

  zeroURL = api.url;
}

export const outputs = {
  ZeroURL: zeroURL,
};

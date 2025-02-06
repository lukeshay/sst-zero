import { readFileSync } from "node:fs";
import { cwd } from "node:process";
import { auth } from "./auth";
import { nonProd } from "./const";
import { zeroDatabase } from "./db";
import { dns, domain } from "./dns";
import { vpc } from "./vpc";

const connectionString = $util.interpolate`postgresql://${zeroDatabase.username}:${zeroDatabase.password}@${zeroDatabase.host}:${zeroDatabase.port}/${zeroDatabase.database}`;

export let zeroURL: $util.Output<string> | string = "http://localhost:4848";

if ($dev) {
  new sst.x.DevCommand("ZeroDev", {
    environment: {
      ZERO_REPLICA_FILE: `${cwd()}/packages/zero-schema/zstart_replica.db`,
      ZERO_UPSTREAM_DB: connectionString,
      ZERO_CVR_DB: connectionString,
      ZERO_CHANGE_DB: connectionString,
      ZERO_AUTH_JWKS_URL: $util.interpolate`${auth.url}/.well-known/jwks.json`,
    },
    dev: {
      command: "bun run --cwd packages/zero-schema dev",
    },
  });
} else {
  const cluster = new sst.aws.Cluster("Cluster", {
    vpc,
    transform: {
      cluster: {
        settings: [
          {
            name: "containerInsights",
            value: "enhanced",
          },
        ],
      },
    },
  });

  const loadSchemaJson = () => {
    if (process.env.ZERO_SCHEMA_JSON) {
      return process.env.ZERO_SCHEMA_JSON;
    }

    try {
      const schema = readFileSync(
        `${cwd()}/packages/zero-schema/zero-schema.json`,
        "utf8",
      );
      // Parse and stringify to ensure single line
      return JSON.stringify(JSON.parse(schema));
    } catch (error) {
      const e = error as Error;
      console.error(`Failed to read schema file: ${e.message}`);
      throw new Error(
        "Schema must be provided via ZERO_SCHEMA_JSON env var or zero-schema.json file",
      );
    }
  };

  const schemaJson = loadSchemaJson();

  // S3 Bucket
  const replicationBucket = new sst.aws.Bucket("ZeroReplicationBucket", {
    public: false,
  });

  const tag = $dev
    ? "latest"
    : JSON.parse(
        readFileSync("./node_modules/@rocicorp/zero/package.json").toString(),
      ).version.replace("+", "-");
  const image = `registry.hub.docker.com/rocicorp/zero:${tag}`;

  const commonEnv = {
    NO_COLOR: "1",
    ZERO_SCHEMA_JSON: schemaJson,
    ZERO_LOG_FORMAT: "json",
    ZERO_REPLICA_FILE: "sync-replica.db",
    ZERO_LITESTREAM_BACKUP_URL: $interpolate`s3://${replicationBucket.name}/backup`,
    ZERO_UPSTREAM_DB: connectionString,
    ZERO_CVR_DB: connectionString,
    ZERO_CHANGE_DB: connectionString,
    ZERO_AUTH_JWKS_URL: $util.interpolate`${auth.url}/.well-known/jwks.json`,
  };

  const replicationManager = !$dev
    ? cluster.addService("ZeroReplicationManager", {
        link: [zeroDatabase, replicationBucket],
        image,
        loadBalancer: {
          public: false,
          domain: {
            name: $util.interpolate`zerorm.${domain}`,
            dns,
          },
          ports: [
            {
              listen: "80/http",
              forward: "4849/http",
            },
            {
              listen: "443/https",
              forward: "4849/http",
            },
          ],
        },
        scaling: {
          min: nonProd ? 1 : 2,
          max: nonProd ? 1 : 4,
        },
        memory: nonProd ? "4 GB" : "8 GB",
        cpu: nonProd ? "1 vCPU" : "2 vCPU",
        capacity: nonProd ? "spot" : undefined,
        health: {
          command: ["CMD-SHELL", "curl -f http://localhost:4849/ || exit 1"],
          interval: "5 seconds",
          retries: 3,
          startPeriod: "300 seconds",
        },
        environment: {
          ...commonEnv,
          ZERO_CHANGE_MAX_CONNS: "3",
          ZERO_NUM_SYNC_WORKERS: "0",
        },
        transform: {
          loadBalancer: {
            idleTimeout: 3600,
          },
          target: {
            healthCheck: {
              enabled: true,
              path: "/keepalive",
              protocol: "HTTP",
              interval: 5,
              healthyThreshold: 2,
              timeout: 3,
            },
          },
        },
      })
    : undefined;

  const service = cluster.addService("ZeroViewSyncer", {
    image: "rocicorp/zero:canary",
    loadBalancer: {
      public: true,
      domain: {
        name: $util.interpolate`zero.${domain}`,
        dns,
      },
      ports: [
        {
          listen: "80/http",
          forward: "4848/http",
        },
        {
          listen: "443/https",
          forward: "4848/http",
        },
      ],
    },
    scaling: {
      min: nonProd ? 1 : 2,
      max: nonProd ? 1 : 4,
    },
    memory: nonProd ? "4 GB" : "8 GB",
    cpu: nonProd ? "1 vCPU" : "2 vCPU",
    capacity: nonProd ? "spot" : undefined,
    health: {
      command: ["CMD-SHELL", "curl -f http://localhost:4848/ || exit 1"],
      interval: "5 seconds",
      retries: 3,
      startPeriod: "300 seconds",
    },
    environment: {
      ...commonEnv,
      ...($dev
        ? {
            ZERO_NUM_SYNC_WORKERS: "1",
          }
        : {
            ZERO_CHANGE_STREAMER_URI: replicationManager?.url.apply((val) =>
              val.replace("http://", "ws://"),
            ),
            ZERO_UPSTREAM_MAX_CONNS: "15",
            ZERO_CVR_MAX_CONNS: "160",
          }),
    },
    transform: {
      target: {
        healthCheck: {
          enabled: true,
          path: "/keepalive",
          protocol: "HTTP",
          interval: 5,
          healthyThreshold: 2,
          timeout: 3,
        },
        stickiness: {
          enabled: true,
          type: "lb_cookie",
          cookieDuration: 120,
        },
        loadBalancingAlgorithmType: "least_outstanding_requests",
      },
    },
    link: [zeroDatabase, replicationBucket],
    dev: {
      command: "bun run dev",
      directory: "packages/zero-schema",
      url: "http://localhost:4848",
    },
  });

  zeroURL = service.url;
}

export const outputs = {
  ZeroURL: zeroURL,
};

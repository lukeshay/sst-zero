import { cwd } from "node:process";

export const dcp = $dev
  ? new command.local.Command("DockerCompose", {
      dir: cwd(),
      create: "bun run start-db-hard",
      update: "bun run start-db",
      triggers: [new Date()],
    })
  : undefined;

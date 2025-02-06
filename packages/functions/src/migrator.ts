import { zeroDatabase } from "@sst-zero/core/zero-database";
import { migrate } from "drizzle-orm/node-postgres/migrator";

export const handler = async () => {
  await migrate(zeroDatabase, {
    migrationsFolder: "./drizzle",
  });
};

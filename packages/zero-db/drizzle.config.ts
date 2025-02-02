import { defineConfig } from "drizzle-kit";
import { Resource } from "sst";

console.log("======== MIGRATING DB ========");

export default defineConfig({
  schema: ["./src/**/*.sql.ts", "./src/**/*.relations.ts"],
  dialect: "postgresql",
  dbCredentials: {
    database: Resource.ZeroDatabase.database,
    host: Resource.ZeroDatabase.host,
    password: Resource.ZeroDatabase.password,
    port: Resource.ZeroDatabase.port,
    user: Resource.ZeroDatabase.username,
    ssl: false,
  },
});

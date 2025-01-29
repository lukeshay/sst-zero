import { drizzle } from "drizzle-orm/node-postgres";
import { Resource } from "sst";

export const zeroDatabase = drizzle(
  `postgresql://${Resource.ZeroDatabase.username}:${Resource.ZeroDatabase.password}@${Resource.ZeroDatabase.host}:${Resource.ZeroDatabase.port}/${Resource.ZeroDatabase.database}`,
);

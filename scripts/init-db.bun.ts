#!/user/bin/env bun

import { Resource } from "sst/resource";
import { Client } from "pg";

async function createDatabaseIfNotExists(
  client: Client,
  targetDatabase: string,
): Promise<void> {
  try {
    // Check if the target database exists
    const res = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [targetDatabase],
    );

    if (res.rowCount === 0) {
      // Database does not exist, create it
      await client.query(`CREATE DATABASE ${targetDatabase}`);
      console.log(`Database '${targetDatabase}' created successfully.`);
    } else {
      console.log(`Database '${targetDatabase}' already exists.`);
    }
  } catch (err) {
    console.error("Error creating database:", err);
  }
}

const client = new Client(
  `postgresql://${Resource.ZeroDatabase.username}:${Resource.ZeroDatabase.password}@${Resource.ZeroDatabase.host}:${Resource.ZeroDatabase.port}`,
);

await client.connect();

await createDatabaseIfNotExists(client, "zstart");
await createDatabaseIfNotExists(client, "zstart_cvr");
await createDatabaseIfNotExists(client, "zstart_cdb");

await client.end();

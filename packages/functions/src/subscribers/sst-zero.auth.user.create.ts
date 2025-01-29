import type { EventBridgeHandler } from "aws-lambda";
import { zeroDatabase } from "@sst-zero/core/zero-database";
import { usersTable, type User } from "@sst-zero/zero-db";

type DateToString<T> = {
  [K in keyof T]: T[K] extends Date ? string : T[K];
};

export const handler: EventBridgeHandler<
  "user.create" | "user.signin",
  DateToString<User>,
  void
> = async (event) => {
  await zeroDatabase.insert(usersTable).values({
    ...event.detail,
    createdAt: new Date(event.detail.createdAt),
    updatedAt: new Date(event.detail.updatedAt),
  });
};

import { zeroDatabase } from "@sst-zero/core/zero-database";
import { type User, usersTable } from "@sst-zero/zero-db";
import type { EventBridgeHandler } from "aws-lambda";

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

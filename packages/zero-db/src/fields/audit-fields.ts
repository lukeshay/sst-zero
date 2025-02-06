import { timestamp, uuid } from "drizzle-orm/pg-core";

export const AUDIT_FIELDS = {
  createdAt: timestamp("createdAt").notNull(),
  createdBy: uuid("createdBy").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  updatedBy: uuid("updatedBy").notNull(),
} as const;

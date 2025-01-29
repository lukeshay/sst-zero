import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { AUDIT_FIELDS } from "./fields/audit-fields.js";

export const usersTable = pgTable("user", {
  id: uuid("id").primaryKey(),
  email: varchar("title").notNull(),
  ...AUDIT_FIELDS,
});

export type User = typeof usersTable.$inferSelect;

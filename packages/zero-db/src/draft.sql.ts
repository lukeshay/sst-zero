import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { AUDIT_FIELDS_CREATOR_CASCADE } from "./fields/audit-fields-creator-cascade";

export const draftsTable = pgTable("draft", {
  id: uuid("id").primaryKey(),
  visibility: varchar("visibility", { length: 7 }).notNull(),
  title: varchar("title").notNull(),
  ...AUDIT_FIELDS_CREATOR_CASCADE,
});

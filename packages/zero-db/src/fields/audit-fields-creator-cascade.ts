import { uuid } from "drizzle-orm/pg-core";
import { usersTable } from "../user.sql.js";
import { AUDIT_FIELDS } from "./audit-fields.js";

export const AUDIT_FIELDS_CREATOR_CASCADE = {
  ...AUDIT_FIELDS,
  createdBy: uuid("createdBy")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
} as const;

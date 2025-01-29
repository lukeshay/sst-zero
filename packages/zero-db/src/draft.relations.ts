import { relations } from "drizzle-orm";
import { usersTable } from "./user.sql.js";
import { draftsTable } from "./draft.sql.js";

export const draftsTableRelations = relations(draftsTable, ({ one }) => ({
  creator: one(usersTable, {
    fields: [draftsTable.createdBy],
    references: [usersTable.id],
  }),
}));

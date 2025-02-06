import { relations } from "drizzle-orm";
import { usersTable } from "./user.sql";
import { draftsTable } from "./draft.sql";

export const draftsTableRelations = relations(draftsTable, ({ one }) => ({
  creator: one(usersTable, {
    fields: [draftsTable.createdBy],
    references: [usersTable.id],
  }),
}));

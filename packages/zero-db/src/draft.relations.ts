import { relations } from "drizzle-orm";
import { draftsTable } from "./draft.sql";
import { usersTable } from "./user.sql";

export const draftsTableRelations = relations(draftsTable, ({ one }) => ({
  creator: one(usersTable, {
    fields: [draftsTable.createdBy],
    references: [usersTable.id],
  }),
}));

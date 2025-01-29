import {
  definePermissions,
  type ExpressionBuilder,
  type Row,
  NOBODY_CAN,
} from "@rocicorp/zero";
import type { Subjects } from "@sst-zero/core/subjects";
import * as drizzleSchema from "../../zero-db/src";
import { createZeroSchema } from "drizzle-zero";

export type AuthData = {
  sub: string | null;
  properties: Subjects["properties"] | null;
};

export const schema = createZeroSchema(drizzleSchema, {
  version: 1,
  tables: {
    draft: {
      id: true,
      visibility: true,
      title: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
    user: {
      id: true,
      email: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
  },
});

export type Schema = typeof schema;
export type Draft = Row<typeof schema.tables.draft>;
export type PermissionRule<
  TSchema extends Schema,
  TTable extends keyof TSchema["tables"] & string,
> = (authData: AuthData, eb: ExpressionBuilder<TSchema, TTable>) => any;

function and<
  TSchema extends Schema,
  TTable extends keyof TSchema["tables"] & string,
>(
  ...rules: PermissionRule<TSchema, TTable>[]
): PermissionRule<TSchema, TTable> {
  return (authData, eb) => eb.and(...rules.map((rule) => rule(authData, eb)));
}

export const permissions = definePermissions<AuthData, Schema>(schema, () => {
  const allowIfLoggedIn = (
    authData: AuthData,
    eb: ExpressionBuilder<Schema, "draft" | "user">,
  ) => eb.and(eb.cmpLit(authData.sub, "IS NOT", null));

  const allowIfCreatedBy = (
    authData: AuthData,
    eb: ExpressionBuilder<Schema, "draft" | "user">,
  ) =>
    eb.and(
      allowIfLoggedIn(authData, eb),
      eb.cmp("createdBy", "=", authData.sub!),
    );
  const allowIfUpdatedBy = (
    authData: AuthData,
    eb: ExpressionBuilder<Schema, "draft" | "user">,
  ) =>
    eb.and(
      allowIfLoggedIn(authData, eb),
      eb.cmp("updatedBy", "=", authData.sub!),
    );

  const allowIfCreatedByOrPublic = (
    authData: AuthData,
    eb: ExpressionBuilder<Schema, "draft">,
  ) =>
    eb.or(allowIfCreatedBy(authData, eb), eb.cmp("visibility", "=", "public"));

  const allowIfSelf = (
    authData: AuthData,
    eb: ExpressionBuilder<Schema, "user">,
  ) => eb.and(allowIfLoggedIn(authData, eb), eb.cmp("id", "=", authData.sub!));

  return {
    draft: {
      row: {
        insert: [and(allowIfCreatedBy, allowIfUpdatedBy)],
        update: {
          preMutation: [and(allowIfCreatedBy, allowIfUpdatedBy)],
        },
        delete: [allowIfCreatedBy],
        select: [allowIfCreatedByOrPublic],
      },
    },
    user: {
      row: {
        insert: NOBODY_CAN,
        update: {
          preMutation: NOBODY_CAN,
        },
        delete: NOBODY_CAN,
        select: [allowIfSelf],
      },
    },
  };
});

export default {
  schema,
  permissions,
};

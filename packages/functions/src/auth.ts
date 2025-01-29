import { handle } from "hono/aws-lambda";
import { issuer } from "@openauthjs/openauth";
import { CodeProvider } from "@openauthjs/openauth/provider/code";
import { CodeUI } from "@openauthjs/openauth/ui/code";
import { subjects } from "@sst-zero/core/subjects";
import { DynamoDB } from "@sst-zero/core/dynamodb";
import { Email } from "@sst-zero/core/email";
import {
  EventBridgeClient,
  PutEventsCommand,
} from "@aws-sdk/client-eventbridge";
import { Resource } from "sst/resource";

const eb = new EventBridgeClient({});

const {
  options: { table },
} = JSON.parse(process.env.OPENAUTH_STORAGE!);

const app = issuer({
  subjects,
  providers: {
    code: CodeProvider(
      CodeUI({
        sendCode: async (claims, code) => {
          console.log({ code, claims });

          await Email.send({
            to: claims.email!,
            subject: "Your auth code",
            text: `Your auth code is ${code}`,
          });
        },
      }),
    ),
  },
  allow: async () => true,
  success: async (ctx, value) => {
    let user: {
      id: string;
      email: string;
      createdAt: string;
      createdBy: string;
      updatedAt: string;
      updatedBy: string;
    };

    let detailType = "user.signin";

    try {
      const res = await DynamoDB.getItem(
        table,
        `user#${value.claims.email}`,
        value.claims.email!,
      );

      user = JSON.parse(res.Item.value.S);
    } catch {
      const id = crypto.randomUUID();

      user = {
        id,
        email: value.claims.email!,
        createdBy: id,
        createdAt: new Date().toISOString(),
        updatedBy: id,
        updatedAt: new Date().toISOString(),
      };

      await DynamoDB.putItem(table, {
        pk: { S: `user#${value.claims.email}` },
        sk: { S: value.claims.email! },
        value: {
          S: JSON.stringify(user),
        },
      });

      detailType = "user.create";
    }

    await eb.send(
      new PutEventsCommand({
        Entries: [
          {
            EventBusName: Resource.Bus.name,
            Source: "sst-zero.auth",
            Detail: JSON.stringify(user),
            DetailType: detailType,
          },
        ],
      }),
    );

    return ctx.subject("user", user, {
      subject: user.id,
    });
  },
});

export const handler = handle(app);

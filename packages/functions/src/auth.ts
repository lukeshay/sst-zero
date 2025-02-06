import {
  EventBridgeClient,
  PutEventsCommand,
} from "@aws-sdk/client-eventbridge";
import { issuer } from "@openauthjs/openauth";
import { CodeProvider } from "@openauthjs/openauth/provider/code";
import { PasswordProvider } from "@openauthjs/openauth/provider/password";
import { CodeUI } from "@openauthjs/openauth/ui/code";
import { PasswordUI } from "@openauthjs/openauth/ui/password";
import { DynamoDB } from "@sst-zero/core/dynamodb";
import { Email } from "@sst-zero/core/email";
import { withLog } from "@sst-zero/core/logging";
import { subjects } from "@sst-zero/core/subjects";
import { handle } from "hono/aws-lambda";
import { Resource } from "sst/resource";
import { maxLength, minLength, pipe, regex, string } from "valibot";

const eb = new EventBridgeClient({});

const {
  options: { table },
} = JSON.parse(process.env.OPENAUTH_STORAGE!);

const app = issuer({
  subjects,
  providers: {
    code: CodeProvider(
      CodeUI({
        sendCode: withLog(async function sendCodeCode(claims, code) {
          await Email.send({
            to: claims.email!,
            subject: "Your auth code",
            text: `Your auth code is ${code}`,
          });
        }),
      }),
    ),
    password: PasswordProvider(
      PasswordUI({
        sendCode: withLog(async function sendEmailCode(email, code) {
          await Email.send({
            to: email,
            subject: "Your auth code",
            text: `Your auth code is ${code}`,
          });
        }),
        validatePassword: pipe(
          string(),
          minLength(12, "Password must be at least 12 characters"),
          maxLength(64, "Password must be less than 65 characters"),
          regex(/[A-Z]/, "Password must contain a capital letter"),
          regex(/[a-z]/, "Password must contain a lowercase letter"),
        ),
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

    const email =
      value.provider === "password" ? value.email : value.claims.email!;

    console.log({ email });

    try {
      const res = await DynamoDB.getItem(table, `user#${email}`, email);

      user = JSON.parse(res.Item.value.S);
    } catch {
      const id = crypto.randomUUID();

      user = {
        id,
        email,
        createdBy: id,
        createdAt: new Date().toISOString(),
        updatedBy: id,
        updatedAt: new Date().toISOString(),
      };

      await DynamoDB.putItem(table, {
        pk: {
          S: `user#${email}`,
        },
        sk: {
          S: email,
        },
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

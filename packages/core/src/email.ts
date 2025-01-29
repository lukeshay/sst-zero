import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

export namespace Email {
  const client = new SESClient();

  export type Send = {
    to?: string | Array<string>;
    cc?: string | Array<string>;
    bcc?: string | Array<string>;
    from?: string;
    subject: string;
    html?: string;
    text?: string;
  };

  export async function send(input: Send) {
    await client.send(
      new SendEmailCommand({
        Destination: {
          ToAddresses: typeof input.to === "string" ? [input.to] : input.to,
          CcAddresses: typeof input.cc === "string" ? [input.cc] : input.cc,
          BccAddresses: typeof input.bcc === "string" ? [input.bcc] : input.bcc,
        },
        Source: input.from ?? process.env.EMAIL_FROM,
        Message: {
          Subject: {
            Data: input.subject,
          },
          Body: {
            Text: {
              Data: input.text,
            },
            Html: {
              Data: input.html,
            },
          },
        },
      }),
    );
  }
}

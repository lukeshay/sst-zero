import { getAWSClient } from "./aws";

async function dynamo(action: string, payload: any) {
  const client = await getAWSClient();
  const endpoint = `https://dynamodb.${client.region}.amazonaws.com`;
  const response = await client.fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-amz-json-1.0",
      "X-Amz-Target": `DynamoDB_20120810.${action}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`DynamoDB request failed: ${response.statusText}`);
  }

  return response.json() as Promise<any>;
}

export namespace DynamoDB {
  export const getItem = async (tableName: string, pk: string, sk: string) =>
    dynamo("GetItem", {
      TableName: tableName,
      Key: {
        pk: {
          S: pk,
        },
        sk: {
          S: sk,
        },
      },
    });

  export const putItem = async (tableName: string, item: any) =>
    dynamo("PutItem", {
      TableName: tableName,
      Item: item,
    });
}

import { type Schema, schema } from "@sst-zero/zero-schema";
import { useZero as useZ } from "@rocicorp/zero/react";
import { Zero } from "@rocicorp/zero";
import type { SessionSchema } from "./session";

export const useZero = useZ<Schema>;

export function useZeroClient(
  session: SessionSchema | undefined,
  idb?: boolean,
) {
  return new Zero({
    userID: session?.subject.properties.id ?? "anon",
    server: import.meta.env.VITE_PUBLIC_ZERO_URL,
    schema,
    auth: () => session?.tokens.access,
    kvStore: idb ? "idb" : "mem",
  });
}

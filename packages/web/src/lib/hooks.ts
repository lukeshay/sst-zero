import { Zero } from "@rocicorp/zero";
import { useZero as useZ } from "@rocicorp/zero/react";
import { type Schema, schema } from "@sst-zero/zero-schema";
import { useRouter } from "@tanstack/react-router";
import type { SessionSchema } from "./session";

export const useZero = useZ<Schema>;

export function useZeroClient(
  session: SessionSchema | undefined,
  idb?: boolean,
) {
  const router = useRouter();
  return new Zero({
    kvStore: idb ? "idb" : "mem",
    schema,
    server: import.meta.env.VITE_PUBLIC_ZERO_URL,
    userID: session?.subject.properties.id ?? "anon",
    auth: () => session?.tokens.access,
    onClientStateNotFound: router.invalidate,
    onUpdateNeeded: () => router.invalidate(),
  });
}

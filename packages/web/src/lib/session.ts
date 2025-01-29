import { subjects } from "@sst-zero/core/subjects";
import {
  boolean,
  type InferOutput,
  literal,
  nullable,
  object,
  optional,
  record,
  string,
} from "valibot";
import { merge } from "merge-anything";

import { createValidatedStorage } from "./local-storage";
import { removeNullValues } from "./objects";
import { authClient } from "./auth";
import { redirect, type ParsedLocation } from "@tanstack/react-router";

const SessionSchema = object({
  tokens: object({
    access: string(),
    refresh: optional(string()),
  }),
  expired: optional(boolean()),
  aud: string(),
  subject: object({
    type: literal("user"),
    properties: subjects.user,
  }),
});

const SessionsSchema = record(string(), SessionSchema);

const SessionsStorageSchema = object({
  currentSession: optional(SessionSchema),
  sessions: SessionsSchema,
});

const NullableSessionsSchema = record(string(), nullable(SessionSchema));

const NullableSessionsStorageSchema = object({
  currentSession: optional(SessionSchema),
  sessions: NullableSessionsSchema,
});

export type NullableSessionsStorageSchema = InferOutput<
  typeof NullableSessionsStorageSchema
>;
export type SessionsStorageSchema = InferOutput<typeof SessionsStorageSchema>;
export type SessionsSchema = InferOutput<typeof SessionsSchema>;
export type SessionSchema = InferOutput<typeof SessionSchema>;
export type AddUser = {
  sub: string;
  session: SessionSchema;
};

const SESSIONS_KEY = "sst-zero/sessions" as const;

const storage = createValidatedStorage({
  key: SESSIONS_KEY,
  schema: SessionsStorageSchema,
  defaultValue: {
    currentSession: undefined,
    sessions: {},
  },
});

function set(
  cb: (state: SessionsStorageSchema) => Partial<NullableSessionsStorageSchema>,
): SessionsStorageSchema {
  const state = storage.getItem();
  const result = cb(state);

  const ret = merge(
    state,
    removeNullValues<SessionsStorageSchema>(result as any),
  );

  storage.setItem(ret);

  return ret;
}

function get(): SessionsStorageSchema {
  return storage.getItem();
}

export const getCurrentSession = () => get().currentSession;

export const getSessions = (): SessionsSchema => get().sessions;

export const addCurrentSession = (input: SessionSchema) => {
  set((state) => {
    state.currentSession = input;
    state.sessions[input.subject.properties.id] = input;

    return {
      currentSession: input,
      sessions: {
        [input.subject.properties.id]: input,
      },
    };
  });
};

export const getSession = (sub: string) => get().sessions[sub];

export const setCurrentSession = (sub: string) =>
  set((state) => ({
    currentSession: state.sessions[sub]!,
  }));

export const expireSession = (sub: string) =>
  set((state) => ({
    sessions: {
      [sub]: {
        ...state.sessions[sub]!,
        expired: true,
      },
    },
  }));

export const removeSession = (sub: string) =>
  set((state) => {
    let currentSession = state.currentSession;

    const sessions = Object.fromEntries(
      Object.entries(state.sessions).filter(([subb]) => subb !== sub),
    );

    if (currentSession?.subject.properties.id === sub) {
      const nextSession = Object.entries(sessions)[0];

      if (nextSession?.[1]) {
        const [_sub, session] = nextSession;

        currentSession = session;
      } else {
        currentSession = undefined;
      }
    }

    return {
      currentSession,
      sessions: {
        [sub]: null,
      },
    };
  });

export const updateSession = (session: SessionSchema) =>
  set((state) => ({
    currentSession:
      state.currentSession?.subject.properties.id ===
      session.subject.properties.id
        ? session
        : state.currentSession,
    sessions: {
      [session.subject.properties.id]: session,
    },
  }));

export const updateSessions = (sessions: SessionSchema[]) =>
  set((state) => {
    let currentSession = state.currentSession;

    const newSessions = Object.fromEntries(
      sessions.map((session) => [session.subject.properties.id, session]),
    );

    if (
      currentSession?.subject.properties.id &&
      newSessions[currentSession.subject.properties.id]
    ) {
      currentSession = newSessions[currentSession.subject.properties.id];
    }

    return {
      currentSession,
      sessions: newSessions,
    };
  });

export async function parseAuthTokenFromHash(hash: string) {
  const hashObj = Object.fromEntries(
    hash.split("&").map((pair) => pair.split("=")),
  );

  if (hashObj.access_token) {
    const verified = await authClient.verify(subjects, hashObj.access_token, {
      refresh: decodeURIComponent(hashObj.refresh_token),
    });

    if (!verified.err) {
      const s = {
        subject: verified.subject,
        aud: verified.aud,
        tokens: {
          refresh:
            verified.tokens?.refresh ??
            decodeURIComponent(hashObj.refresh_token),
          access: verified.tokens?.access ?? hashObj.access_token,
        },
      } as const;

      addCurrentSession(s);
    }

    throw redirect({
      to: location.pathname,
      replace: true,
    });
  }
}

export async function verifyCurrentSession() {
  const session = getCurrentSession();

  if (!session) {
    return undefined;
  }

  try {
    const verified = await authClient.verify(subjects, session.tokens.access, {
      refresh: session.tokens.refresh,
    });

    if (!verified.err) {
      const newSession = {
        ...session,
        tokens: verified.tokens ?? session.tokens,
      };

      addCurrentSession(newSession);

      return newSession;
    }
  } catch {}

  expireSession(session.subject.properties.id);
}

export async function handleLoadSession(hash: string) {
  await parseAuthTokenFromHash(hash);

  return verifyCurrentSession();
}

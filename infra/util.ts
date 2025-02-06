export function ensureEnv(key: string): string {
  const env = process.env[key];

  if (!env) {
    throw new Error(`Environment variable ${key} is missing`);
  }

  return env;
}

export const EMAIL_FROM = ensureEnv("EMAIL_FROM");

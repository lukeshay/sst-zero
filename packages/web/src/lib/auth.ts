import { createClient } from "@openauthjs/openauth/client";

export async function getAuthRedirectUrl() {
  const exchanged = await authClient.authorize(window.location.origin, "code", {
    pkce: true,
  });

  localStorage.setItem("challenge", JSON.stringify(exchanged.challenge));

  return exchanged.url;
}

export async function redirectToAuth() {
  console.log("Redirecting to auth", window.location.origin);

  const url = await getAuthRedirectUrl();

  window.location.href = url;
}

export const authClient = createClient({
  clientID: "web",
  issuer: import.meta.env.VITE_PUBLIC_AUTH_ISSUER,
});

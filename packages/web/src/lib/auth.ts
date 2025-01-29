import { createClient } from "@openauthjs/openauth/client";
import { redirect } from "@tanstack/react-router";

export async function getAuthRedirectUrl() {
  const exchanged = await authClient.authorize(window.location.origin, "token");

  return exchanged.url;
}

export async function redirectToAuth() {
  console.log("Redirecting to auth", window.location.origin);

  const { url, challenge } = await authClient.authorize(
    window.location.origin,
    "token",
    {
      pkce: true,
    },
  );

  console.log("Challenge", challenge);

  localStorage.setItem("challenge", JSON.stringify(challenge));

  console.log("Redirecting to", url);

  return redirect({ href: url });
}

export const authClient = createClient({
  clientID: "tanstack",
  issuer: import.meta.env.VITE_PUBLIC_AUTH_ISSUER,
});

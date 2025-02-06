import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useZeroClient } from "../lib/hooks";
import { ZeroProvider } from "@rocicorp/zero/react";
import { handleLoadSession } from "../lib/session";
import { redirectToAuth } from "../lib/auth";
import { object, union, string } from "valibot";
import { JSONDisplay } from "../components/cli/json-display";

const Search = union([
  object({ code: string(), state: string() }),
  object({
    error: string(),
    error_description: string(),
  }),
  object({}),
]);

export const Route = createRootRoute({
  component: Component,
  validateSearch: Search,
  beforeLoad: async ({ search }) => {
    if ("error" in search) {
      return {
        error: {
          type: search.error,
          description: search.error_description,
        },
      };
    }

    const session = await handleLoadSession(search);

    return {
      session,
    };
  },
});

function Component() {
  const ctx = Route.useRouteContext();
  const zero = useZeroClient(ctx.session);

  return (
    <ZeroProvider zero={zero}>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <a onClick={redirectToAuth}>Sign In</a>
      </div>
      <hr />
      {ctx.error && <JSONDisplay data={ctx.error} />}
      <Outlet />
      <TanStackRouterDevtools />
    </ZeroProvider>
  );
}

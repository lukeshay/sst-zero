import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useZeroClient } from "../lib/hooks";
import { ZeroProvider } from "@rocicorp/zero/react";
import { handleLoadSession } from "../lib/session";
import { getAuthRedirectUrl } from "../lib/auth";

export const Route = createRootRoute({
  component: Component,
  beforeLoad: async ({ location }) => {
    const session = await handleLoadSession(location.hash);

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
        <a
          onClick={async () => {
            window.location.href = await getAuthRedirectUrl();
          }}
        >
          Sign In
        </a>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </ZeroProvider>
  );
}

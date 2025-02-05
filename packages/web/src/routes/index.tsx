import { useQuery } from "@rocicorp/zero/react";
import { createFileRoute } from "@tanstack/react-router";
import { JSONDisplay } from "../components/cli/json-display";
import { useZero } from "../lib/hooks";
import { getSessions } from "../lib/session";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { session } = Route.useRouteContext();
  const z = useZero();
  const [me] = useQuery(
    z.query.user.where("id", "=", session?.subject.properties.id ?? ""),
  );

  return (
    <div className="p-2">
      <JSONDisplay data={me} />
      <JSONDisplay data={session} />
      <JSONDisplay data={getSessions()} />
    </div>
  );
}

export type WithLogOptions = {
  name?: string;
};
export function withLog<TParams extends unknown[], TReturn>(
  fn: (...args: TParams) => TReturn,
  options: WithLogOptions = {
    name: fn.name,
  },
) {
  return (...args: TParams) => {
    console.log("Calling", options.name, "with", args);

    return fn(...args);
  };
}

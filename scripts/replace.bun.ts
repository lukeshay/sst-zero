#!/user/bin/env bun

import { Glob } from "bun";

const glob = new Glob("**/{*.ts,package.json }");

for await (const file of glob.scan({
  cwd: ".",
  onlyFiles: true,
  absolute: true,
})) {
  console.log(file);
}

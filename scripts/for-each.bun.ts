#!/user/bin/env bun
import { execSync } from "node:child_process";
import { $ } from "bun";

const cmd = process.argv.slice(2).join(" ");

const packagesOutput =
  $`find ./packages -maxdepth 1 -mindepth 1 -type d`.lines();

for await (const line of packagesOutput) {
  if (line.trim() === "") {
    continue;
  }
  console.log("Running command ", `'${cmd}'`, " in ", line);

  execSync(cmd, {
    cwd: line,
    stdio: "inherit",
  });
}

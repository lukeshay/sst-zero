#!/usr/bin/env bun

import { Glob } from "bun";

console.log(process.argv);

const name = process.argv[2];

if (!name) {
  console.error("Usage: ./script <name>");
  process.exit(1);
}

const glob = new Glob("**/{*.ts,package.json }");

for await (const path of glob.scan({
  cwd: ".",
  onlyFiles: true,
  absolute: true,
})) {
  if (!path.includes("node_modules") && !path.includes(".sst")) {
    console.log(path);

    const file = Bun.file(path);

    const contents = await file.text();

    await file.write(contents.replaceAll("sst-zero", name));
  }
}

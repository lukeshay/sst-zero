#!/usr/bin/env bun
import { $ } from "bun";

await $`kill -9 $(lsof -t -i :4848)`.catch(() => {});
await $`kill -9 $(lsof -t -i :4849)`.catch(() => {});
await $`kill -9 $(lsof -t -i :4850)`.catch(() => {});
await $`bunx zero-cache-dev --auto-reset -p ./src/index.ts`;

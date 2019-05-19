#!/usr/bin/env node
import path from "path"
import spawn from "cross-spawn"

const script = process.argv[2]
const args = process.argv.slice(3)

switch (script) {
  case "setup":
  case "test":
  case "web:build":
  case "web:dev":
  case "web:start":
  case "new": {
    const result = spawn.sync(
      "node",
      [require.resolve(path.join("../build/scripts", script))].concat(args),
      { stdio: "inherit" },
    )
    process.exit(result.status)
    break
  }
  default:
    console.log(`Unknown script "${script}".`)
    break
}

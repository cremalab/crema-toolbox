#!/usr/bin/env node
import path from "path"
import spawn from "cross-spawn"
import { pathPackage } from "../../internal/config/paths"

const script = process.argv[2]
const args = process.argv.slice(3)

switch (script) {
  case "setup":
  case "test":
  case "build":
  case "dev":
  case "start":
  case "playground":
  case "playgroundBuild":
  case "new": {
    const result = spawn.sync(
      "node",
      [
        path.join(pathPackage(), "dist/projectData/web/scripts/", script),
      ].concat(args),
      { stdio: "inherit" },
    )
    process.exit(result.status)
    break
  }
  default:
    console.log(`Unknown script "${script}".`)
    break
}

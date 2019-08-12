import spawn from "cross-spawn"
import { pathPackage } from "../../../internal/config/paths"
import path from "path"

const pathPackageStorybook = () =>
  path.join(pathPackage(), "/dist/projectData/web/.storybook")

console.log("pathPackageStorybook", pathPackageStorybook)

spawn.sync("build-storybook", [], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "test",
    SBCONFIG_CONFIG_DIR: pathPackageStorybook(),
    BABEL_ENV: "development",
  },
})

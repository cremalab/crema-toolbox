import spawn from "cross-spawn"
import { pathPackage } from "../../../internal/config/paths"
import path from "path"
import { args } from "../../../internal/utils/args"

const pathPackageStorybook = () =>
  path.join(pathPackage(), "/dist/web/.storybook")

spawn.sync("start-storybook", ["-p 9009 -s public", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "test",
    SBCONFIG_CONFIG_DIR: pathPackageStorybook(),
    BABEL_ENV: "development",
  },
})

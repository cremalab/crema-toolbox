import spawn from "cross-spawn"
import { paths } from "../config/paths"

spawn.sync("start-storybook", ["-p 9009 -s public"], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "test",
    SBCONFIG_CONFIG_DIR: paths.root + "/build/.storybook/",
    BABEL_ENV: "development",
  },
})

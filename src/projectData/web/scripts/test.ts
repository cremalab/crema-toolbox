import spawn from "cross-spawn"
import { args } from "../../../internal/utils/args"

spawn.sync("react-scripts", ["test", ...args()], {
  stdio: "inherit",
})

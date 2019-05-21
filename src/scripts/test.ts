import spawn from "cross-spawn"
import { args } from "../utils/args"

const [...b] = args()
spawn.sync("react-scripts", ["test", ...b], {
  stdio: "inherit",
})

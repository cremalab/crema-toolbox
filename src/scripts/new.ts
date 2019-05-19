import spawn from "cross-spawn"
import { PATHS } from "../config/paths"
import { args } from "../utils/arg"

spawn.sync("ln", ["-sf", PATHS.templates, PATHS.appTemplates])
spawn.sync("hygen", [args()[0], "new"], { stdio: "inherit" })
spawn.sync("rm", [PATHS.appTemplates])

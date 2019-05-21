import spawn from "cross-spawn"
import { paths } from "../config/paths"
import { args } from "../utils/args"

spawn.sync("ln", ["-sf", paths.templates, paths.appTemplates])
spawn.sync("hygen", [args()[0], "new"], { stdio: "inherit" })
spawn.sync("rm", [paths.appTemplates])

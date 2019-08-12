import spawn from "cross-spawn"
import { pathPackage, pathConsumer } from "../../../internal/config/paths"
import { args } from "../../../internal/utils/args"
import path from "path"

const pathPackageTemplates = path.join(pathPackage(), "_templates")
const pathConsumerTemplates = path.join(pathConsumer(), "_templates")

spawn.sync("ln", ["-sf", pathPackageTemplates, pathConsumerTemplates])
spawn.sync("hygen", [args()[0], "new"], { stdio: "inherit" })
spawn.sync("rm", [pathConsumerTemplates])

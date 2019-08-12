import spawn from "cross-spawn"
import rimraf from "rimraf"
import { pathPackage } from "../config/paths"
// import { answerPrompts } from "../utils/answerPrompts"

const pathPack = pathPackage()
console.log(pathPack)

process.chdir(pathPack)
spawn.sync("npm", ["pack"], { stdio: "inherit" })
process.chdir(pathPack + "/src/internal/tests")
rimraf.sync("temp")
spawn.sync("mkdir", ["temp"])
process.chdir("temp")
spawn.sync("npm", ["init", "--yes"], { stdio: "inherit" })
spawn.sync("npm", ["i", pathPackage() + "/crema-toolbox-0.1.0.tgz"], {
  stdio: "inherit",
})

spawn.sync("npx", ["crema-toolbox-web", "new", "project"])

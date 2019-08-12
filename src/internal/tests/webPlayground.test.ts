import spawn from "cross-spawn"
import { pathPackage } from "../config/paths"
import path from "path"
import rimraf from "rimraf"

describe("structure web", () => {
  beforeAll(() => {
    rimraf.sync("temp")
    spawn.sync("mkdir", ["temp"])
    process.chdir("temp")

    spawn.sync("node", [
      path.join(pathPackage(), "dist/projectData/web/index.js"),
      "new",
      "project",
    ])
  })

  afterAll(() => {
    process.chdir("..")
    rimraf.sync("temp")
  })

  test("runs playground", async () => {
    await spawn.sync("node", [
      path.join(pathPackage(), "dist/projectData/web/index.js"),
      "playgroundBuild",
    ])
    const tree = spawn.sync("treee", ["-a", "-l 6"]).output.toString()
    return expect(tree).toMatchSnapshot()
  })
})

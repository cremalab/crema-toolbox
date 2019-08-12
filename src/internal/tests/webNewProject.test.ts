import spawn from "cross-spawn"
import { pathPackage } from "../config/paths"
import path from "path"
import rimraf from "rimraf"

const trimEnds = (a: string) => a.slice(1, -1)

describe("structure web", () => {
  beforeAll(() => {
    rimraf.sync("./temp")
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
    rimraf.sync("./temp")
  })

  test("adds files as expected", () => {
    const tree = spawn.sync("treee", ["-a", "-l 6"]).output.toString()
    expect(trimEnds(tree)).toMatchSnapshot()
  })

  test("content of .prettierrc.js is correct", () => {
    const tree = spawn.sync("cat", [".prettierrc.js"]).output.toString()
    expect(trimEnds(tree)).toMatchSnapshot()
  })

  test("content of crema-toolbox-env.d.ts is correct", () => {
    const tree = spawn
      .sync("cat", ["src/crema-toolbox-env.d.ts"])
      .output.toString()
    expect(trimEnds(tree)).toMatchSnapshot()
  })
})

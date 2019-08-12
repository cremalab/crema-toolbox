import { pathPackage, pathConsumer } from "../config/paths"

describe("paths", () => {
  it("pathPackage", () => {
    expect(pathPackage()).toEqual("../../..")
  })

  it("pathConsumer", () => {
    expect(pathConsumer()).toEqual(process.cwd())
  })
})

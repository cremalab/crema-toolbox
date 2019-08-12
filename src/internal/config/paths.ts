import path from "path"

export const pathConsumer = () => process.cwd()
export const pathPackage = () =>
  path.relative(pathConsumer(), path.join(__dirname, "../../..")) || "./"

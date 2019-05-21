import path from "path"

const hygen = path.join(__dirname, "../..", "node_modules/.bin/hygen")
const reactScripts = path.join(
  __dirname,
  "../..",
  "node_modules/.bin/react-scripts",
)
const appRoot = path.resolve(process.cwd())
const appTemplates = path.join(appRoot, "_templates")
const root = path.join(__dirname, "../..")
const templates = path.join(root, "/_templates")

export const paths = {
  appRoot,
  appTemplates,
  hygen,
  reactScripts,
  root,
  templates,
}

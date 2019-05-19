module.exports = [
  {
    name: "name",
    type: "input",
    message: "Project Name:",
  },
  {
    name: "type",
    message: "Project Type:",
    type: "select",
    choices: ["Web", "Mobile", "API"],
  },
  {
    default: require("../../../package.json").version,
    name: "version",
    message: "Version:",
    type: "input",
  },
]

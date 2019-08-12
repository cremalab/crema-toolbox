module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/_templates"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  modulePathIgnorePatterns: ["<rootDir>/src/tests/temp/.+$"],
  testPathIgnorePatterns: [
    "node_modules",
    "<rootDir>/src/projectData/.+/test\\.ts?$",
  ],
}

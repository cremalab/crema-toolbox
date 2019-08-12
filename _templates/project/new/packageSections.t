---
inject: true
to: package.json
after: license
skip_if: browserslist
---
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "jest": {
    "collectCoverageFrom": [
      "!**/*.d.ts",
      "!node_modules",
      "!src/**/(stories).{ts,tsx}",
      "!src/**/(test).{ts,tsx}",
      "!src/index.tsx",
      "!src/serviceWorker.ts",
      "!src/state/index.ts",
      "src/**/*.{ts,tsx}"
    ]
  },
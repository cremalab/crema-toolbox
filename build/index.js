#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const script = process.argv[2];
const args = process.argv.slice(3);
switch (script) {
    case "setup":
    case "test":
    case "web:build":
    case "web:dev":
    case "web:start":
    case "new": {
        const result = cross_spawn_1.default.sync("node", [require.resolve(path_1.default.join("../build/scripts", script))].concat(args), { stdio: "inherit" });
        process.exit(result.status);
        break;
    }
    default:
        console.log(`Unknown script "${script}".`);
        break;
}

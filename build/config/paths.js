"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const hygen = path_1.default.join(__dirname, "../..", "node_modules/.bin/hygen");
const reactScripts = path_1.default.join(__dirname, "../..", "node_modules/.bin/react-scripts");
const appRoot = path_1.default.resolve(process.cwd());
const appTemplates = path_1.default.join(appRoot, "_templates");
const root = path_1.default.join(__dirname, "../..");
const templates = path_1.default.join(root, "/_templates");
exports.PATHS = {
    appRoot,
    appTemplates,
    hygen,
    reactScripts,
    root,
    templates,
};

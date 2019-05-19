"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const paths_1 = require("../config/paths");
const arg_1 = require("../utils/arg");
cross_spawn_1.default.sync("ln", ["-sf", paths_1.PATHS.templates, paths_1.PATHS.appTemplates]);
cross_spawn_1.default.sync("hygen", [arg_1.args()[0], "new"], { stdio: "inherit" });
cross_spawn_1.default.sync("rm", [paths_1.PATHS.appTemplates]);

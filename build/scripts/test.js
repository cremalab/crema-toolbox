"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const arg_1 = require("../utils/arg");
const [...b] = arg_1.args();
cross_spawn_1.default.sync("react-scripts", ["test", ...b], {
    stdio: "inherit",
});

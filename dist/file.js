"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readFile = (Folderpath) => {
    let response = [];
    const allFilesandFold = fs_1.default.readdirSync(Folderpath);
    allFilesandFold.forEach((file) => {
        const fullpath = path_1.default.join(Folderpath, file);
        if (fs_1.default.statSync(fullpath).isDirectory()) {
            response = response.concat((0, exports.readFile)(fullpath));
        }
        else {
            response.push(fullpath);
        }
    });
    return response;
};
exports.readFile = readFile;

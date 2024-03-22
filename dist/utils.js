"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idgen = void 0;
const MaxLen = 5;
function idgen() {
    let id = "";
    const subset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < MaxLen; i++) {
        id += subset[Math.floor(Math.random() * subset.length)];
    }
    return id;
}
exports.idgen = idgen;

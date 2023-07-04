"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTitleCase = void 0;
function toTitleCase(str) {
    // replace underscores with spaces
    return str
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (txt) => txt.toUpperCase());
}
exports.toTitleCase = toTitleCase;

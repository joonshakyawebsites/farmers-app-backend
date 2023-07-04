"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authChecker = ({ context }, roles) => {
    if (!context.user) {
        return false;
    }
    if (roles.length === 0) {
        return true;
    }
    if (roles.includes(context.user.type)) {
        return true;
    }
    return false;
};
exports.default = authChecker;

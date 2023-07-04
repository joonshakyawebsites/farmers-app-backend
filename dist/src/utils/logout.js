"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logout(context) {
    context.res.clearCookie("accessToken", {
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        secure: true,
    });
    return true;
}
exports.default = logout;

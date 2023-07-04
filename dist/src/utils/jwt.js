"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserAndGetContext = exports.verifyJwt = exports.signJwt = void 0;
const config_1 = __importDefault(require("config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("./prisma"));
const publicKey = Buffer.from(config_1.default.get("publicKey"), "base64").toString("ascii");
const privateKey = Buffer.from(config_1.default.get("privateKey"), "base64").toString("ascii");
function signJwt(object, options) {
    return jsonwebtoken_1.default.sign(object, privateKey, {
        ...(options && options),
        algorithm: "RS256",
        expiresIn: "365d",
    });
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, publicKey);
        return decoded;
    }
    catch (e) {
        return null;
    }
}
exports.verifyJwt = verifyJwt;
async function verifyUserAndGetContext(ctx) {
    const context = ctx;
    // // get token from cookie
    // if (ctx.req.cookies.accessToken) {
    //   const { id, noOfPasswordsChanged } =
    //     verifyJwt<{ id: string; noOfPasswordsChanged: number }>(
    //       ctx.req.cookies.accessToken
    //     ) || {};
    //   if (id) {
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         id,
    //       },
    //     });
    //     if (user && user.noOfPasswordsChanged === noOfPasswordsChanged) {
    //       context.user = user;
    //     } else {
    //       logout(ctx);
    //     }
    //   }
    // }
    // get bearer token from header
    const authHeader = ctx.req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const { id, noOfPasswordsChanged } = verifyJwt(token) || {};
        if (id) {
            const user = await prisma_1.default.user.findUnique({
                where: {
                    id,
                },
            });
            if (user && user.noOfPasswordsChanged === noOfPasswordsChanged) {
                context.user = user;
            }
        }
    }
    context.prisma = prisma_1.default;
    return context;
}
exports.verifyUserAndGetContext = verifyUserAndGetContext;

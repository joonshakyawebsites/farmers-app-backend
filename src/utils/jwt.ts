import config from "config";
import jwt from "jsonwebtoken";
import Context from "../types/context";
import logout from "./logout";
import prisma from "./prisma";

const publicKey = Buffer.from(
  config.get<string>("publicKey"),
  "base64"
).toString("ascii");
const privateKey = Buffer.from(
  config.get<string>("privateKey"),
  "base64"
).toString("ascii");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
    expiresIn: "365d",
  });
}

export function verifyJwt<T>(token: string): T | null {
  try {
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (e) {
    return null;
  }
}

export async function verifyUserAndGetContext(ctx: Context) {
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
    const { id, noOfPasswordsChanged } =
      verifyJwt<{ id: string; noOfPasswordsChanged: number }>(token) || {};
    if (id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (user && user.noOfPasswordsChanged === noOfPasswordsChanged) {
        context.user = user;
      }
    }
  }

  context.prisma = prisma;
  return context;
}

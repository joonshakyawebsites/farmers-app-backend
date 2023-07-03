import Context from "../types/context";

export default function logout(context: Context): boolean {
  context.res.clearCookie("accessToken", {
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
    secure: true,
  });
  return true;
}

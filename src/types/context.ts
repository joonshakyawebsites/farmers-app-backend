import { Request, Response } from "express";
import { User } from "@generated/type-graphql";
import prisma from "../utils/prisma";

interface Context {
  req: Request;
  res: Response;
  user: User | null;
  prisma: typeof prisma;
}

export default Context;

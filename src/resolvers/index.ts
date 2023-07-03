import { NonEmptyArray } from "type-graphql";
import UserResolver from "./user.resolver";
import ColdStorageItemResolver from "./coldStorageItem.resolver";

import * as relotionResolversImport from "@generated/type-graphql/resolvers/relations/resolvers.index";

const relotionResolvers = Object.values(
  relotionResolversImport
) as unknown as NonEmptyArray<Function>;

export const resolvers = [
  ...relotionResolvers,
  UserResolver,
  ColdStorageItemResolver,
] as const;

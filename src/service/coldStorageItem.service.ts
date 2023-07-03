import {
  ColdStorageItem,
  ColdStorageItemOrderByWithRelationInput,
  ColdStorageItemWhereInput,
} from "@generated/type-graphql";
import Context from "../types/context";
import _logout from "../utils/logout";
import { PaginationArgsType } from "../resolvers/utilities";
import { toTitleCase } from "../utils/toTitleCase";
import { CreateOrUpdateColdStorageItemInput } from "../schema/coldStorageItem.schema";

class ColdStorageItemService {
  async getColdStorageItems(
    context: Context,
    where: ColdStorageItemWhereInput,
    orderBy: ColdStorageItemOrderByWithRelationInput,
    pagination: PaginationArgsType
  ): Promise<ColdStorageItem[]> {
    return await context.prisma.coldStorageItem.findMany({
      where,
      orderBy,
      ...pagination,
    });
  }

  async createOrUpdateColdStorageItem(
    context: Context,
    input: CreateOrUpdateColdStorageItemInput
  ): Promise<ColdStorageItem> {
    const item = await context.prisma.coldStorageItem.findFirst({
      where: {
        uInt: input.uInt,
      },
    });

    if (item) {
      return await context.prisma.coldStorageItem.update({
        where: {
          ownerId_uInt: {
            ownerId: context.user!.id,
            uInt: input.uInt,
          },
        },
        data: input,
      });
    }

    return await context.prisma.coldStorageItem.create({
      data: {
        ...input,
        owner: {
          connect: {
            id: context.user!.id,
          },
        },
      },
    });
  }
}
export default ColdStorageItemService;

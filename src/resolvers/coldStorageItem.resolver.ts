import {
  Arg,
  Args,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

import {
  ColdStorageItem,
  ColdStorageItemOrderByWithRelationInput,
  ColdStorageItemWhereInput,
  UserTypeChoice,
} from "@generated/type-graphql";
import Context from "../types/context";
import { PaginationArgsType } from "./utilities";
import ColdStorageItemService from "../service/coldStorageItem.service";
import authChecker from "../utils/authChecker";
import { CreateOrUpdateColdStorageItemInput } from "../schema/coldStorageItem.schema";

@Resolver(() => ColdStorageItem)
export default class ColdStorageItemResolver {
  constructor(private coldStorageItemService: ColdStorageItemService) {
    this.coldStorageItemService = new ColdStorageItemService();
  }

  @Authorized(UserTypeChoice.ADMIN)
  @Query(() => [ColdStorageItem], { nullable: false })
  getColdStorageItems(
    @Ctx() context: Context,
    @Arg("where", { nullable: true }) where: ColdStorageItemWhereInput,
    @Arg("orderBy", { nullable: true })
    orderBy: ColdStorageItemOrderByWithRelationInput,
    @Args() pagination: PaginationArgsType
  ): Promise<ColdStorageItem[]> {
    return this.coldStorageItemService.getColdStorageItems(
      context,
      where,
      orderBy,
      pagination
    );
  }

  @Authorized(UserTypeChoice.COLD_STORAGE_OWNER)
  @Mutation(() => ColdStorageItem)
  createOrUpdateColdStorageItem(
    @Ctx() context: Context,
    @Arg("input") input: CreateOrUpdateColdStorageItemInput
  ): Promise<ColdStorageItem> {
    return this.coldStorageItemService.createOrUpdateColdStorageItem(
      context,
      input
    );
  }
}

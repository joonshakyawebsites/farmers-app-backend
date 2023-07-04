import { Arg, Args, Ctx, Float, Mutation, Query, Resolver } from "type-graphql";
import {
  CreateUserInput,
  LoginInput,
  LoginResponse,
} from "../schema/user.schema";
import UserService from "../service/user.service";
import { SetUserLocationInput } from "../schema/user.schema";
import {
  User,
  UserOrderByWithRelationInput,
  UserWhereInput,
} from "@generated/type-graphql";
import Context from "../types/context";
import { PaginationArgsType } from "./utilities";

@Resolver(() => User)
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Query(() => [User], { nullable: false })
  getUsers(
    @Ctx() context: Context,
    @Arg("where", { nullable: true }) where: UserWhereInput,
    @Arg("orderBy", { nullable: true }) orderBy: UserOrderByWithRelationInput,
    @Args() pagination: PaginationArgsType
  ): Promise<User[]> {
    return this.userService.getUsers(context, where, orderBy, pagination);
  }

  @Mutation(() => User)
  registerUser(
    @Ctx() context: Context,
    @Arg("input") input: CreateUserInput
  ): Promise<User> {
    return this.userService.registerUser(context, input);
  }

  @Mutation(() => LoginResponse)
  login(
    @Ctx() context: Context,
    @Arg("input") input: LoginInput
  ): Promise<LoginResponse> {
    return this.userService.login(context, input);
  }

  @Mutation(() => Boolean)
  logout(@Ctx() context: Context): boolean {
    return this.userService.logout(context);
  }

  @Query(() => [User], { nullable: false })
  async getNearestColdStores(
    @Ctx() context: Context,
    @Arg("where", { nullable: true }) where: UserWhereInput,
    @Arg("orderBy", { nullable: true }) orderBy: UserOrderByWithRelationInput,
    @Args() pagination: PaginationArgsType
  ): Promise<User[]> {
    return this.userService.getNearestColdStores(
      context,
      where,
      orderBy,
      pagination
    );
  }

  @Mutation(() => Boolean)
  async setUserLocation(
    @Ctx() context: Context,
    @Arg("input") input: SetUserLocationInput
  ): Promise<boolean> {
    return this.userService.setUserLocation(context, input);
  }

  @Mutation(() => Boolean)
  async setDriverTruckNumber(
    @Ctx() context: Context,
    @Arg("driverTruckNumber") driverTruckNumber: string
  ): Promise<boolean> {
    return this.userService.setDriverTruckNumber(context, driverTruckNumber);
  }

  @Query(() => [User], { nullable: false })
  async getNearestDrivers(
    @Ctx() context: Context,
    @Arg("where", { nullable: true }) where: UserWhereInput,
    @Arg("orderBy", { nullable: true }) orderBy: UserOrderByWithRelationInput,
    @Args() pagination: PaginationArgsType
  ): Promise<User[]> {
    return this.userService.getNearestDrivers(
      context,
      where,
      orderBy,
      pagination
    );
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: Context): User | null {
    return context.user;
  }
}

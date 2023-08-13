import {
  Arg,
  Args,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  CreateUserInput,
  LoginInput,
  LoginResponse,
  S3SignedUrl,
  UpdateUserInput,
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
import config from "config";

@Resolver(() => User)
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Query(() => [User], { nullable: false })
  async getUsers(
    @Ctx() context: Context,
    @Arg("where", { nullable: true }) where: UserWhereInput,
    @Arg("orderBy", { nullable: true }) orderBy: UserOrderByWithRelationInput,
    @Args() pagination: PaginationArgsType
  ): Promise<User[]> {
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    return this.userService.getUsers(context, where, orderBy, pagination);
  }

  @Authorized()
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

  @Authorized()
  @Mutation(() => S3SignedUrl, { nullable: false })
  async getSignedUrl(
    @Ctx() context: Context,
    @Arg("fileName") fileName: string,
    @Arg("fileType") fileType: string
  ): Promise<S3SignedUrl> {
    const REGION = config.get<string>("awsRegion");
    const BUCKET = config.get<string>("awsBucketName");
    const customDomain = "expmple.com";
    const client = new S3Client({
      region: REGION,
    });

    const command = new PutObjectCommand({
      Bucket: BUCKET,
      Key: fileName,
      ContentType: fileType,
      ACL: "public-read",
    });

    const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });

    return {
      signedUrl,
      url: `https://${customDomain}/${fileName}`,
    };
  }

  @Authorized()
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

  @Authorized()
  @Mutation(() => User)
  async updateUser(
    @Ctx() context: Context,
    @Arg("input") input: UpdateUserInput
  ): Promise<User> {
    return this.userService.updateUser(context, input);
  }

  @Authorized()
  @Mutation(() => Boolean)
  async setUserLocation(
    @Ctx() context: Context,
    @Arg("input") input: SetUserLocationInput
  ): Promise<boolean> {
    return this.userService.setUserLocation(context, input);
  }

  @Authorized()
  @Mutation(() => Boolean)
  async setDriverTruckNumber(
    @Ctx() context: Context,
    @Arg("driverTruckNumber") driverTruckNumber: string
  ): Promise<boolean> {
    return this.userService.setDriverTruckNumber(context, driverTruckNumber);
  }

  @Authorized()
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
  async me(@Ctx() context: Context): Promise<User | null> {
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    return context.user;
  }
}

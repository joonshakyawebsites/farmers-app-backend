import { TruckTypeChoice } from "./../../prisma/generated/type-graphql/enums/TruckTypeChoice";
import { LoginResponse, SetUserLocationInput } from "./../schema/user.schema";
import { UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";
import { CreateUserInput, LoginInput } from "../schema/user.schema";
import {
  User,
  UserOrderByWithRelationInput,
  UserWhereInput,
} from "@generated/type-graphql";
import Context from "../types/context";
import { signJwt } from "../utils/jwt";
import _logout from "../utils/logout";
import { PaginationArgsType } from "../resolvers/utilities";
import { Prisma, UserTypeChoice } from "@prisma/client";
import { toTitleCase } from "../utils/toTitleCase";

class UserService {
  sortUsersAccordingToDistance(
    users: User[],
    latitude: number,
    longitude: number
  ) {
    return users.sort((a, b) => {
      const aDistance = Math.sqrt(
        Math.pow(a.latitude - latitude, 2) +
          Math.pow(a.longitude - longitude, 2)
      );
      const bDistance = Math.sqrt(
        Math.pow(b.latitude - latitude, 2) +
          Math.pow(b.longitude - longitude, 2)
      );
      return aDistance - bDistance;
    });
  }

  async getUsers(
    context: Context,
    where: UserWhereInput,
    orderBy: UserOrderByWithRelationInput,
    pagination: PaginationArgsType
  ): Promise<User[]> {
    return await context.prisma.user.findMany({
      where,
      orderBy,
      ...pagination,
    });
  }

  async registerUser(context: Context, input: CreateUserInput): Promise<User> {
    if (context.user!.type !== UserTypeChoice.ADMIN) {
      throw new UserInputError("You are not authorized to perform this action");
    }
    if (input.type === UserTypeChoice.ADMIN) {
      throw new UserInputError("You cannot create an admin");
    }
    if (input.type === UserTypeChoice.DRIVER) {
      if (!input.driverTruckNumber) {
        throw new UserInputError("You must provide a truck number");
      }
      if (!input.driverTruckType) {
        throw new UserInputError("You must provide a truck type");
      }
    }
    if (input.password != input.confirmPassword) {
      throw new UserInputError("Passwords do not match");
    }
    delete input.confirmPassword;
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(input.password, salt);
    input.password = hash;

    try {
      return await context.prisma.user.create({
        data: {
          ...input,
          noOfPasswordsChanged: 1,
          latitude: 0,
          longitude: 0,
          locationName: "",
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          const error =
            e.meta && Array.isArray(e.meta.target)
              ? `A user with this ${e.meta.target[0]} already exists.`
              : "A user must be unique.";
          console.log(e);
          throw new UserInputError(error);
        } else {
          console.log(e);
          throw e;
        }
      }
      console.log(e);
      throw e;
    }
  }

  async login(context: Context, input: LoginInput): Promise<LoginResponse> {
    const e = `No ${toTitleCase(input.type)} with this credentials exists.`;

    // Get our user by phone
    const user = await context.prisma.user.findFirst({
      where: {
        type: input.type,
        username: input.username,
      },
    });

    if (!user) {
      throw new UserInputError(e);
    }

    // validate the password
    const passwordIsValid = await bcrypt.compare(input.password, user.password);

    if (!passwordIsValid) {
      throw new UserInputError(e);
    }

    const { id, noOfPasswordsChanged } = user;

    // sign a jwt
    const token = signJwt({ id, noOfPasswordsChanged });

    // return the jwt
    return { user, token };
  }

  logout(context: Context): boolean {
    _logout(context);
    return true;
  }

  async getNearestColdStores(
    context: Context,
    where: UserWhereInput,
    orderBy: UserOrderByWithRelationInput,
    pagination: PaginationArgsType
  ) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const users = await context.prisma.user.findMany({
      where: {
        ...where,
        type: UserTypeChoice.COLD_STORAGE_OWNER,
      },
      orderBy,
      ...pagination,
    });

    return this.sortUsersAccordingToDistance(
      users,
      context.user!.latitude,
      context.user!.longitude
    );
  }

  async getNearestDrivers(
    context: Context,
    where: UserWhereInput,
    orderBy: UserOrderByWithRelationInput,
    pagination: PaginationArgsType
  ) {
    const users = await context.prisma.user.findMany({
      where: {
        ...where,
        type: UserTypeChoice.DRIVER,
      },
      orderBy,
      ...pagination,
    });

    return this.sortUsersAccordingToDistance(
      users,
      context.user!.latitude,
      context.user!.longitude
    );
  }

  async setUserLocation(context: Context, input: SetUserLocationInput) {
    await context.prisma.user.update({
      where: {
        id: context.user!.id,
      },
      data: {
        ...input,
      },
    });
    return true;
  }

  async setDriverTruckNumber(context: Context, driverTruckNumber: string) {
    await context.prisma.user.update({
      where: {
        id: context.user!.id,
      },
      data: {
        driverTruckNumber,
      },
    });
    return true;
  }
}

export default UserService;

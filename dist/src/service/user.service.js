"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../utils/jwt");
const logout_1 = __importDefault(require("../utils/logout"));
const client_1 = require("@prisma/client");
const toTitleCase_1 = require("../utils/toTitleCase");
class UserService {
    sortUsersAccordingToDistance(users, latitude, longitude) {
        return users.sort((a, b) => {
            const aDistance = Math.sqrt(Math.pow(a.latitude - latitude, 2) +
                Math.pow(a.longitude - longitude, 2));
            const bDistance = Math.sqrt(Math.pow(b.latitude - latitude, 2) +
                Math.pow(b.longitude - longitude, 2));
            return aDistance - bDistance;
        });
    }
    async getUsers(context, where, orderBy, pagination) {
        return await context.prisma.user.findMany({
            where,
            orderBy,
            ...pagination,
        });
    }
    async registerUser(context, input) {
        if (input.password != input.confirmPassword) {
            throw new apollo_server_express_1.UserInputError("Passwords do not match");
        }
        delete input.confirmPassword;
        const salt = await bcrypt_1.default.genSalt(10);
        const hash = bcrypt_1.default.hashSync(input.password, salt);
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
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2002") {
                    const error = e.meta && Array.isArray(e.meta.target)
                        ? `A user with this ${e.meta.target[0]} already exists.`
                        : "A user must be unique.";
                    console.log(e);
                    throw new apollo_server_express_1.UserInputError(error);
                }
                else {
                    console.log(e);
                    throw e;
                }
            }
            console.log(e);
            throw e;
        }
    }
    async login(context, input) {
        const e = `No ${(0, toTitleCase_1.toTitleCase)(input.type)} with this credentials exists.`;
        // Get our user by phone
        const user = await context.prisma.user.findFirst({
            where: {
                type: input.type,
                username: input.username,
            },
        });
        if (!user) {
            throw new apollo_server_express_1.UserInputError(e);
        }
        // validate the password
        const passwordIsValid = await bcrypt_1.default.compare(input.password, user.password);
        if (!passwordIsValid) {
            throw new apollo_server_express_1.UserInputError(e);
        }
        const { id, noOfPasswordsChanged } = user;
        // sign a jwt
        const token = (0, jwt_1.signJwt)({ id, noOfPasswordsChanged });
        // return the jwt
        return { user, token };
    }
    logout(context) {
        (0, logout_1.default)(context);
        return true;
    }
    async getNearestColdStores(context, where, orderBy, pagination) {
        const users = await context.prisma.user.findMany({
            where: {
                ...where,
                type: client_1.UserTypeChoice.COLD_STORAGE_OWNER,
            },
            orderBy,
            ...pagination,
        });
        return this.sortUsersAccordingToDistance(users, context.user.latitude, context.user.longitude);
    }
    async getNearestDrivers(context, where, orderBy, pagination) {
        const users = await context.prisma.user.findMany({
            where: {
                ...where,
                type: client_1.UserTypeChoice.DRIVER,
            },
            orderBy,
            ...pagination,
        });
        return this.sortUsersAccordingToDistance(users, context.user.latitude, context.user.longitude);
    }
    async setUserLocation(context, input) {
        await context.prisma.user.update({
            where: {
                id: context.user.id,
            },
            data: {
                ...input,
            },
        });
        return true;
    }
    async setDriverTruckNumber(context, driverTruckNumber) {
        await context.prisma.user.update({
            where: {
                id: context.user.id,
            },
            data: {
                driverTruckNumber,
            },
        });
        return true;
    }
}
exports.default = UserService;

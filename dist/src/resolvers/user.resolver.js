"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const user_schema_1 = require("../schema/user.schema");
const user_service_1 = __importDefault(require("../service/user.service"));
const user_schema_2 = require("../schema/user.schema");
const type_graphql_2 = require("@generated/type-graphql");
const utilities_1 = require("./utilities");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
        this.userService = new user_service_1.default();
    }
    getUsers(context, where, orderBy, pagination) {
        return this.userService.getUsers(context, where, orderBy, pagination);
    }
    registerUser(context, input) {
        return this.userService.registerUser(context, input);
    }
    login(context, input) {
        return this.userService.login(context, input);
    }
    logout(context) {
        return this.userService.logout(context);
    }
    async getNearestColdStores(context, where, orderBy, pagination) {
        return this.userService.getNearestColdStores(context, where, orderBy, pagination);
    }
    async setUserLocation(context, input) {
        return this.userService.setUserLocation(context, input);
    }
    async setDriverTruckNumber(context, driverTruckNumber) {
        return this.userService.setDriverTruckNumber(context, driverTruckNumber);
    }
    async getNearestDrivers(context, where, orderBy, pagination) {
        return this.userService.getNearestDrivers(context, where, orderBy, pagination);
    }
    me(context) {
        return context.user;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.User], { nullable: false }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("where", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("orderBy", { nullable: true })),
    __param(3, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, type_graphql_2.UserWhereInput,
        type_graphql_2.UserOrderByWithRelationInput,
        utilities_1.PaginationArgsType]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => type_graphql_2.User),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_schema_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "registerUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_schema_1.LoginResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_schema_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], UserResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.User], { nullable: false }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("where", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("orderBy", { nullable: true })),
    __param(3, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, type_graphql_2.UserWhereInput,
        type_graphql_2.UserOrderByWithRelationInput,
        utilities_1.PaginationArgsType]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getNearestColdStores", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_schema_2.SetUserLocationInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "setUserLocation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("driverTruckNumber")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "setDriverTruckNumber", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.User], { nullable: false }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("where", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("orderBy", { nullable: true })),
    __param(3, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, type_graphql_2.UserWhereInput,
        type_graphql_2.UserOrderByWithRelationInput,
        utilities_1.PaginationArgsType]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getNearestDrivers", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_2.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UserResolver.prototype, "me", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.User),
    __metadata("design:paramtypes", [user_service_1.default])
], UserResolver);
exports.default = UserResolver;

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
const type_graphql_2 = require("@generated/type-graphql");
const utilities_1 = require("./utilities");
const coldStorageItem_service_1 = __importDefault(require("../service/coldStorageItem.service"));
const coldStorageItem_schema_1 = require("../schema/coldStorageItem.schema");
let ColdStorageItemResolver = class ColdStorageItemResolver {
    constructor(coldStorageItemService) {
        this.coldStorageItemService = coldStorageItemService;
        this.coldStorageItemService = new coldStorageItem_service_1.default();
    }
    getColdStorageItems(context, where, orderBy, pagination) {
        return this.coldStorageItemService.getColdStorageItems(context, where, orderBy, pagination);
    }
    createOrUpdateColdStorageItem(context, input) {
        return this.coldStorageItemService.createOrUpdateColdStorageItem(context, input);
    }
};
__decorate([
    (0, type_graphql_1.Authorized)(type_graphql_2.UserTypeChoice.ADMIN),
    (0, type_graphql_1.Query)(() => [type_graphql_2.ColdStorageItem], { nullable: false }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("where", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("orderBy", { nullable: true })),
    __param(3, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, type_graphql_2.ColdStorageItemWhereInput,
        type_graphql_2.ColdStorageItemOrderByWithRelationInput,
        utilities_1.PaginationArgsType]),
    __metadata("design:returntype", Promise)
], ColdStorageItemResolver.prototype, "getColdStorageItems", null);
__decorate([
    (0, type_graphql_1.Authorized)(type_graphql_2.UserTypeChoice.COLD_STORAGE_OWNER),
    (0, type_graphql_1.Mutation)(() => type_graphql_2.ColdStorageItem),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, coldStorageItem_schema_1.CreateOrUpdateColdStorageItemInput]),
    __metadata("design:returntype", Promise)
], ColdStorageItemResolver.prototype, "createOrUpdateColdStorageItem", null);
ColdStorageItemResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.ColdStorageItem),
    __metadata("design:paramtypes", [coldStorageItem_service_1.default])
], ColdStorageItemResolver);
exports.default = ColdStorageItemResolver;

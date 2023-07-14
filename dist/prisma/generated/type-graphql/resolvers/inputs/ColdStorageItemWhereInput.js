"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ColdStorageItemWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColdStorageItemWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumColdStorageItemTypeChoiceFilter_1 = require("../inputs/EnumColdStorageItemTypeChoiceFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ColdStorageItemWhereInput = exports.ColdStorageItemWhereInput = ColdStorageItemWhereInput_1 = class ColdStorageItemWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "uInt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "ownerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumColdStorageItemTypeChoiceFilter_1.EnumColdStorageItemTypeChoiceFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemWhereInput.prototype, "owner", void 0);
exports.ColdStorageItemWhereInput = ColdStorageItemWhereInput = ColdStorageItemWhereInput_1 = __decorate([
    TypeGraphQL.InputType("ColdStorageItemWhereInput", {})
], ColdStorageItemWhereInput);

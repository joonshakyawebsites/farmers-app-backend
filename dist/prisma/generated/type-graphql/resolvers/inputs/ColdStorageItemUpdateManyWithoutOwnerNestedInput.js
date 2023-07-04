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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColdStorageItemUpdateManyWithoutOwnerNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ColdStorageItemCreateManyOwnerInputEnvelope_1 = require("../inputs/ColdStorageItemCreateManyOwnerInputEnvelope");
const ColdStorageItemCreateOrConnectWithoutOwnerInput_1 = require("../inputs/ColdStorageItemCreateOrConnectWithoutOwnerInput");
const ColdStorageItemCreateWithoutOwnerInput_1 = require("../inputs/ColdStorageItemCreateWithoutOwnerInput");
const ColdStorageItemScalarWhereInput_1 = require("../inputs/ColdStorageItemScalarWhereInput");
const ColdStorageItemUpdateManyWithWhereWithoutOwnerInput_1 = require("../inputs/ColdStorageItemUpdateManyWithWhereWithoutOwnerInput");
const ColdStorageItemUpdateWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/ColdStorageItemUpdateWithWhereUniqueWithoutOwnerInput");
const ColdStorageItemUpsertWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/ColdStorageItemUpsertWithWhereUniqueWithoutOwnerInput");
const ColdStorageItemWhereUniqueInput_1 = require("../inputs/ColdStorageItemWhereUniqueInput");
let ColdStorageItemUpdateManyWithoutOwnerNestedInput = exports.ColdStorageItemUpdateManyWithoutOwnerNestedInput = class ColdStorageItemUpdateManyWithoutOwnerNestedInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemCreateWithoutOwnerInput_1.ColdStorageItemCreateWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemCreateOrConnectWithoutOwnerInput_1.ColdStorageItemCreateOrConnectWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemUpsertWithWhereUniqueWithoutOwnerInput_1.ColdStorageItemUpsertWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ColdStorageItemCreateManyOwnerInputEnvelope_1.ColdStorageItemCreateManyOwnerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemWhereUniqueInput_1.ColdStorageItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemWhereUniqueInput_1.ColdStorageItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemWhereUniqueInput_1.ColdStorageItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemWhereUniqueInput_1.ColdStorageItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemUpdateWithWhereUniqueWithoutOwnerInput_1.ColdStorageItemUpdateWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemUpdateManyWithWhereWithoutOwnerInput_1.ColdStorageItemUpdateManyWithWhereWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ColdStorageItemScalarWhereInput_1.ColdStorageItemScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemUpdateManyWithoutOwnerNestedInput.prototype, "deleteMany", void 0);
exports.ColdStorageItemUpdateManyWithoutOwnerNestedInput = ColdStorageItemUpdateManyWithoutOwnerNestedInput = __decorate([
    TypeGraphQL.InputType("ColdStorageItemUpdateManyWithoutOwnerNestedInput", {})
], ColdStorageItemUpdateManyWithoutOwnerNestedInput);
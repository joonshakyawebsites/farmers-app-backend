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
exports.UserCreateWithoutColdStorageItemsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserTypeChoice_1 = require("../../enums/UserTypeChoice");
let UserCreateWithoutColdStorageItemsInput = exports.UserCreateWithoutColdStorageItemsInput = class UserCreateWithoutColdStorageItemsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutColdStorageItemsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutColdStorageItemsInput.prototype, "fullName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutColdStorageItemsInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutColdStorageItemsInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserTypeChoice_1.UserTypeChoice, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutColdStorageItemsInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutColdStorageItemsInput.prototype, "noOfPasswordsChanged", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutColdStorageItemsInput.prototype, "avatar", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutColdStorageItemsInput.prototype, "locationName", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserCreateWithoutColdStorageItemsInput.prototype, "latitude", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserCreateWithoutColdStorageItemsInput.prototype, "longitude", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutColdStorageItemsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutColdStorageItemsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutColdStorageItemsInput.prototype, "driverTruckNumber", void 0);
exports.UserCreateWithoutColdStorageItemsInput = UserCreateWithoutColdStorageItemsInput = __decorate([
    TypeGraphQL.InputType("UserCreateWithoutColdStorageItemsInput", {})
], UserCreateWithoutColdStorageItemsInput);

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponse = exports.SetUserLocationInput = exports.LoginInput = exports.CreateUserInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("@generated/type-graphql");
let CreateUserInput = exports.CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_2.UserTypeChoice),
    __metadata("design:type", String)
], CreateUserInput.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, {
        message: "password must be at least 6 characters long",
    }),
    (0, class_validator_1.MaxLength)(50, {
        message: "password must not be longer than 50 characters",
    }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "confirmPassword", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "username", void 0);
exports.CreateUserInput = CreateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateUserInput);
let LoginInput = exports.LoginInput = class LoginInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_2.UserTypeChoice),
    __metadata("design:type", String)
], LoginInput.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
exports.LoginInput = LoginInput = __decorate([
    (0, type_graphql_1.InputType)()
], LoginInput);
let SetUserLocationInput = exports.SetUserLocationInput = class SetUserLocationInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], SetUserLocationInput.prototype, "locationName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], SetUserLocationInput.prototype, "latitude", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], SetUserLocationInput.prototype, "longitude", void 0);
exports.SetUserLocationInput = SetUserLocationInput = __decorate([
    (0, type_graphql_1.InputType)()
], SetUserLocationInput);
let LoginResponse = exports.LoginResponse = class LoginResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginResponse.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_2.User),
    __metadata("design:type", type_graphql_2.User)
], LoginResponse.prototype, "user", void 0);
exports.LoginResponse = LoginResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], LoginResponse);

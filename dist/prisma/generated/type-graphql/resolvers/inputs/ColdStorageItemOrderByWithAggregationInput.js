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
exports.ColdStorageItemOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ColdStorageItemAvgOrderByAggregateInput_1 = require("../inputs/ColdStorageItemAvgOrderByAggregateInput");
const ColdStorageItemCountOrderByAggregateInput_1 = require("../inputs/ColdStorageItemCountOrderByAggregateInput");
const ColdStorageItemMaxOrderByAggregateInput_1 = require("../inputs/ColdStorageItemMaxOrderByAggregateInput");
const ColdStorageItemMinOrderByAggregateInput_1 = require("../inputs/ColdStorageItemMinOrderByAggregateInput");
const ColdStorageItemSumOrderByAggregateInput_1 = require("../inputs/ColdStorageItemSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ColdStorageItemOrderByWithAggregationInput = exports.ColdStorageItemOrderByWithAggregationInput = class ColdStorageItemOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "uInt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "ownerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ColdStorageItemCountOrderByAggregateInput_1.ColdStorageItemCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ColdStorageItemAvgOrderByAggregateInput_1.ColdStorageItemAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ColdStorageItemMaxOrderByAggregateInput_1.ColdStorageItemMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => ColdStorageItemMinOrderByAggregateInput_1.ColdStorageItemMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ColdStorageItemSumOrderByAggregateInput_1.ColdStorageItemSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ColdStorageItemOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.ColdStorageItemOrderByWithAggregationInput = ColdStorageItemOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("ColdStorageItemOrderByWithAggregationInput", {})
], ColdStorageItemOrderByWithAggregationInput);

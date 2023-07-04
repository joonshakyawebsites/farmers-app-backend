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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    ColdStorageItem: relationResolvers.ColdStorageItemRelationsResolver
};
const relationResolversInfo = {
    User: ["coldStorageItems"],
    ColdStorageItem: ["owner"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "fullName", "username", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    ColdStorageItem: ["id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber", "coldStorageItems"],
    UserOrderByWithRelationInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber", "coldStorageItems"],
    UserWhereUniqueInput: ["id", "username"],
    UserOrderByWithAggregationInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    ColdStorageItemWhereInput: ["AND", "OR", "NOT", "id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt", "owner"],
    ColdStorageItemOrderByWithRelationInput: ["id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt", "owner"],
    ColdStorageItemWhereUniqueInput: ["id", "ownerId_uInt"],
    ColdStorageItemOrderByWithAggregationInput: ["id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    ColdStorageItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber", "coldStorageItems"],
    UserUpdateInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber", "coldStorageItems"],
    UserCreateManyInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    UserUpdateManyMutationInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    ColdStorageItemCreateInput: ["id", "uInt", "name", "type", "quantity", "date", "createdAt", "updatedAt", "owner"],
    ColdStorageItemUpdateInput: ["id", "uInt", "name", "type", "quantity", "date", "createdAt", "updatedAt", "owner"],
    ColdStorageItemCreateManyInput: ["id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    ColdStorageItemUpdateManyMutationInput: ["id", "uInt", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumUserTypeChoiceFilter: ["equals", "in", "notIn", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ColdStorageItemListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    ColdStorageItemOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    UserAvgOrderByAggregateInput: ["noOfPasswordsChanged", "latitude", "longitude"],
    UserMaxOrderByAggregateInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    UserMinOrderByAggregateInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    UserSumOrderByAggregateInput: ["noOfPasswordsChanged", "latitude", "longitude"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumUserTypeChoiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumColdStorageItemTypeChoiceFilter: ["equals", "in", "notIn", "not"],
    UserRelationFilter: ["is", "isNot"],
    ColdStorageItemOwnerIdUIntCompoundUniqueInput: ["ownerId", "uInt"],
    ColdStorageItemCountOrderByAggregateInput: ["id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    ColdStorageItemAvgOrderByAggregateInput: ["uInt", "quantity"],
    ColdStorageItemMaxOrderByAggregateInput: ["id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    ColdStorageItemMinOrderByAggregateInput: ["id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    ColdStorageItemSumOrderByAggregateInput: ["uInt", "quantity"],
    EnumColdStorageItemTypeChoiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    ColdStorageItemCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumUserTypeChoiceFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    ColdStorageItemUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutColdStorageItemsInput: ["create", "connectOrCreate", "connect"],
    EnumColdStorageItemTypeChoiceFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutColdStorageItemsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumUserTypeChoiceFilter: ["equals", "in", "notIn", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedEnumUserTypeChoiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedEnumColdStorageItemTypeChoiceFilter: ["equals", "in", "notIn", "not"],
    NestedEnumColdStorageItemTypeChoiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    ColdStorageItemCreateWithoutOwnerInput: ["id", "uInt", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    ColdStorageItemCreateOrConnectWithoutOwnerInput: ["where", "create"],
    ColdStorageItemCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
    ColdStorageItemUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
    ColdStorageItemUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
    ColdStorageItemUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
    ColdStorageItemScalarWhereInput: ["AND", "OR", "NOT", "id", "uInt", "ownerId", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    UserCreateWithoutColdStorageItemsInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    UserCreateOrConnectWithoutColdStorageItemsInput: ["where", "create"],
    UserUpsertWithoutColdStorageItemsInput: ["update", "create"],
    UserUpdateWithoutColdStorageItemsInput: ["id", "fullName", "username", "password", "type", "noOfPasswordsChanged", "avatar", "locationName", "latitude", "longitude", "createdAt", "updatedAt", "driverTruckNumber"],
    ColdStorageItemCreateManyOwnerInput: ["id", "uInt", "name", "type", "quantity", "date", "createdAt", "updatedAt"],
    ColdStorageItemUpdateWithoutOwnerInput: ["id", "uInt", "name", "type", "quantity", "date", "createdAt", "updatedAt"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;

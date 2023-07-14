"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ColdStorageItemService {
    async getColdStorageItems(context, where, orderBy, pagination) {
        return await context.prisma.coldStorageItem.findMany({
            where,
            orderBy,
            ...pagination,
        });
    }
    async createOrUpdateColdStorageItem(context, input) {
        const item = await context.prisma.coldStorageItem.findFirst({
            where: {
                uInt: input.uInt,
            },
        });
        if (item) {
            return await context.prisma.coldStorageItem.update({
                where: {
                    ownerId_uInt: {
                        ownerId: context.user.id,
                        uInt: input.uInt,
                    },
                },
                data: input,
            });
        }
        return await context.prisma.coldStorageItem.create({
            data: {
                ...input,
                owner: {
                    connect: {
                        id: context.user.id,
                    },
                },
            },
        });
    }
}
exports.default = ColdStorageItemService;

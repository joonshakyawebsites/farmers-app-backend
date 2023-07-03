-- CreateEnum
CREATE TYPE "UserTypeChoice" AS ENUM ('FARMER', 'COLD_STORAGE_OWNER', 'DRIVER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ColdStorageItemTypeChoice" AS ENUM ('FOOD', 'LIQUID');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "UserTypeChoice" NOT NULL DEFAULT 'FARMER',
    "noOfPasswordsChanged" INTEGER NOT NULL DEFAULT 0,
    "avatar" TEXT,
    "locationName" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "driverTruckNumber" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColdStorageItem" (
    "id" SERIAL NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ColdStorageItemTypeChoice" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ColdStorageItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "ColdStorageItem" ADD CONSTRAINT "ColdStorageItem_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

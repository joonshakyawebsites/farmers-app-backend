/*
  Warnings:

  - You are about to drop the column `TruckType` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "TruckType",
ADD COLUMN     "driverTruckType" "TruckTypeChoice";

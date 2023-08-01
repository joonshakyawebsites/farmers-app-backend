-- CreateEnum
CREATE TYPE "TruckTypeChoice" AS ENUM ('NORMAL_CARGO_TRUCK', 'REFRIGERATOR_TRUCK');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "TruckType" "TruckTypeChoice";

/*
  Warnings:

  - Made the column `locationName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "locationName" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL;

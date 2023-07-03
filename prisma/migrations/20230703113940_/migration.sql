/*
  Warnings:

  - The primary key for the `ColdStorageItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[ownerId,uInt]` on the table `ColdStorageItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uInt` to the `ColdStorageItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ColdStorageItem" DROP CONSTRAINT "ColdStorageItem_pkey",
ADD COLUMN     "uInt" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ColdStorageItem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ColdStorageItem_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "ColdStorageItem_ownerId_uInt_key" ON "ColdStorageItem"("ownerId", "uInt");

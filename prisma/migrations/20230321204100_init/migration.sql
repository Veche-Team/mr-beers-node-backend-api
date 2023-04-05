/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Beverages` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Snacks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Beverages" ADD COLUMN "imagePath" TEXT;

-- AlterTable
ALTER TABLE "Snacks" ADD COLUMN "imagePath" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Beverages_name_key" ON "Beverages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Snacks_name_key" ON "Snacks"("name");

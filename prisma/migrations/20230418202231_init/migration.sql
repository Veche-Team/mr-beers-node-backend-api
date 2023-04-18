/*
  Warnings:

  - Added the required column `category` to the `Beverages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Snacks" ADD COLUMN "weight" REAL;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beverages" (
    "UID" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "volume" REAL NOT NULL,
    "alcPercentage" REAL NOT NULL,
    "tags" TEXT,
    "isAvaliable" BOOLEAN,
    "salePercentage" REAL,
    "imagePath" TEXT
);
INSERT INTO "new_Beverages" ("UID", "alcPercentage", "createdAt", "description", "imagePath", "name", "price", "type", "updatedAt", "volume") SELECT "UID", "alcPercentage", "createdAt", "description", "imagePath", "name", "price", "type", "updatedAt", "volume" FROM "Beverages";
DROP TABLE "Beverages";
ALTER TABLE "new_Beverages" RENAME TO "Beverages";
CREATE UNIQUE INDEX "Beverages_name_key" ON "Beverages"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to alter the column `alcPercentage` on the `Beverages` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `price` on the `Beverages` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `volume` on the `Beverages` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beverages" (
    "UID" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "volume" REAL NOT NULL,
    "alcPercentage" REAL NOT NULL
);
INSERT INTO "new_Beverages" ("UID", "alcPercentage", "createdAt", "description", "name", "price", "type", "updatedAt", "volume") SELECT "UID", "alcPercentage", "createdAt", "description", "name", "price", "type", "updatedAt", "volume" FROM "Beverages";
DROP TABLE "Beverages";
ALTER TABLE "new_Beverages" RENAME TO "Beverages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

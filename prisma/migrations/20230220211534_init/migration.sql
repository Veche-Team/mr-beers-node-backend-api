/*
  Warnings:

  - You are about to alter the column `price` on the `Snacks` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Snacks" (
    "UID" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Snacks" ("UID", "createdAt", "description", "name", "price", "type", "updatedAt") SELECT "UID", "createdAt", "description", "name", "price", "type", "updatedAt" FROM "Snacks";
DROP TABLE "Snacks";
ALTER TABLE "new_Snacks" RENAME TO "Snacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

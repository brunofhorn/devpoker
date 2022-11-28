/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PlayerGame" ADD COLUMN "creator" BOOLEAN;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "average" INTEGER,
    "gameType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Game" ("average", "createdAt", "gameType", "id", "name") SELECT "average", "createdAt", "gameType", "id", "name" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

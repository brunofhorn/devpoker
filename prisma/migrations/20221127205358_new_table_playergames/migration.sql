-- CreateTable
CREATE TABLE "PlayerGame" (
    "playerId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    CONSTRAINT "PlayerGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerGame_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerGame_gameId_playerId_key" ON "PlayerGame"("gameId", "playerId");

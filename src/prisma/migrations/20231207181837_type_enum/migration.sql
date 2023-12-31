-- CreateEnum
CREATE TYPE "Type" AS ENUM ('NORMAL', 'FIRE', 'WATER', 'GRASS', 'ELECTRIC', 'ICE', 'FIGHTING', 'POISON', 'GROUND', 'FLYING', 'PSYCHIC', 'BUG', 'ROCK', 'GHOST', 'DRAGON', 'STEEL', 'FAIRY');

-- CreateTable
CREATE TABLE "Raid" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Raid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateProvince" TEXT,
    "webPages" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

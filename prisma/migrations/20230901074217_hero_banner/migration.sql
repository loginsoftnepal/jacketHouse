-- CreateTable
CREATE TABLE "HeroBanner" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "HeroBanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesBanner" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "SalesBanner_pkey" PRIMARY KEY ("id")
);

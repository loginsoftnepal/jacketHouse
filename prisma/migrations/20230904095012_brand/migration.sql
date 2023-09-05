-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

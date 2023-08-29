/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "colors" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "sizes" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL,
ALTER COLUMN "available" DROP NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

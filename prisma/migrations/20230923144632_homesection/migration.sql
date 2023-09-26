-- AlterTable
ALTER TABLE "HomeSection" ALTER COLUMN "fileName" DROP NOT NULL,
ALTER COLUMN "path" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "category" DROP NOT NULL;

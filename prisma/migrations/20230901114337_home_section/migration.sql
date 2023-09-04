-- CreateTable
CREATE TABLE "HomeSection" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "fileName" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "HomeSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HomeSectionProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HomeSectionProducts_AB_unique" ON "_HomeSectionProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_HomeSectionProducts_B_index" ON "_HomeSectionProducts"("B");

-- AddForeignKey
ALTER TABLE "_HomeSectionProducts" ADD CONSTRAINT "_HomeSectionProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "HomeSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HomeSectionProducts" ADD CONSTRAINT "_HomeSectionProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

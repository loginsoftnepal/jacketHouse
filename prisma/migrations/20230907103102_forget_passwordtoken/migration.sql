-- CreateTable
CREATE TABLE "ForgetPasswordToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ForgetPasswordToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ForgetPasswordToken_token_key" ON "ForgetPasswordToken"("token");

-- AddForeignKey
ALTER TABLE "ForgetPasswordToken" ADD CONSTRAINT "ForgetPasswordToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

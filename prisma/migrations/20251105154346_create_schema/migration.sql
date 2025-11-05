-- CreateEnum
CREATE TYPE "Messanger" AS ENUM ('Telegram', 'Whatsapp', 'Instagram');

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "messanger" "Messanger" NOT NULL DEFAULT 'Telegram',
    "message" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

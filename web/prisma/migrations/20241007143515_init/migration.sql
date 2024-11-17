/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - The `isActif` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gender` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'SUSPENDED', 'DELETED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "activationToken" VARCHAR(255),
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "lastname" VARCHAR(75) NOT NULL,
ADD COLUMN     "resetToken" VARCHAR(255),
ADD COLUMN     "resetTokenExpiration" TIMESTAMP(3),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
DROP COLUMN "isActif",
ADD COLUMN     "isActif" "Status" NOT NULL DEFAULT 'ACTIVE',
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'OTHER';

-- CreateTable
CREATE TABLE "Event" (
    "id_event" SERIAL NOT NULL,
    "adress" VARCHAR(150) NOT NULL,
    "price" INTEGER NOT NULL,
    "schedule" TIME NOT NULL,
    "event_date" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id_event")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

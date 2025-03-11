/*
  Warnings:

  - You are about to drop the column `payment_method_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the `payment_methods` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `acquirer` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_method` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_payment_method_id_fkey";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "payment_method_id",
ADD COLUMN     "acquirer" TEXT NOT NULL,
ADD COLUMN     "payment_method" TEXT NOT NULL;

-- DropTable
DROP TABLE "payment_methods";

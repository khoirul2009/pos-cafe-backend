/*
  Warnings:

  - You are about to drop the `booking_talents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `talents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "booking_talents" DROP CONSTRAINT "booking_talents_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "booking_talents" DROP CONSTRAINT "booking_talents_talent_id_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_service_id_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_user_id_fkey";

-- DropTable
DROP TABLE "booking_talents";

-- DropTable
DROP TABLE "reviews";

-- DropTable
DROP TABLE "talents";

-- CreateTable
CREATE TABLE "booking_dates" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "booking_id" INTEGER NOT NULL,

    CONSTRAINT "booking_dates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "booking_dates" ADD CONSTRAINT "booking_dates_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

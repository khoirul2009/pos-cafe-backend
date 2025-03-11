-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "billing_num" TEXT,
ADD COLUMN     "qr_url" TEXT,
ADD COLUMN     "redirect_url" TEXT;

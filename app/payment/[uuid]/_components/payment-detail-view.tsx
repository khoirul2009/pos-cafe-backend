'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon, ExternalLinkIcon } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Payment } from '@/prisma/generated/client';
import HomeLayout from '@/components/layout/home-layout';
import { toast } from 'sonner';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentDetailView() {
  const [copied, setCopied] = useState(false);

  const [payment, setPayment] = useState<Payment>();
  const { uuid } = useParams();

  // Sample payment data for preview purposes
  const samplePayment = payment || {
    payment_uuid: 'PMT-123456789-ABCDEF',
    payment_method: 'bank_transfer', // Options: qris, bank_transfer, e-wallet
    acquirer: 'BCA Virtual Account',
    status: 'pending', // Options: pending, completed, failed
    billing_num: '12345678901234',
    qr_url: 'https://example.com/qr-codes/payment123.png', // URL to the QR code image
    redirect_url: 'https://ewallet.example.com/pay/123456'
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  const fetchPayment = async () => {
    try {
      const response = await axios.get(`/api/payment/${uuid}`);
      setPayment(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch payment detail');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'settlement':
        return 'bg-green-100 text-green-800'; // Transaksi berhasil
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'; // Menunggu pembayaran
      case 'cancel':
      case 'expired':
      case 'deny':
        return 'bg-gray-100 text-gray-800'; // Transaksi dibatalkan/ditolak
      case 'failure':
        return 'bg-red-100 text-red-800'; // Transaksi gagal
      case 'refund':
        return 'bg-blue-100 text-blue-800'; // Transaksi dikembalikan
      default:
        return 'bg-gray-100 text-gray-800'; // Status tidak dikenal
    }
  };

  const formatStatus = (status: string) => {
    if (!status) return 'Unknown';
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  };

  return (
    <HomeLayout>
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center p-4">
        <Card className="shadow-lg">
          <CardHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">
                Payment Details
              </CardTitle>
              <Badge className={getStatusColor(samplePayment.status)}>
                {formatStatus(samplePayment.status)}
              </Badge>
            </div>
            <CardDescription className="text-gray-500">
              Transaction reference: {samplePayment.payment_uuid}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            {/* Payment Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Payment Method</div>
                <div className="text-right text-sm font-medium">
                  {samplePayment.payment_method
                    .replace('_', ' ')
                    .replace(/\b\w/g, (l: any) => l.toUpperCase())}
                </div>

                <div className="text-sm text-gray-500">Acquirer</div>
                <div className="text-right text-sm font-medium uppercase">
                  {samplePayment.acquirer}
                </div>
              </div>
            </div>

            {payment?.status === 'pending' ? (
              <div className="border-t pt-4">
                {samplePayment.payment_method === 'qris' && (
                  <div className="flex flex-col items-center space-y-3">
                    <div className="mb-2 text-center">
                      <h3 className="font-medium text-gray-800">
                        QRIS Payment
                      </h3>
                      <p className="text-sm text-gray-500">
                        Scan this QR code with your payment app
                      </p>
                    </div>

                    {/* QR Code Image */}
                    <div className="rounded-lg border bg-white p-4">
                      {samplePayment.qr_url ? (
                        <img
                          src={samplePayment.qr_url}
                          alt="QRIS Payment QR Code"
                          className="h-48 w-48 object-contain"
                        />
                      ) : (
                        <div className="flex h-48 w-48 items-center justify-center bg-gray-100 text-sm text-gray-400">
                          QR Code not available
                        </div>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      Valid for 10 minutes
                    </p>
                  </div>
                )}

                {samplePayment.payment_method === 'bank_transfer' &&
                samplePayment.billing_num !== null ? (
                  <div className="space-y-3">
                    <div className="mb-2 text-center">
                      <h3 className="font-medium text-gray-800">
                        Virtual Account Details
                      </h3>
                      <p className="text-sm text-gray-500">
                        Transfer the exact amount to this account number
                      </p>
                    </div>

                    <Alert className="border bg-gray-50">
                      <div className="flex items-center justify-between">
                        <AlertDescription className="font-mono text-base tracking-wide">
                          {samplePayment.billing_num}
                        </AlertDescription>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(samplePayment.billing_num!)
                          }
                          className="h-8"
                        >
                          {copied ? (
                            <CheckIcon className="h-4 w-4" />
                          ) : (
                            <CopyIcon className="h-4 w-4" />
                          )}
                          <span className="ml-1">
                            {copied ? 'Copied' : 'Copy'}
                          </span>
                        </Button>
                      </div>
                    </Alert>

                    <p className="text-center text-xs text-gray-500">
                      VA number will expire in 24 hours
                    </p>
                  </div>
                ) : (
                  ''
                )}

                {samplePayment.payment_method === 'e-wallet' &&
                samplePayment.redirect_url != null ? (
                  <div className="space-y-3">
                    <div className="mb-2 text-center">
                      <h3 className="font-medium text-gray-800">
                        E-Wallet Payment
                      </h3>
                      <p className="text-sm text-gray-500">
                        Complete your payment with your e-wallet app
                      </p>
                    </div>

                    <Button
                      className="w-full bg-blue-600 text-white hover:bg-blue-700"
                      onClick={() =>
                        window.open(samplePayment.redirect_url!, '_blank')
                      }
                    >
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Continue to Payment App
                    </Button>

                    <p className="text-center text-xs text-gray-500">
                      You will be redirected to complete the payment
                    </p>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <Button className="mx-auto w-full">
                <Link
                  className="w-full"
                  href={`/booking/${payment?.booking_id}`}
                >
                  See Booking
                </Link>
              </Button>
            )}

            {/* Footer */}
            <div className="border-t pt-4">
              <p className="text-center text-xs text-gray-500">
                If you have any issues with your payment, please contact our
                support team.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </HomeLayout>
  );
}

import React from 'react';
import { format } from 'date-fns';
import {
  Calendar,
  Clock,
  MapPin,
  Check,
  X,
  CreditCard,
  Image,
  RefreshCw,
  QrCode
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import HomeLayout from '@/components/layout/home-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import axios from 'axios';

// Define types
interface Payment {
  id: number;
  payment_uuid: string;
  booking_id: number;
  amount: number;
  status: string;
  created_at: string;
  updated_at: string;
  payment_method: string;
  acquirer: string;
  qr_url: string | null;
  redirect_url: string | null;
  billing_num: string | null;
  type: string;
}

interface Service {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: number;
  description: string;
  category_id: number;
  available: boolean;
  created_at: string;
  updated_at: string;
}

interface BookingData {
  id: number;
  user_id: number;
  service_id: number;
  date: string;
  time: string;
  location: string;
  is_accepted: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  service: Service;
  payments: Payment[];
}

export default async function BookingView({ id }: { id: string }) {
  const appUrl = process.env.NEXTAUTH_URL;
  const data: BookingData = (await axios.get(`${appUrl}/api/booking/${id}`))
    .data.data;

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Helper function to get appropriate badge color based on status
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'settlement':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColorBooking = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'; // Kuning untuk pending
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'; // Biru untuk confirmed
      case 'completed':
        return 'bg-green-100 text-green-800'; // Hijau untuk completed
      case 'canceled':
        return 'bg-red-100 text-red-800'; // Merah untuk canceled
      default:
        return 'bg-gray-100 text-gray-800'; // Default abu-abu
    }
  };

  // Helper function to get payment method icon
  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'bank_transfer':
        return <CreditCard className="mr-1 h-4 w-4" />;
      case 'qris':
        return <QrCode className="mr-1 h-4 w-4" />;
      default:
        return <CreditCard className="mr-1 h-4 w-4" />;
    }
  };

  // Calculate total paid
  const totalPaid = data.payments
    .filter((payment) => payment.status === 'settlement')
    .reduce((sum, payment) => sum + payment.amount, 0);

  // Calculate remaining payment
  const remainingPayment = data.service.price - totalPaid;

  return (
    <HomeLayout>
      <div className="container mx-auto py-8">
        <div className="flex flex-col space-y-6">
          {/* Booking Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Detail Pemesanan</h1>
            <Badge
              className={`px-3 py-1 text-sm font-medium ${getStatusColorBooking(
                data.status
              )}`}
            >
              {data.status === 'confirmed'
                ? 'Terkonfirmasi'
                : data.status === 'pending'
                ? 'Menunggu'
                : data.status === 'completed'
                ? 'Selesai'
                : data.status === 'canceled'
                ? 'Dibatalkan'
                : data.status}
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Service Details Card */}
            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Informasi Layanan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="relative h-48 w-full overflow-hidden rounded-md md:w-1/3">
                    <img
                      src={data.service.image}
                      alt={data.service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full space-y-3 md:w-2/3">
                    <div className="flex items-center">
                      <Image className="mr-2 h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold">
                        {data.service.title}
                      </h3>
                    </div>

                    <div className="flex items-start">
                      <Calendar className="mr-2 mt-0.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Tanggal</p>
                        <p>{format(new Date(data.date), 'dd MMMM yyyy')}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="mr-2 mt-0.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Waktu</p>
                        <p>{data.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="mr-2 mt-0.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Lokasi</p>
                        <p>{data.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Summary Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Ringkasan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Harga Layanan</span>
                    <span className="font-medium">
                      {formatCurrency(data.service.price)}
                    </span>
                  </div>

                  {data.service.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Diskon</span>
                      <span>-{formatCurrency(data.service.discount)}</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between">
                    <span>Total</span>
                    <span className="font-medium">
                      {formatCurrency(
                        data.service.price - (data.service.discount || 0)
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Sudah Dibayar</span>
                    <span>{formatCurrency(totalPaid)}</span>
                  </div>

                  {remainingPayment > 0 && (
                    <div>
                      <div className="flex justify-between font-medium text-red-600">
                        <span>Sisa Pembayaran</span>
                        <span>{formatCurrency(remainingPayment)}</span>
                      </div>
                      <Button
                        className="mt-5 w-full"
                        disabled={data.status !== 'completed'}
                      >
                        <Link href={`/repayment/${data.id}`} className="w-full">
                          Lakukan Pelunasan
                        </Link>
                      </Button>
                      <span className="text-sm text-gray-500">
                        Pelunasan dapat dilakukan ketika pemesanan sudah
                        completed (H-1 event)
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment History */}
          <Card className="w-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Riwayat Pembayaran</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Tipe</TableHead>
                    <TableHead>Metode</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Nomor Referensi</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        {format(
                          new Date(payment.created_at),
                          'dd MMM yyyy, HH:mm'
                        )}
                      </TableCell>
                      <TableCell className="capitalize">
                        {payment.type === 'dp' ? 'Uang Muka' : 'Pelunasan'}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {getPaymentMethodIcon(payment.payment_method)}
                          <span className="capitalize">
                            {payment.payment_method === 'bank_transfer'
                              ? `Transfer ${payment.acquirer.toUpperCase()}`
                              : payment.payment_method === 'qris'
                              ? 'QRIS'
                              : payment.payment_method}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{formatCurrency(payment.amount)}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            payment.status === 'settlement'
                              ? 'bg-green-100 text-green-800'
                              : payment.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : payment.status === 'expire' ||
                                payment.status === 'cancel' ||
                                payment.status === 'failure'
                              ? 'bg-red-100 text-red-800'
                              : payment.status === 'refund'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {payment.status === 'settlement' ? (
                            <div className="flex items-center gap-1">
                              <Check className="h-3 w-3" />
                              <span>Sukses</span>
                            </div>
                          ) : payment.status === 'pending' ? (
                            <div className="flex items-center gap-1">
                              <RefreshCw className="h-3 w-3" />
                              <span>Menunggu</span>
                            </div>
                          ) : payment.status === 'expire' ? (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>Kedaluwarsa</span>
                            </div>
                          ) : payment.status === 'cancel' ? (
                            <div className="flex items-center gap-1">
                              <X className="h-3 w-3" />
                              <span>Dibatalkan</span>
                            </div>
                          ) : payment.status === 'failure' ? (
                            <div className="flex items-center gap-1">
                              <X className="h-3 w-3" />
                              <span>Gagal</span>
                            </div>
                          ) : payment.status === 'refund' ? (
                            <div className="flex items-center gap-1">
                              <RefreshCw className="h-3 w-3" />
                              <span>Dikembalikan</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <span>{payment.status}</span>
                            </div>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="font-mono text-xs">
                          {payment.billing_num || '-'}
                        </span>
                      </TableCell>
                      <TableCell>
                        {payment.status === 'pending' ? (
                          <Button size="sm">
                            <Link
                              href={`/payment/${payment.payment_uuid}`}
                              className="w-full"
                            >
                              Pay Now
                            </Link>
                          </Button>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="w-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Deskripsi Layanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                dangerouslySetInnerHTML={{ __html: data.service.description }}
                className="prose max-w-none"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </HomeLayout>
  );
}

'use client';
import HomeLayout from '@/components/layout/home-layout';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Wallet, Clock, Shield, Building } from 'lucide-react';
import BankSelection from './bank-selection';
import EwalletSelection from './ewallet-selection';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';
import { Booking, Service } from '@/prisma/generated/client';
import { formatIDR } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type BookingType = Booking & {
  service: Service;
};

export default function CheckoutView() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [selectedPayment, setSelectedPayment] = useState('qris');
  const [booking, setBooking] = useState<BookingType>();
  const [acquirer, setAcquirer] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { orderId } = useParams();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(`/api/booking/${orderId}`);

      if (response.status === 200) {
        const bookingData = response.data.data;
        setBooking(bookingData);

        // Cek apakah status bukan "pending"
        if (bookingData.status !== 'pending') {
          toast.info('Booking has already paid!');

          // Redirect ke halaman lain, misalnya halaman detail booking
          setTimeout(() => {
            push(`/booking/${orderId}`);
          }, 2000);
        }
      }
    } catch (error: any) {
      toast.error('Error mendapatkan booking');
    }
  };

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!booking) {
        throw new Error('failed to get booking');
      }
      const response = await axios.post(`/api/payment`, {
        booking_id: booking.id,
        payment_method: selectedPayment,
        acquirer,
        email,
        first_name: firstName,
        last_name: lastName,
        phone,
        type: 'dp'
      });

      if (response.status === 200) {
        localStorage.setItem('payment_uuid', response.data.data.payment_uuid);
        push(`/payment/${response.data.data.payment_uuid}`);
      }
    } catch (error: any) {
      toast.error('Error get booking');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  return (
    <HomeLayout>
      <form
        onSubmit={handlePayment}
        className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Countdown Timer */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-amber-700">
              <Clock className="h-5 w-5" />
              <span className="font-medium">
                Complete checkout in: {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Main Checkout Form */}
            <div className="space-y-6 md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>
                    Select your preferred payment method
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedPayment}
                    onValueChange={setSelectedPayment}
                    className="space-y-4"
                  >
                    <div
                      className={`flex items-center space-x-4 rounded-lg border p-4 ${
                        selectedPayment === 'bank_transfer'
                          ? 'border-primary'
                          : ''
                      }`}
                    >
                      <RadioGroupItem
                        value="bank_transfer"
                        id="bank_transfer"
                      />
                      <Label
                        htmlFor="bank_transfer"
                        className="flex flex-1 items-center gap-3"
                      >
                        <Building className="h-5 w-5" />
                        Bank Transfer
                      </Label>
                    </div>
                    <div
                      className={`flex items-center space-x-4 rounded-lg border p-4 ${
                        selectedPayment === 'e-wallet' ? 'border-primary' : ''
                      }`}
                    >
                      <RadioGroupItem value="e-wallet" id="e-wallet" />
                      <Label
                        htmlFor="e-wallet"
                        className="flex flex-1 items-center gap-3"
                      >
                        <Wallet className="h-5 w-5" />
                        E-Wallet
                      </Label>
                    </div>
                    <div
                      className={`flex items-center space-x-4 rounded-lg border p-4 ${
                        selectedPayment === 'qris' ? 'border-primary' : ''
                      }`}
                    >
                      <RadioGroupItem value="qris" id="qris" />
                      <Label
                        htmlFor="qris"
                        className="flex flex-1 items-center gap-3"
                      >
                        <Wallet className="h-5 w-5" />
                        QRIS
                      </Label>
                    </div>
                  </RadioGroup>

                  <br />
                  {selectedPayment === 'bank_transfer' && (
                    <BankSelection
                      selectedBank={acquirer}
                      setSelectedBank={(e) => setAcquirer(e)}
                    />
                  )}
                  {selectedPayment === 'e-wallet' && (
                    <EwalletSelection
                      selectedBank={acquirer}
                      setSelectedBank={(e) => setAcquirer(e)}
                    />
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Budi"
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Siregar"
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="budi123@example.com"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone No</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>{booking?.service.title}</span>
                    <span>{formatIDR(booking?.service.price!)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Deposit (50%)</span>
                    <span>
                      {formatIDR(
                        booking?.service.price! - booking?.service.price! * 0.5
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total Due Now</span>
                    <span>
                      {formatIDR(
                        booking?.service.price! - booking?.service.price! * 0.5
                      )}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Remaining balance due on session day
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button
                    disabled={loading}
                    type="submit"
                    className="w-full"
                    size="lg"
                  >
                    Complete Booking
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4" />
                    <span>Secure Payment</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </form>
    </HomeLayout>
  );
}

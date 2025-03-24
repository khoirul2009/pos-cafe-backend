'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import { useEffect, useState } from 'react';
import { CalendarIcon, Camera, Clock, MapPin } from 'lucide-react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function BookingForm({ service_id }: { service_id: string }) {
  const [selectedDates, setSelectedDates] = useState<Date[]>();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();
  // Fetch booked dates from API
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.post('/api/notAvailableDates', {
          service_id: parseInt(service_id)
        });

        const data = response.data.data;

        setBookedDates(data.map((item: string) => new Date(item)));
      } catch (error) {
        console.error('Error fetching booked dates:', error);
      }
    };

    fetchBookedDates();
  }, []);

  const handleSubmitBooking = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/booking', {
        service_id: parseInt(service_id),

        time: `${startTime} - ${endTime}`,
        location: location,
        booking_dates: selectedDates?.map((date) => ({
          date: date.toISOString()
        }))
      });

      toast.success('Success booking');

      push(`/checkout/${response.data.id}`);
    } catch (error) {
      toast.error('Failed to booking');
    } finally {
      setLoading(false);
    }
  };

  const now = new Date();
  const currentDate = new Date(now.setHours(0, 0, 0, 0)); // Reset ke awal hari
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1); // 1 hari setelah hari ini

  return (
    <div className="space-y-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Book Your Session</DialogTitle>
            <DialogDescription>
              Select your preferred date. Dates marked in gray are already
              booked.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea>
            <div className="w-full py-4">
              <Label className="mb-3 block">Select Date</Label>

              <Calendar
                initialFocus
                mode="multiple"
                className="flex h-full w-full"
                classNames={{
                  months:
                    'flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1',
                  month: 'space-y-4 w-full flex flex-col',
                  table: 'w-full h-full border-collapse space-y-1',
                  head_row: '',
                  row: 'w-full mt-2',
                  cell: 'w-8 h-8 text-center rounded-full'
                }}
                modifiers={{
                  disabled: (day) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Set ke awal hari untuk perbandingan yang akurat

                    return (
                      day < today ||
                      bookedDates.some((bookedDate) => {
                        // Pastikan bookedDate adalah objek Date
                        const booked = new Date(bookedDate);
                        booked.setHours(0, 0, 0, 0); // Hilangkan efek zona waktu

                        return day.getTime() === booked.getTime();
                      })
                    );
                  }
                }}
                defaultMonth={new Date()}
                selected={selectedDates}
                onSelect={setSelectedDates}
                modifiersClassNames={{
                  disabled: 'bg-gray-300 opacity-50 cursor-not-allowed'
                }}
              />

              <div className="my-5">
                <Label htmlFor="time" className="mb-3 block">
                  Time (Start and End)
                </Label>
                <div className="flex">
                  <Input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                  <Input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-5">
                <Label htmlFor="location" className="mb-3 block">
                  Location
                </Label>
                <Input
                  type="text"
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="JL. Madu Manis No 99 Desa Hutan 1"
                />
              </div>
            </div>
          </ScrollArea>

          <DialogFooter>
            <Button
              onClick={handleSubmitBooking}
              disabled={
                !selectedDates || !startTime || !endTime || !location || loading
              }
            >
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

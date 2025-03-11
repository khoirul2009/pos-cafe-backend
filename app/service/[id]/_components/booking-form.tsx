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

export default function BookingForm({ service_id }: { service_id: string }) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [bookedDates, setBookedDates] = useState<Date[]>([]);

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
    try {
      const response = await axios.post('/api/booking', {
        service_id: parseInt(service_id),
        date,
        time: `${startTime} - ${endTime}`,
        location: location
      });

      toast.success('Success booking');

      push(`/checkout/${response.data.id}`);
    } catch (error) {
      toast.error('Failed to booking');
    }
  };

  return (
    <div className="space-y-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book Your Session</DialogTitle>
            <DialogDescription>
              Select your preferred date. Dates marked in gray are already
              booked.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full py-4">
            <Label className="mb-3 block">Select Date</Label>
            {bookedDates.length > 0 ? (
              <Calendar
                mode="single"
                selected={date}
                classNames={{
                  months:
                    'flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1',
                  month: 'space-y-4 w-full flex flex-col',
                  table: 'w-full h-full border-collapse space-y-1',
                  head_row: '',
                  row: 'w-full mt-2',
                  day_selected: 'bg-primary w-full hover:w-full',
                  day_today: 'w-full bg-gray-200'
                }}
                onSelect={setDate}
                className=" rounded-md border"
                modifiers={{ disabled: [...bookedDates, new Date()] }}
                modifiersClassNames={{ disabled: 'bg-primary w-full' }}
              />
            ) : null}
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
          <DialogFooter>
            <Button
              onClick={handleSubmitBooking}
              disabled={!date || !startTime || !endTime || !location}
            >
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

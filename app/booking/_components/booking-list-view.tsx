'use client';
import BookingTable from '@/app/dashboard/booking/_components/booking-table';
import HomeLayout from '@/components/layout/home-layout';
import { useSession } from 'next-auth/react';

export default function BookingListView() {
  const session = useSession();
  return (
    <HomeLayout>
      <div className="container my-10 min-h-[80vh]">
        <BookingTable userId={parseInt(session.data?.user?.id ?? '0')} />
      </div>
    </HomeLayout>
  );
}

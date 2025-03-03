import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import BookingTable from './booking-table';

export default function BookingView() {
  return (
    <PageContainer>
      <Heading title="Booking" description="Manage your booking here" />
      <BookingTable />
    </PageContainer>
  );
}

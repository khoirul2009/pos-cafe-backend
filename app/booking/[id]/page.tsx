import BookingView from './_components/booking-view';

export default function BookingPage({ params }: { params: { id: string } }) {
  return <BookingView id={params.id} />;
}

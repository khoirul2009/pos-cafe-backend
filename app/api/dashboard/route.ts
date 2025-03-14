import { prisma } from '@/lib/database';
import ErrorHandling from '@/lib/error-handling';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const countService = await prisma.service.count();
    const countBooking = await prisma.booking.count();
    const countCustomer = await prisma.user.count({
      where: {
        role: 'customer'
      }
    });

    const bookingTrends = await prisma.booking.groupBy({
      by: ['status', 'created_at'],
      _count: {
        id: true
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    const monthlyBookingData = bookingTrends.reduce(
      (acc, item) => {
        const month = item.created_at.toISOString().slice(0, 7); // Format YYYY-MM
        if (!acc[month]) {
          acc[month] = { pending: 0, confirmed: 0, completed: 0 };
        }
        if (item._count && typeof item._count.id === 'number') {
          acc[month][item.status as 'pending' | 'confirmed' | 'completed'] +=
            item._count.id;
        }
        return acc;
      },
      {} as Record<
        string,
        { pending: number; confirmed: number; completed: number }
      >
    );

    return NextResponse.json({
      data: {
        count_service: countService,
        count_booking: countBooking,
        count_customer: countCustomer,
        booking_trends: monthlyBookingData
      }
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

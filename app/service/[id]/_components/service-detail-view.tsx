import HomeLayout from '@/components/layout/home-layout';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import axios from 'axios';
import BookingForm from './booking-form';
import { formatIDR } from '@/lib/utils';

export default async function ServiceDetailView({ id }: { id: string }) {
  const appUrl = process.env.NEXTAUTH_URL;
  const serviceData = await axios.get(`${appUrl}/api/service/${id}`);

  return (
    <HomeLayout>
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <img
                src={serviceData.data.data.image}
                alt="Photography Service"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">
                  {serviceData.data.data.category.title}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  {serviceData.data.data.title}
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  {formatIDR(serviceData.data.data.price)} per session
                </p>
              </div>

              <BookingForm service_id={id} />
              <Card>
                <CardHeader>
                  <CardTitle>Service Description</CardTitle>
                </CardHeader>
                <CardContent
                  dangerouslySetInnerHTML={{
                    __html: serviceData.data.data.description
                  }}
                ></CardContent>
                <CardFooter className="text-sm text-gray-500">
                  * Booking requires a 50% deposit
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

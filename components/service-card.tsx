import { ServiceType } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

export default function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{service.category.title}</CardTitle>
        <CardDescription>{service.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 aspect-video overflow-hidden rounded-md">
          <img
            src={service.image}
            alt="Wedding Photography"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Foto dipotret oleh professional dengan harga yang terjangkau dan hasil
          yang memuaskan
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Link href={`/service/${service.id}`} className="w-full">
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { StarIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';

export default function Reviews() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/rating')
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => console.error('Error fetching reviews:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear from people who have experienced our services.
          </p>
        </div>

        <Carousel className="mx-auto w-full">
          <CarouselContent>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-background p-6">
                      <Skeleton className="mb-4 h-5 w-32" />
                      <Skeleton className="mb-6 h-16 w-full" />
                      <div className="flex items-center">
                        <Skeleton className="mr-4 h-12 w-12 rounded-full" />
                        <div>
                          <Skeleton className="mb-1 h-5 w-24" />
                          <Skeleton className="h-4 w-32" />
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))
              : reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-background p-6">
                      <CardContent className="pt-6">
                        <div className="mb-4 flex items-center">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <StarIcon
                              key={i}
                              className="h-5 w-5 fill-primary text-primary"
                            />
                          ))}
                        </div>
                        <p className="mb-6 italic">"{review.snippet}"</p>
                        <div className="flex items-center">
                          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                            <img
                              src={review.user.thumbnail}
                              alt={review.user.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{review.user.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {review.date}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

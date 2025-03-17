'use client';
import HomeLayout from '@/components/layout/home-layout';
import ServiceCard from '@/components/service-card';
import { ServiceType } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function ServiceView() {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    fetchService(1);
  }, []);

  const fetchService = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/service?page=${pageNumber}`);
      if (response.data.data.length > 0) {
        setServices((prev) => [...prev, ...response.data.data]);
        setPage(pageNumber);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      toast.error('Error fetching service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeLayout>
      <div className="container mt-10 min-h-[80vh]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading && services.length === 0
            ? // Skeleton saat loading awal
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-[200px] w-full rounded-lg" />
              ))
            : services.map((service: ServiceType) => (
                <ServiceCard service={service} key={service.id} />
              ))}
        </div>

        {/* Load More Button */}
        <div className="mb-5 mt-10 flex justify-center">
          {hasMore ? (
            <Button onClick={() => fetchService(page + 1)} disabled={loading}>
              {loading ? 'Loading...' : 'Load More'}
            </Button>
          ) : (
            <p className="text-gray-500">No more services</p>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

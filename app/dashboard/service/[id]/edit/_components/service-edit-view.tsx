'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Heading } from '@/components/ui/heading';
import { Skeleton } from '@/components/ui/skeleton';
import PageContainer from '@/components/layout/page-container';
import ServiceForm from '../../../create/_components/service-form';

async function fetchService(id: string) {
  const res = await fetch(`/api/service/${id}`);
  if (!res.ok) throw new Error('Failed to fetch service');
  return res.json();
}

export default function ServiceEditView() {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['service', id],
    queryFn: () => fetchService(id as string),
    enabled: !!id
  });

  if (isLoading) {
    return (
      <PageContainer>
        <Skeleton className="mb-4 h-8 w-1/3" />
        <Skeleton className="mb-4 h-12 w-full" />
        <Skeleton className="mb-4 h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer>
        <p className="text-red-500">Failed to load service data</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Heading title="Edit Service" description="Edit existing banner" />
      <ServiceForm defaultValues={data.data} id={id as string} />
    </PageContainer>
  );
}

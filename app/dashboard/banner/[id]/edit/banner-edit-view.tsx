'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Heading } from '@/components/ui/heading';
import { Skeleton } from '@/components/ui/skeleton';
import PageContainer from '@/components/layout/page-container';
import BannerForm from '../../create/_components/banner-form';

async function fetchBanner(id: string) {
  const res = await fetch(`/api/banner/${id}`);
  if (!res.ok) throw new Error('Failed to fetch banner');
  return res.json();
}

export default function BannerEditView() {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['banner', id],
    queryFn: () => fetchBanner(id as string),
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
        <p className="text-red-500">Failed to load banner data</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Heading title="Edit Banner" description="Edit existing banner" />
      <BannerForm
        defaultValues={{
          title: data.data.title,
          link: data.data.link,
          image: null
        }}
        id={id as string}
      />
    </PageContainer>
  );
}

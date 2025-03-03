'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Heading } from '@/components/ui/heading';
import { Skeleton } from '@/components/ui/skeleton';
import PageContainer from '@/components/layout/page-container';
import GalleryForm from '../../../_components/gallery-form';

async function fetchgallery(id: string) {
  const res = await fetch(`/api/gallery/${id}`);
  if (!res.ok) throw new Error('Failed to fetch gallery');
  return res.json();
}

export default function GalleryEditView() {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['gallery', id],
    queryFn: () => fetchgallery(id as string),
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
        <p className="text-red-500">Failed to load gallery data</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Heading title="Edit Gallery" description="Edit existing gallery" />
      <GalleryForm
        defaultValues={{
          title: data.data.title,
          image: null
        }}
        id={id as string}
      />
    </PageContainer>
  );
}

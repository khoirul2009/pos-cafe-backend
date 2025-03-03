'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Heading } from '@/components/ui/heading';
import { Skeleton } from '@/components/ui/skeleton';
import PageContainer from '@/components/layout/page-container';
import TalentForm from '../../../create/_component/talent-form';

async function fetchTalent(id: string) {
  const res = await fetch(`/api/talent/${id}`);
  if (!res.ok) throw new Error('Failed to fetch Talent');
  return res.json();
}

export default function TalentEditView() {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['talent', id],
    queryFn: () => fetchTalent(id as string),
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
        <p className="text-red-500">Failed to load Talent data</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Heading title="Edit Talent" description="Edit existing talent" />
      <TalentForm defaultValues={data.data} id={id as string} />
    </PageContainer>
  );
}

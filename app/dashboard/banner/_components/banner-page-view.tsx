import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import BannerTable from './banner-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BannerPageView() {
  return (
    <PageContainer>
      <Heading title="Banner" description="Manage your banners" />
      <Button className="my-4">
        <Link className="w-full" href="/dashboard/banner/create">
          Create Banner
        </Link>
      </Button>

      <BannerTable />
    </PageContainer>
  );
}

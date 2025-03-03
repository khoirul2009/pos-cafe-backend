import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import GalleryTable from './gallery-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function GalleryView() {
  return (
    <PageContainer>
      <Heading title="Gallery" description="Manage your gallery here" />
      <Button className="my-4">
        <Link
          className="flex items-center gap-2"
          href="/dashboard/gallery/create"
        >
          <Plus size="20" /> Add Gallery
        </Link>
      </Button>
      <GalleryTable />
    </PageContainer>
  );
}

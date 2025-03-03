import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import ServiceTable from './service-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicePageView() {
  return (
    <PageContainer>
      <Heading title="Service" description="Manage your service here" />
      <Button className="my-4">
        <Link className="my-4 " href={'/dashboard/service/create'}>
          Create Service
        </Link>
      </Button>
      <ServiceTable />
    </PageContainer>
  );
}

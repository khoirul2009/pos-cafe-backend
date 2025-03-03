import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import Link from 'next/link';
import TalentTable from './talent-table';

export default function TalentPageView() {
  return (
    <PageContainer>
      <Heading title="Talent" description="Manage your talent here" />
      <Button className="my-4">
        <Link className="my-4 " href={'/dashboard/talent/create'}>
          Create Service
        </Link>
      </Button>
      <TalentTable />
    </PageContainer>
  );
}

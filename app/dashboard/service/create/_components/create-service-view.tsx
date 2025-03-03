import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import ServiceForm from './service-form';

export default function CreateServiceView() {
  return (
    <PageContainer>
      <Heading title="Create Service" description="Create your service here" />
      <ServiceForm />
    </PageContainer>
  );
}

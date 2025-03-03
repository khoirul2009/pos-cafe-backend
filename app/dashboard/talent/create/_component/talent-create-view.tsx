import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import TalentForm from './talent-form';

export default function TalentCreateView() {
  return (
    <PageContainer>
      <Heading title="Create Talent" description="Create a new talent" />
      <TalentForm />
    </PageContainer>
  );
}

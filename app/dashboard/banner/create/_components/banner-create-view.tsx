import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import BannerForm from './banner-form';

export default function BannerCreateView() {
  return (
    <PageContainer>
      <Heading title="Create Banner" description="Create a new banner" />
      <BannerForm />
    </PageContainer>
  );
}

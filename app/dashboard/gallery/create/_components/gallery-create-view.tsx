import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import GalleryForm from '../../_components/gallery-form';

export default function GalleryCreateView() {
  return (
    <PageContainer>
      <Heading title="Create Gallery" description="Create your gallery here" />
      <GalleryForm />
    </PageContainer>
  );
}

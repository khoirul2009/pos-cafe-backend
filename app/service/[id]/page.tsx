import ServiceDetailView from './_components/service-detail-view';

export default function ServiceDetailPage({
  params
}: {
  params: { id: string };
}) {
  return <ServiceDetailView id={params.id} />;
}

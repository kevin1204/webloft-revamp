import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('webflow-development');

export default function WebsiteDevelopmentPage() {
  return <ServicePage service={getServicePage('webflow-development')} />;
}

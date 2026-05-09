import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('website-redesign');

export default function WebsiteRedesignPage() {
  return <ServicePage service={getServicePage('website-redesign')} />;
}

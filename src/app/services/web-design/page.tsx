import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('web-design');

export default function CustomWebsiteDesignPage() {
  return <ServicePage service={getServicePage('web-design')} />;
}

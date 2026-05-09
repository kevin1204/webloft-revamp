import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('seo-optimization');

export default function SeoOnPageSetupPage() {
  return <ServicePage service={getServicePage('seo-optimization')} />;
}

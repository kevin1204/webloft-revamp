import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('landing-pages');

export default function LandingPagesPage() {
  return <ServicePage service={getServicePage('landing-pages')} />;
}

import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('hosting-security-setup');

export default function HostingDomainsMaintenancePage() {
  return <ServicePage service={getServicePage('hosting-security-setup')} />;
}

import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('lead-capture-automation');

export default function LeadCaptureAutomationPage() {
  return <ServicePage service={getServicePage('lead-capture-automation')} />;
}

import ServicePage from '@/components/ServicePage';
import { getServiceMetadata, getServicePage } from '@/lib/service-pages';

export const metadata = getServiceMetadata('analytics-monthly-reports');

export default function AnalyticsTrackingPage() {
  return <ServicePage service={getServicePage('analytics-monthly-reports')} />;
}

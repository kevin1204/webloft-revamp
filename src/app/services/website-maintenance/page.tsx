import { permanentRedirect } from 'next/navigation';

export default function WebsiteMaintenanceRedirectPage() {
  permanentRedirect('/services/hosting-security-setup');
}

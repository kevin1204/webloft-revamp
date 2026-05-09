import PageHeader from '@/components/PageHeader';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import PricingSection from '@/components/home/PricingSection';
import CTASection from '@/components/home/CTASection';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="What we do"
        index="(02) — Services"
        title="Eight services,"
        italic="one outcome."
        blurb="More qualified leads. Pick what you need à la carte, or bundle them as a Studio package."
      />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </>
  );
}

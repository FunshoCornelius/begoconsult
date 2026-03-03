import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServiceSlugs } from "@/lib/services";
import ServiceDetailHero from "@/components/service-sections/service-detail-hero";
import ServiceOverview from "@/components/service-sections/service-overview";
import ServiceFeatures from "@/components/service-sections/service-features";
import ServiceProcess from "@/components/service-sections/service-process";
import ServiceBenefits from "@/components/service-sections/service-benefits";
import CtaBanner from "@/components/cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | begoconsult`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceOverview service={service} />
      <ServiceFeatures features={service.features} />
      <ServiceProcess steps={service.process} />
      <ServiceBenefits benefits={service.benefits} />
      <CtaBanner />
    </>
  );
}

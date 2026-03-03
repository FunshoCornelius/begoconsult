import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrainingBySlug, getTrainingSlugs } from "@/lib/trainings";
import TrainingDetailHero from "@/components/training-sections/training-detail-hero";
import TrainingOverview from "@/components/training-sections/training-overview";
import TrainingCurriculum from "@/components/training-sections/training-curriculum";
import TrainingTopics from "@/components/training-sections/training-topics";
import TrainingAudience from "@/components/training-sections/training-audience";
import CtaBanner from "@/components/cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getTrainingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);
  if (!training) return {};

  return {
    title: `${training.title} Training`,
    description: training.description,
    openGraph: {
      title: `${training.title} Training | begoconsult`,
      description: training.description,
      images: [{ url: training.image }],
    },
  };
}

export default async function TrainingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);
  if (!training) notFound();

  return (
    <>
      <TrainingDetailHero training={training} />
      <TrainingOverview training={training} />
      <TrainingCurriculum modules={training.modules} />
      <TrainingTopics topics={training.topics} />
      <TrainingAudience
        targetAudience={training.targetAudience}
        prerequisites={training.prerequisites}
      />
      <CtaBanner />
    </>
  );
}

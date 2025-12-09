import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for static export
export function generateStaticParams() {
  try {
    const filePath = join(process.cwd(), "public", "data", "work-data.json");
    const fileContents = readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    if (!data || !data.workData || !Array.isArray(data.workData)) {
      console.error("Invalid work data structure");
      return [];
    }

    return data.workData.map((work: any) => ({
      slug: String(work.slug),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const filePath = join(process.cwd(), "public", "data", "work-data.json");
    const fileContents = readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    const work = data.workData.find((item: any) => item.slug === slug);

    if (!work) {
      return {
        title: "Work Not Found - Darshana Perera",
      };
    }

    return {
      title: `${work.title} - Darshana Perera`,
      description: work.description || `View details about ${work.title} by Darshana Perera`,
    };
  } catch (error) {
    return {
      title: "Work - Darshana Perera",
    };
  }
}

const WorkDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  
  // Read data from filesystem (server-side)
  let workData: any = null;
  let currentWork: any = null;

  try {
    const filePath = join(process.cwd(), "public", "data", "work-data.json");
    const fileContents = readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    workData = data.workData;
    currentWork = workData.find((item: any) => item.slug === slug);
  } catch (error) {
    console.error("Error reading work data:", error);
    notFound();
  }

  if (!currentWork) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <div className="container pt-8 pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-black transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            /> */}
          </svg>
          {/* <span>Back to Home</span> */}
        </Link>
      </div>

      {/* Hero Image */}
      <div className="container pt-4 sm:pt-8 md:pt-12 lg:pt-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden my-6 sm:my-8 md:my-12 lg:my-16">
          <Image
            src={getImgPath(currentWork.image)}
            alt={currentWork.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="border-b border-black pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{currentWork.title}</h1>
              {currentWork.year && (
                <span className="text-lg sm:text-xl text-primary font-semibold">{currentWork.year}</span>
              )}
            </div>
            <p className="text-base sm:text-lg text-secondary">{currentWork.client}</p>
          </div>

          {/* Description */}
          {currentWork.description && (
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">Overview</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{currentWork.description}</p>
            </div>
          )}

          {/* Technologies */}
          {currentWork.technologies && currentWork.technologies.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {currentWork.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-softGray py-2 sm:py-2.5 px-3 sm:px-5 rounded-full text-sm sm:text-base border border-mistGray"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {currentWork.features && currentWork.features.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Key Features</h3>
              <ul className="space-y-2 sm:space-y-3">
                {currentWork.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary mt-1.5 text-sm sm:text-base">•</span>
                    <span className="text-sm sm:text-base text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Works */}
          {workData && workData.length > 1 && (
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-mistGray">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10">Other Works</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {workData
                  .filter((work: any) => work.slug !== slug)
                  .slice(0, 2)
                  .map((work: any, index: number) => (
                    <Link
                      key={index}
                      href={`/work/${work.slug}`}
                      className="group flex flex-col gap-4 md:gap-5"
                    >
                      <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                        <Image
                          src={getImgPath(work.image)}
                          alt={work.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h5 className="group-hover:text-primary transition-colors">{work.title}</h5>
                        <p className="text-sm text-secondary">{work.client}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default WorkDetailPage;

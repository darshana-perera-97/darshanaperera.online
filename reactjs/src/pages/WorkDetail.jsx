import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import workData from "../data/work-data.json";
import { getImgPath } from "../utils/path";
import SEO from "../components/layout/SEO";
import { buildUrl, seoDefaults } from "../utils/seo";

const WorkDetail = () => {
  const { slug } = useParams();
  const { currentWork, related } = useMemo(() => {
    const current = workData?.workData?.find((item) => item.slug === slug);
    const others = workData?.workData
      ?.filter((item) => item.slug !== slug)
      ?.slice(0, 2);
    return { currentWork: current, related: others };
  }, [slug]);

  if (!currentWork) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h2>Work Not Found</h2>
          <p className="text-secondary">We couldn't find the requested project.</p>
          {/* <button
            onClick={() => navigate("/")}
            className="relative overflow-hidden cursor-pointer w-fit py-3 px-6 border border-primary rounded-full group"
          >
            <span className="relative z-10 text-base font-medium text-primary group-hover:text-white transition-colors duration-300">
              Back to Home
            </span>
          </button> */}
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${currentWork.title} | ${seoDefaults.siteName}`}
        description={currentWork.description || seoDefaults.description}
        url={buildUrl(`/work/${currentWork.slug}`)}
        image={buildUrl(currentWork.image)}
        keywords={[
          ...seoDefaults.keywords,
          currentWork.title,
          currentWork.client,
          ...(currentWork.technologies || []),
        ]}
        siteName={seoDefaults.siteName}
        type="article"
      />
      <main className="min-h-screen">
        <div className="container pt-4 sm:pt-8 md:pt-12 lg:pt-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden my-6 sm:my-8 md:my-12 lg:my-16">
            <img
              src={getImgPath(currentWork.image)}
              alt={currentWork.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="container pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="border-b border-black pb-4 sm:pb-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{currentWork.title}</h1>
                {currentWork.year && (
                  <span className="text-lg sm:text-xl text-primary font-semibold">
                    {currentWork.year}
                  </span>
                )}
              </div>
              <p className="text-base sm:text-lg text-secondary">{currentWork.client}</p>
            </div>

            {currentWork.description && (
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                  Overview
                </h3>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  {currentWork.description}
                </p>
              </div>
            )}

            {currentWork.technologies && currentWork.technologies.length > 0 && (
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {currentWork.technologies.map((tech, index) => (
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

            {currentWork.features && currentWork.features.length > 0 && (
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
                  Key Features
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {currentWork.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-primary mt-1.5 text-sm sm:text-base">•</span>
                      <span className="text-sm sm:text-base text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {related && related.length > 0 && (
              <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-mistGray">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10">
                  Other Works
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                  {related.map((work, index) => (
                    <Link
                      key={index}
                      to={`/work/${work.slug}`}
                      className="group flex flex-col gap-4 md:gap-5"
                    >
                      <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                        <img
                          src={getImgPath(work.image)}
                          alt={work.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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
    </>
  );
};

export default WorkDetail;


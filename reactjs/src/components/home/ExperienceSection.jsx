import AnimateOnScroll from "../layout/AnimateOnScroll";

const ExperienceSection = () => {
  const experiences = [
    {
      year: "Nov 2022 – Oct 2025",
      title: "Frontend Engineer",
      company: "hSenid Mobile Solutions",
      type: "Fulltime",
      description:
        "Designed and developed UI for internal and client dashboards using React & Next.js. Created mobile-friendly UI components and reusable Figma design systems. Built and maintained landing pages with SEO optimization. Collaborated with backend teams to integrate REST APIs. Led a small frontend team during project deployments and sprint planning. Improved UI performance and accessibility for multiple client applications. Delivered 10+ production-ready dashboards. Reduced UI development time by 30% by introducing reusable components. Implemented modern UI systems used across teams.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container">
          <AnimateOnScroll delay={0}>
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Experience</h2>
              <p className="text-xl text-primary">( 02 )</p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="font-bold mb-2 text-black text-base sm:text-lg md:text-xl">
                      {exp.year}
                    </h3>
                    <h4 className="text-sm sm:text-base md:text-lg font-normal">
                      {exp.title}
                    </h4>
                  </div>

                  <div className="relative hidden sm:block">
                    {index < experiences.length && (
                      <div
                        className={`absolute left-0 top-3 w-px ${
                          index < experiences.length - 1 ? "h-40" : "h-30"
                        } bg-softGray`}
                      ></div>
                    )}

                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                      <div
                        className={`no-print w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                    </div>

                    <div className="pl-4 lg:pl-7">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg sm:text-xl text-black font-normal">
                          {exp.company}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-normal">{exp.type}</p>
                    </div>
                  </div>

                  <div className="block sm:hidden mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-sm font-normal">{exp.type}</p>
                  </div>

                  <div className="pl-0 sm:pl-8">
                    <p className="leading-relaxed text-sm sm:text-base mt-4 sm:mt-0">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


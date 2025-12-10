import pageData from "../../data/page-data.json";
import { getImgPath } from "../../utils/path";
import AnimateOnScroll from "../layout/AnimateOnScroll";

const EducationSkills = () => {
  const educationData = pageData?.educationData;

  const skillLinks = {
    "React.js": "https://react.dev",
    "Next.js": "https://nextjs.org",
    Figma: "https://www.figma.com",
    "Node.js": "https://nodejs.org",
    Flutter: "https://flutter.dev",
    WordPress: "https://wordpress.org",
    MongoDB: "https://www.mongodb.com",
    TypeScript: "https://www.typescriptlang.org",
  };

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <img
            src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
            loading="lazy"
          />
          <div className="relative z-10 py-16 md:py-32">
            <AnimateOnScroll delay={0}>
              <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                <h2>Education & Skills</h2>
                <p className="text-xl text-orange-500">( 03 )</p>
              </div>
            </AnimateOnScroll>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
              <AnimateOnScroll delay={100}>
                <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                  {educationData?.education?.map((value, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value?.title}</h5>
                        <p className="font-normal">{value?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 xl:gap-7 w-full">
                {educationData?.skills?.map((value, index) => {
                  const skillUrl = skillLinks[value?.name] || value?.link;
                  return (
                    <AnimateOnScroll key={index} delay={index * 50}>
                      <a
                        href={skillUrl || "#"}
                        target={skillUrl ? "_blank" : undefined}
                        rel={skillUrl ? "noopener noreferrer" : undefined}
                        className="p-3 sm:p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-between hover:border-primary transition-colors cursor-pointer"
                      >
                        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
                          <img
                            src={getImgPath(value?.icon)}
                            alt={value?.name}
                            width={70}
                            height={70}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
                            loading="lazy"
                          />
                          <p className="text-black font-normal text-xs sm:text-sm md:text-base">
                            {value?.name}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="9"
                                height="9"
                                rx="4.5"
                                fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                              />
                            </svg>
                          ))}
                        </div>
                      </a>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;


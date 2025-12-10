import { getImgPath } from "../../utils/path";
import AnimateOnScroll from "../layout/AnimateOnScroll";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <img
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume background"
            width={1200}
            height={348}
            className="w-full"
            loading="lazy"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <AnimateOnScroll delay={0}>
              <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
                <h2>About Me</h2>
                <p className="text-xl text-primary">( 01 )</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="pt-6 sm:pt-10 xl:pt-16 flex flex-col lg:flex-row gap-6 sm:gap-10 items-center lg:items-start justify-between">
                <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] lg:w-[303px] lg:h-[440px] hidden md:flex">
                  <img
                    src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                    alt="about banner"
                    width={303}
                    height={440}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>

                <div className="w-full lg:max-w-2xl flex-1">
                  <p className="text-sm sm:text-base">
                    Strong hands-on experience building scalable web dashboards, mobile applications, and custom digital solutions using React, Next.js, Flutter, and MERN stack. Freelances actively for SMEs, delivering high-quality landing pages, WordPress sites, and mobile apps. Passionate about creating intuitive user experiences and clean, modern interfaces.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 py-8 sm:py-10 xl:py-16 gap-4 sm:gap-5 border-b border-mistGray">
                    {[
                      { count: "2.5+", label: "Years of experience" },
                      { count: "10+", label: "Production Dashboards" },
                      { count: "30%", label: "Time Reduction" },
                    ].map((item, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                          {item.count}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-black mt-1 sm:mt-2">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 xl:pt-14 flex flex-col gap-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={getImgPath("/images/icon/lang-icon.svg")}
                        alt="core skills"
                        width={30}
                        height={30}
                        loading="lazy"
                      />
                      <p className="text-base xl:text-xl text-black">Core Skills</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {["React.js", "Next.js", "Flutter", "Node.js", "Figma"].map(
                        (skill) => (
                          <p
                            key={skill}
                            className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                          >
                            {skill}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


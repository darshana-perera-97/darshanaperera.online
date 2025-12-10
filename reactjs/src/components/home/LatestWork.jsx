import { Link } from "react-router-dom";
import workData from "../../data/work-data.json";
import { getImgPath } from "../../utils/path";
import AnimateOnScroll from "../layout/AnimateOnScroll";

const LatestWork = () => {
  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            <AnimateOnScroll delay={0}>
              <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                <h2>Latest Works</h2>
                <p className="text-xl text-orange-500">( 04 )</p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.workData?.map((value, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <div className="group flex flex-col gap-3 xl:gap-6">
                    <Link to={`/work/${value?.slug}`} className="relative block">
                      <img
                        src={getImgPath(value?.image)}
                        alt={value?.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg">
                        <span className="flex justify-center items-center p-5 w-full">
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="0.333374" width="64" height="64" rx="32" fill="#FE4300" />
                            <path
                              d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                              stroke="#FFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">
                        <Link to={`/work/${value?.slug}`} className="hover:text-primary transition-colors">
                          <h5>{value?.title}</h5>
                        </Link>
                        <img
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="right arrow"
                          width={30}
                          height={30}
                          loading="lazy"
                        />
                      </div>
                      <p>Client: {value?.client}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;


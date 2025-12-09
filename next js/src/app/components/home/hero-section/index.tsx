"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className={`flex flex-col gap-4 md:gap-7 max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div>
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl 2xl:text-[85px]">I'm <span className="underline decoration-primary decoration-10">Darshana</span></h1>
                <div className="wave hidden sm:block">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2 sm:mt-4">UI/UX Designer & Full-Stack Engineer</h2>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl text-sm sm:text-base mt-4 sm:mt-6">
              A creative and detail-oriented UI/UX Designer and Full-Stack Engineer with 2.5+ years of industry experience, specializing in frontend engineering, modern UI design, WordPress development, and mobile app development.
            </p>
          </div>
          <div className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <Image
              src={getImgPath("/images/home/banner/banner-img.png")}
              alt="banner-img"
              width={685}
              height={650}
              className="block lg:hidden"
            />
          </div>
        </div>
      </div>
      <div className={`absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5 transition-all duration-1000 ease-out delay-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}>
        <Image
          src={getImgPath("/images/home/banner/banner-img.png")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;

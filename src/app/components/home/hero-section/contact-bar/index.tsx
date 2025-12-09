"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimateOnScroll from "../../../layout/animate-on-scroll";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {/* Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map(
                (value: any, index: number) => (
                  <Link
                    key={index}
                    href={value?.link || "#"}
                    className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 text-xs sm:text-sm md:text-base"
                    target={value?.link?.startsWith("http") ? "_blank" : undefined}
                    rel={value?.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Image
                      src={getImgPath(value?.icon)}
                      alt={value?.type}
                      width={20}
                      height={20}
                      className="min-w-[20px] min-h-[20px] sm:min-w-[24px] sm:min-h-[24px]"
                    />

                    <h6 className="hover:text-primary break-all sm:break-normal">
                      {value?.label}
                    </h6>
                  </Link>
                )
              )}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBarData?.socialItems?.map((value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={getImgPath(value?.icon)}
                    alt={value?.platform}
                    width={30}
                    height={30}
                    className="hover:opacity-80"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;

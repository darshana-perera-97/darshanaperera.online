import { useEffect, useState } from "react";
import pageData from "../../data/page-data.json";
import { getImgPath } from "../../utils/path";

const ContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactBarData = pageData?.contactBar;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map((item, index) => (
                <a
                  key={index}
                  href={item?.link || "#"}
                  className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 text-xs sm:text-sm md:text-base"
                  target={item?.link?.startsWith("http") ? "_blank" : undefined}
                  rel={item?.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <img
                    src={getImgPath(item?.icon)}
                    alt={item?.type}
                    width={20}
                    height={20}
                    className="min-w-[20px] min-h-[20px] sm:min-w-[24px] sm:min-h-[24px]"
                    loading="lazy"
                  />
                  <h6 className="hover:text-primary break-all sm:break-normal">{item?.label}</h6>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBarData?.socialItems?.map((item, index) => (
                <a
                  key={index}
                  href={item?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getImgPath(item?.icon)}
                    alt={item?.platform}
                    width={30}
                    height={30}
                    className="hover:opacity-80"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;


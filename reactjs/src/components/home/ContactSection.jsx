"use client";

import { useState } from "react";
import pageData from "../../data/page-data.json";
import { getImgPath } from "../../utils/path";
import AnimateOnScroll from "../layout/AnimateOnScroll";

const ContactSection = () => {
  const contactData = pageData?.contactLinks;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(Boolean(data?.success));
        setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Form submission failed", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <AnimateOnScroll delay={0}>
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Contact Me</h2>
              <p className="text-xl text-orange-500">( 05 )</p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll delay={100}>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 sm:gap-7 md:gap-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <label htmlFor="name" className="label">
                        Name *
                      </label>
                      <input
                        required
                        className="input"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="number" className="label">
                        Phone *
                      </label>
                      <input
                        required
                        className="input"
                        id="number"
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Email *
                    </label>
                    <input
                      required
                      className="input"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="label">
                      Message *
                    </label>
                    <textarea
                      required
                      className="input"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                    />
                  </div>
                  {submitted && (
                    <div className="flex items-center gap-2">
                      <img
                        src={getImgPath("/images/icon/success-icon.svg")}
                        alt="success icon"
                        width={30}
                        height={30}
                        loading="lazy"
                      />
                      <p className="text-secondary">
                        Great!!! Email has been Successfully Sent. We will get in touch asap.
                      </p>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="relative overflow-hidden cursor-pointer w-full sm:w-fit py-3 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                  >
                    <span className="relative z-10 text-base sm:text-lg md:text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                      Send Now
                    </span>
                  </button>
                </div>
              </form>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
                <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                  {contactData?.socialLinks?.map((value, index) => (
                    <div key={index}>
                      <a
                        className="text-base sm:text-lg font-normal text-secondary hover:text-primary"
                        href={value?.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value?.title}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                  {contactData?.contactInfo?.map((value, index) => (
                    <div key={index}>
                      <a
                        href={value?.link || "#"}
                        className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                      >
                        {value?.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React, { useEffect } from "react";
import bga from "../assets/images/bga.jpg";
import "./divider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageLoader } from "./ImageLoader";

export const PageBanner = ({ name, phrase, phraseSpanText }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden" style={{ position: "relative" }}>
        <ImageLoader
          src={bga}
          alt="Background Image"
          className="w-full h-[300px] lg:h-[600px] bg-cover bg-center "
        />
        <>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className={`absolute inset-0 bg-white text-center md:text-start pt-36 bg-opacity-70 md:pl-[300px] md:pt-64`}
          >
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="font-semibold text-3xl md:text-6xl mb-4 "
            >
              {name}
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-xl"
            >
              {phrase}{" "}
              <span className="text-red-500 text-2xl ">{phraseSpanText}</span>
            </p>
          </div>

          {/* Divider  */}
          <div className="custom-shape-divider-bottom-1688294616">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </>
      </div>
    </>
  );
};

export default PageBanner;

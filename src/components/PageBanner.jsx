import React from "react";
import bga from "../assets/images/bga.jpg";
import "./divider.css";
import { Socials } from "../components/Socials";

export const PageBanner = ({ name }) => {
  return (
    <>
      <div
        className="relative w-full h-[400px] lg:h-[700px] bg-cover bg-center  "
        style={{
          backgroundImage: `url(${bga})`,
        }}
      >
        <div className="absolute inset-0  bg-white bg-opacity-70">
          <h1 className="font-semibold pt-36 text-center text-3xl md:text-left  md:text-6xl md:pl-[400px] md:pt-64">
            {name}
          </h1>
          <Socials />
        </div>

        {/* divider */}
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
      </div>
    </>
  );
  a;
};

export default PageBanner;

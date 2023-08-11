import React, { useEffect } from "react";
import { FaUser, FaInfoCircle } from "react-icons/fa";
import bg2 from "../assets/images/bg2.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageLoader } from "./ImageLoader";
import { FaChevronRight } from "react-icons/fa";
export const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="relative pt-48 md:pt-64 sm:px-4 md:px-8 lg:px-16 xl:px-20 h-screen overflow-y-hidden overflow-x-hidden">
        <ImageLoader
          src={bg2}
          alt="Background Image"
          className="absolute inset-0 w-full h-full"
        />
        <div className="container mx-auto flex flex-col md:flex-row lg:mx-0 items-center">
          <div className="md:w-1/2 md:order-2 text-center md:text-left">
            <h3
              className="text-3xl font-bold text-black mb-4"
              data-aos="fade-down"
            >
              Affordable Excellence
            </h3>
            <h1 className="text-5xl font-bold" data-aos="fade-down">
              <span className="text-red-500">Rent</span> Your Photographic
              Journey
            </h1>
            <p className="text-xl text-black mb-8 mt-8 bg-gray-100 bg-opacity-40 rounded-lg p-1 " data-aos="fade-left">
              Capture more, spend less. <br /> Rent our premium gear for
              stunning photos on any budget.
            </p>
            <div className="space-x-4 flex whitespace-nowrap justify-center md:justify-start">
              <Link
                className="heroButton bg-red-500 hover:bg-red-600 "
                to={"about"}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <FaChevronRight size={20} className="mr-2" /> Learn More
              </Link>
              
            </div>
          </div>
          <div className="md:w-1/2 md:order-1"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;

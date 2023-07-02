import React from "react";
import { FaUser, FaInfoCircle } from "react-icons/fa";
import bg2 from "../assets/images/bg2.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center py-16 sm:px-4 md:px-8 lg:px-16 xl:px-20 h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg2})` }}>
      <div className="container mx-auto flex flex-col md:flex-row lg:mx-0 items-center">
        <div className="md:w-1/2 md:order-2 text-center md:text-left">
          <h3 className="text-3xl font-bold text-black mb-4">Affordable Excellence</h3>
          <h1 className="text-6xl font-bold">
            <span className="text-red-500">Rent</span> Your Photographic Journey
          </h1>
          <p className="text-xl text-black mb-8 mt-8 ">
            Capture more, spend less. <br /> Rent our premium gear for stunning photos on any budget.
          </p>
          <div className="space-x-4 flex flex-wrap justify-center md:justify-start"> 
            <Link className="heroButton bg-red-500 hover:bg-red-600 ">
              <FaUser size={20} className="mr-2" /> Sign Up
            </Link>
            <Link to={"about"} className="heroButton bg-gray-300 hover:bg-gray-400  ">
              <FaInfoCircle size={20} className="mr-2" /> Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 md:order-1">
        </div>
      </div>
    </section>
  );
};

export default Hero;

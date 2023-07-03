import React, { useEffect } from "react";
import { FiClock, FiTruck, FiHeadphones } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const WhyUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex items-center justify-center mt-12">
        {/* <img
          className="md:w-1/2 md:h-[500px] w-[256px] h-[256px] "
          src={cameraEquipmentImg}
          alt="Camera Equipment"
        /> */}
      </div>
      <div className="flex flex-col md:flex-row gap-20 items-center justify-center mt-24 mx-4">
        <div className="max-w-md" data-aos={"fade-right"}>
          <h2 className="text-2xl mb-2">Why choose us</h2>
          <h1 className="text-5xl mb-3">
            <span className="text-red-500">Best </span>deals
          </h1>
          <p>
            Find the best deals on camera equipment rentals. We offer a wide
            selection of high-quality cameras, drones, and accessories for any
            project or occasion. Whether you're a professional photographer or a
            hobbyist, our competitive prices and excellent service make us the
            top choice for camera rentals.
          </p>

          <Link
            to={"equipment"}
            className="heroButton bg-red-500 hover:bg-red-600 py-3 mt-4 max-w-xs"
          >
            <FaChevronRight size={20} className="" /> Check out!
          </Link>
        </div>

        <div className="flex-col space-y-6 mx-4 md:mx-0" data-aos={"fade-left"} >
          <div className="flex justify-start items-center ">
            <FiClock
              color="red"
              size={96}
              className="mr-2 bg-red-100 p-6 rounded-3xl"
            />
            <div className="flex flex-col ml-4">
              <h2 className="font-bold text-xl mb-2 ">
                {" "}
                Quick and easy reservation
              </h2>
              <p className="text-sm max-w-sm  ">
                {" "}
                Enjoy a seamless and hassle-free reservation process. Our
                user-friendly interface allows you to reserve the perfect camera
                equipment with just a few clicks.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center ">
            <FiTruck
              color="red"
              size={96}
              className="mr-2 bg-red-100 p-6 rounded-3xl"
            />
            <div className="flex flex-col ml-4">
              <h2 className="font-bold text-xl mb-2 ">
                {" "}
                Pickups and shippings
              </h2>
              <p className="text-sm max-w-sm  ">
                {" "}
                Experience convenience like never before with our reliable
                pickups and shippings. We ensure your camera equipment reaches
                you safely and on time, wherever you are.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center ">
            <FiHeadphones
              color="red"
              size={96}
              className="mr-2 bg-red-100 p-6 rounded-3xl"
            />
            <div className="flex flex-col ml-4">
              <h2 className="font-bold text-xl mb-2 "> 24/7 support</h2>
              <p className="text-sm max-w-sm  ">
                {" "}
                Need assistance? Our dedicated support team is available 24/7 to
                address your concerns and provide prompt solutions. Your
                satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

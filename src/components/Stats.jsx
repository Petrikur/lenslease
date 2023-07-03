import React, { useEffect } from "react";
import { FaUser, FaCheckCircle, FaMoneyBill, FaGlobe } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export const Stats = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const statistics = [
    {
      icon: <FaUser className="mr-4 text-blue-500 text-4xl" />,
      title: "Rental positions",
      count: "15",
    },
    {
      icon: <FaCheckCircle className="mr-4 text-green-500 text-4xl" />,
      title: "Rental Success Rate",
      count: "98%",
    },
    {
      icon: <FaMoneyBill className="mr-4 text-yellow-500 text-4xl" />,
      title: "Variety of Equipment",
      count: "+600",
    },
    {
      icon: <FaGlobe className="mr-4 text-red-500 text-4xl" />,
      title: "Shipping Countries",
      count: "163",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-12 text-center">Statistics</h2>
      <div className="flex flex-wrap justify-center items-stretch lg:mx-20">
        {statistics.map((statistic, index) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
            key={index}
            className="flex flex-col p-6 text-center items-center  mb-8 mx-4 flex-grow  rounded-lg bg-white shadow-lg  h-full "
          >
            {statistic.icon}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{statistic.title}</h3>
              <p className="text-red-500 text-4xl">{statistic.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

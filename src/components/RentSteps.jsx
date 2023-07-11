
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChevronCircleRight } from 'react-icons/fa';

const Step = ({ heading, text, number, delay }) => {
  useEffect(() => {
    AOS.init({ once: true }); 
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-delay={delay}
      className={`flex flex-col justify-center border p-6 md:w-72 w-80 h-48 step bg-red-500`}
    >
      <div className="flex justify-between items-center">
        <div className="text-black text-3xl rounded-full w-12 h-12 items-center justify-center flex border-2 border-black p-2">
          {number}
        </div>
        <FaChevronCircleRight color="black" className="" size={50} />
      </div>
      <div className="flex-col mt-4">
        <div className="step-content">
          <h2 className="text-xl mb-1">{heading}</h2>
          <p className="text-md">{text}</p>
        </div>
      </div>
    </div>
  );
};

export const RentSteps = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-24 mb-10">
        Renting with us is easy!
      </h1>
      <div
        className="lg:flex-row flex flex-wrap items-center flex-col justify-center gap-4 mx-4 lg:mx-24"
   
      >
        <Step
          number={1}
          heading={'Select equipment'}
          text={'Find the right equipment and rent duration'}
          delay={0} 
        />
        <Step
          number={2}
          heading={'Get your gear!'}
          text={'Come get your gear or let us handle that for you!'}
          delay={400}
        />
        <Step
          number={3}
          heading={'Shoot!'}
          text={'Capture the most important moments!'}
          delay={800} 
        />
        <Step
          number={4}
          heading={'Return gear'}
          text={'Bring back equipment or ship to one of our locations'}
          delay={1200} 
        />
      </div>
    </>
  );
};


import React, { useEffect } from "react";
import { PageBanner } from "../components/PageBanner";
import storeImg from "../assets/images/store.jpg";
import Footer from "../components/Footer";
import { Stats } from "../components/Stats";
import AOS from "aos";
import "aos/dist/aos.css";
import { DiscountBanner } from "../components/DiscountBanner";
import { RentSteps } from "../components/RentSteps";

export const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <PageBanner
        phrase={"Unleash your potential with "}
        phraseSpanText={"Lens Lease"}
        name={"About"}
      />
      <section className="text-center lg:text-center">
        <h2 className="text-4xl mt-36 mb-10 font-mono">About the Company</h2>

        <div className="flex flex-col items-center justify-center mt-12 lg:flex-row lg:justify-center lg:gap-8 mx-4 lg:mx-0 overflow-x-hidden ">
          <img
            data-aos="fade-right"
            src={storeImg}
            alt="Store"
            className="w-2/3 lg:w-1/3 mb-8 lg:mb-0 rounded-full"
          />
          <div
            data-aos="fade-left"
            className="flex flex-col justify-center items-center lg:w-1/3 lg:text-left"
          >
            <h2 className="text-6xl mb-6">
              <span className="text-red-500">Rent</span> Your Equipment
            </h2>
            <p className="text-md">
              We are a leading camera rental company that offers a wide range of
              high-quality cameras, equipment, and drones for rent. <br></br>
            </p>
            <br></br>
            <p className="text-md">
              Whether you're a professional photographer or a hobbyist, we have
              the perfect gear for your needs.
            </p>{" "}
            <br></br>
            <p className="text-md">
              Renting from us is simple and convenient. You can choose from our
              extensive collection, select the rental duration that suits you,
              and enjoy using top-notch equipment without the burden of
              ownership.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-36 mb-24">
      <RentSteps />
      <div className="py-12"></div>

        <Stats />
        <div className="pb-10"></div>
        <DiscountBanner />
      </div>
      <Footer />
    </>
  );
};

export default About;

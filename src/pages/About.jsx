import React from "react";
import { PageBanner } from "../components/PageBanner";
import storeImg from "../assets/images/store.jpg";
import Footer from "../components/Footer";
import { Stats } from "../components/Stats";

export const About = () => {
  return (
    <>
      <PageBanner phrase={"Unleash your potential with Lens Lease"} name={"About"} />

      <section className="text-center lg:text-center">
        <h2 className="text-4xl mt-36 mb-10 font-mono">About the Company</h2>

        <div className="flex flex-col items-center justify-center mt-12 lg:flex-row lg:justify-center lg:gap-8 mx-4 lg:mx-0 ">
          <img
            src={storeImg}
            alt="Store"
            className="w-2/3 lg:w-1/3 mb-8 lg:mb-0 rounded-full"
          />
          <div className="flex flex-col justify-center items-center lg:w-1/3">
            <h2 className="text-6xl mb-6"><span className="text-red-500">Rent</span>  Your Equipment</h2>
            <p className="text-md  font-mono">
              We are a leading camera rental company that offers a wide range of
              high-quality cameras, equipment, and drones for rent. <br></br>
            </p>
            <br></br>

            <p className="text-md font-mono">
            
           
              Whether you're a professional photographer or a hobbyist, we have
              the perfect gear for your needs.
            </p>   <br></br>
            <p className="text-md    font-mono">
              Renting from us is simple and convenient. You can choose from our
              extensive collection, select the rental duration that suits you,
              and enjoy using top-notch equipment without the burden of
              ownership.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-24">
      <Stats />
      </div>
      <Footer />
    </>
  );
};

export default About;

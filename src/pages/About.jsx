import React from "react";
import { PageBanner } from "../components/PageBanner";
import storeImg from "../assets/images/store.jpg";

export const About = () => {
  return (
    <>
      <PageBanner name={"About"} />

      <section className="text-center lg:text-center">
        <h2 className="text-4xl mt-36 mb-10">About the company</h2>

        <div className="flex flex-col items-center justify-center mt-12 lg:flex-row lg:justify-center lg:gap-8">
          <img src={storeImg} alt="Store" className="w-2/3 lg:w-1/3 mb-8 lg:mb-0" />
          <div className="flex flex-col justify-center items-center lg:w-1/3">

            <h2 className="text-6xl mb-6">Rent your eqs here</h2>
            <p className="text-2xl">lorem loren lorem</p>
            <p className="text-2xl">lorem loren lorem</p>
          </div>
        </div>
      </section>
    </>
  );
};

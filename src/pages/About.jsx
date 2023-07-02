import React from "react";

import { PageBanner } from "../components/PageBanner";

import storeImg from "../assets/images/store.jpg";

export const About = () => {
  return (
    <>
      <PageBanner name={"About"} />

      <section>
        <h2 className="text-4xl mt-36 text-center mb-10">About the company</h2>

        <div className="flex items-center mt-12 lg:flex-row justify-center gap-20  ">
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="text-6xl mb-2">Rent your eqs here</h2>
            <p className="text-2xl">lorem loren lorem </p>
            <p className="text-2xl">lorem loren lorem </p>
          </div>
          <img src={storeImg} />
        </div>
      </section>
    </>
  );
};

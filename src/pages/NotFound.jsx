import React from "react";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export const NotFound = () => {
  return (
    <div>
      <PageBanner name={"Not Found"} phraseSpanText={"404"}
       />
       <div className="text-center text-2xl my-24">Sorry! This page does not exist!</div>
       <Footer />
    </div>
  );
};

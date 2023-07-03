import React from "react";
import { Hero } from "../components/Hero";
import { Faq } from "../components/Faq";
import { DiscountBanner } from "../components/DiscountBanner";
import Footer from "../components/Footer";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Faq />
      <DiscountBanner />
      <Footer />
    </div>
  );
};

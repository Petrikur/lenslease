import React from "react";
import { Hero } from "../components/Hero";
import { Faq } from "../components/Faq";
import { DiscountBanner } from "../components/DiscountBanner";
import Footer from "../components/Footer";
import ReviewList from "../components/ReviewList";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Faq />
      <DiscountBanner />
      <div className="pb-32"></div>
      <ReviewList />
      <div className="pb-32"></div>
      <Footer />
    </div>
  );
};

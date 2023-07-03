import React from "react";
import backgroundImage from "../assets/images/bga.jpg";
import PageBanner from "../components/PageBanner";
import { ContactForm } from "../components/ContactForm";
import Footer from "../components/Footer";
import { DiscountBanner } from "../components/DiscountBanner";

export const Contact = () => {
  return (
    <div>
      <PageBanner name={"Contact"} />
      <ContactForm />
      <DiscountBanner />
      <div className="pb-32"></div>
      <Footer />
    </div>
  );
};

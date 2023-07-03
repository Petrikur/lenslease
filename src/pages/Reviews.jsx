import React from 'react';
import backgroundImage from '../assets/images/bga.jpg';
import PageBanner from '../components/PageBanner';
import ReviewList from '../components/ReviewList';
import Footer from '../components/Footer';


export const Reviews = () => {
  return (
    <div className="">
         <PageBanner name={"Reviews"} phrase={"Discover What Our Customers Are Saying about"} phraseSpanText={"Lens Lease"} />
         <div className='pt-32'></div>
         <ReviewList />
         <div className='pb-32'></div>
         <Footer />
      </div>
  );
};

import React from 'react';
import PageBanner from '../components/PageBanner';
import {EquipmentGrid} from '../components/EquipmentGrid';
import Footer from "../components/Footer"

export const Equipment = () => {
  return (
   <>
          <PageBanner name={"Equipment"} />
          <EquipmentGrid />
          <div className='mt-20'></div>
          <Footer />
          </>
  );
};

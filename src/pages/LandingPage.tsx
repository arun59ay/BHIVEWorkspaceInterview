import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import PropertyCard from "../components/PropertyCard";
import GetStoreApp from "../components/GetStoreApp";
import CopyRightInfo from "../components/CopyRightInfo";

const LandingPage = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <div className="w-full flex justify-center">
          <div className="xs:w-[320px] md:w-[700px]  xl:w-[1200px] xs:mt-20 md:mt-0 xl:mt-0">
            <div className="xs:mb-20 md:mb-32">
              <ChooseUs />
            </div>
            <div className="xs:mb-16 xl:mb-24">
              <PropertyCard />
            </div>
            <div className="mb-12">
              <GetStoreApp />
            </div>
          </div>
        </div>
        <div>
          <CopyRightInfo />
        </div>
      </div>
    </>
  );
};

export default LandingPage;

import React from "react";


const Banner = () => {
  return (
    <div className="bannerImage xs:h-[600px] xl:h-[600px] w-full relative flex justify-between align-center">
      <div className="w-full flex justify-center">
        <div className="md:w-[400px] xl:w-[1200px] xs:flex xs:flex-col-reverse md:inline-block">
          <div className="flex xs:justify-center xl:justify-between xl:items-center xl:h-full">
            <div className="xs:w-[350px] md:w-[500px] xl:w-[806px] xs:text-xl xl:text-[58px] xl:leading-normal font-bold xs:text-center xl:text-start">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-[#F2B304]">₹199/-!</span>
            </div>
          </div>
          {/* <div className="xs:w-[640px] h-full"> */}
          <div className="h-full">
            <img
              className="xs:w-[388px] xs:h-[388px] coworkerImage"
              src={require("../assets/CoworkingBanner.png")}
              alt="coworker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// position: absolute;
// right: 6%;
// top: 23%;

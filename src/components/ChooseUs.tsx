import React, { useState } from "react";

const ChooseUsJson = [
  {
    id: 1,
    optionName: "Community Events",
    iconName: "CommunityEvents",
  },
  {
    id: 2,
    optionName: "Gym Facilities",
    iconName: "GymFacilities",
  },
  {
    id: 3,
    optionName: "High-Speed WiFi",
    iconName: "High-SpeedWiFi",
  },
  {
    id: 4,
    optionName: "Cafe & Tea Bar",
    iconName: "CafeTeaBar",
  },
  {
    id: 5,
    optionName: "affordable",
    iconName: "Affordable",
  },
  {
    id: 6,
    optionName: "Comfort Lounges",
    iconName: "ComfortLounges",
  },
  {
    id: 7,
    optionName: "Quick Booking",
    iconName: "QuickBooking",
  },
  {
    id: 8,
    optionName: "Sports Area",
    iconName: "SportsArea",
  },
];

const ChooseUs = () => {
  return (
    <div className="xs:w-[320px] md:w-[700px] xl:w-full flex justify-start flex-col">
      <div className="xs:text-2xl xl:text-[36px] font-bold mb-8 text-[#263238] flex justify-between items-center">Why Choose us? <span className="md:hidden xl:hidden"><img  alt='Arrow' src={require(`../assets/Arrow.svg`)} /></span></div>
      <div className="chooseContainer">
        {ChooseUsJson.map((item) => (
          <div className="chooseContent" key={item?.id}>
            <img className="md:mr-4" alt={item?.iconName} src={require(`../assets/${item?.iconName}.svg`)} />
            <div className="xs:text-sm xl:text-lg font-medium text-[#263238] mt-2">{item?.optionName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;


import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex justify-center bg-white header-box-shadow h-[90px]">
      <div className="xs:w-[320px] md:w-[720px] xl:w-[1200px]">
        <header className="w-full h-full  flex xs:justify-between xl:justify-between items-center ">
          <img
            className="w-[125px] h-[40px]"
            src={require("../assets/logo.png")}
            alt="logo"
          />
          <div className="header-call-icon">
            <img
              className="w-[24px] h-[24px]"
              src={require("../assets/call.png")}
              alt="logo"
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

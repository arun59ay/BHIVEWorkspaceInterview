import React from "react";

const GetStoreApp = () => {
  return (
    <div className="relative">
      <div className="xs:text-2xl xl:text-[36px] font-bold xl:mb-48 xl:ml-16 xs:mb-6 getOurApp">
        Download our app now
      </div>
      <div className="storeCard">
        <div>
          <img
            className="storePhoneImage"
            src={require("../assets/DownloadBhiveImage.svg")}
          />
        </div>
        <div className="storeCardInfo">
          <div className="text-xl text-[#605F5F] mt-10 xs:hidden xl:block">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </div>
          <div className="flex justify-start items-center mt-8">
            <div className="mr-2">
              <img src={require("../assets/PlayStoreIcon.svg")} />
            </div>
            <div>
              <img src={require("../assets/AppStoreIcon.svg")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStoreApp;

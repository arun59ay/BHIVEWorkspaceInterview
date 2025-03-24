import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCentersRequest } from "../store/actions";
import type { RootState } from "../libs/types";

const badges = ["Platinum", "Workspace", "Honeykomb", "Campus"];

const PropertyCard = () => {
  const dispatch = useDispatch();
  const centersData = useSelector((state: RootState) => state.centers);
  const { data: centers, loading, error } = centersData;

  useEffect(() => {
    dispatch(fetchCentersRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  const processCenters = (centers: any) => {
    return centers.map((center: any) => {
      const cleanedAddress = center.address.replace(
        ", Bengaluru, Karnataka 560038, India",
        ""
      );

      const dayPassPrice = center.day_pass_price || 0;
      const dayPassDiscount = dayPassPrice * 10 - dayPassPrice * 2;
      const randomBadge = badges[Math.floor(Math.random() * badges.length)];

      return {
        ...center,
        address: cleanedAddress,
        day_pass_discounts_percentage: dayPassDiscount,
        badge: randomBadge,
      };
    });
  };

  const processedCenters = processCenters(centers);


  return (
    <div className="xs:mb-12 md:mb-40 xl:mb-20">
      <div className="xs:text-2xl xl:text-[36px] font-bold mb-8 text-[#263238] flex justify-between items-center">Our Space Overview <span className="md:hidden xl:hidden"><img  alt='Arrow' src={require(`../assets/Arrow.svg`)} /></span></div>
      <div className="spaceContainer">
        {processedCenters.map((item: any) => (
          <div className="spaceCard">
            <div className="spaceLoction">
              <div className="spaceAddress text-[#263238]">{item?.name}</div>
              <a
                className="spaceMapLocation"
                href={`https://www.google.com/maps?q=${item?.latitude},${item?.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[18px] h-[18px]"
                  src={require("../assets/assistant_direction.svg")}
                  alt="logo"
                />
                <div className="spaceLocatedDistance">6 Kms</div>
              </a>
            </div>
            <div
              className="spaceLocatedImage"
              style={{ backgroundImage: `url(${item?.images[0]})` }}
            >
              <div className="spaceBadge">
                <img
                  width="133"
                  height="32"
                  src={require(`../assets/${item?.badge}.svg`)}
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="dayPassButton flex justify-between items-center p-3">
                <div>
                  <div className="xs:text-xs xl:text-sm text-[#65624C] xs:mt-2 xl:mt-0">Day Pass</div>
                  <div className="xs:text-lg xl:text-xl text-[#263238]">
                    ₹ {item?.day_pass_price}<span className="xs:text-[11px] xl:text-xs text-[#263238CC]">/ Day</span>
                  </div>
                </div>
                <div>
                  <img
                    className="w-[18px] h-[18px]"
                    src={require("../assets/PriceIcon.svg")}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="bulkPassButton flex justify-between items-center relative p-3">
                <div>
                  <div className="xs:text-xs xl:text-sm text-[#65624C] xs:mt-2 xl:mt-0">Day Pass</div>
                  <div className="xs:text-[16px] xl:text-xl text-[#263238]">
                    ₹ {item?.day_pass_discounts_percentage}<span className="xs:text-[11px] xl:text-xs text-[#263238CC]">/ 10 Day</span>
                  </div>
                </div>
                <div>
                  <img
                    className="w-[18px] h-[18px]"
                    src={require("../assets/PriceIcon.svg")}
                    alt="logo"
                  />
                </div>
                <div className="discountTag">20% Discount</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;

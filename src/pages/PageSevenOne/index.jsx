import React from "react";

import { Img, Text } from "components";

const PageSevenOne = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-merriweather items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[34px] items-center justify-start mb-9 w-[55%] md:w-full">
          <Text
            className="font-normal text-blue_gray_900 tracking-[5.12px]"
            as="h2"
            variant="h2"
          >
            Our Philosophy
          </Text>
          <div className="flex md:flex-col flex-row font-karla gap-2 items-start justify-between w-full">
            <div className="flex flex-col justify-start md:mt-0 mt-[157px]">
              <Text className="font-medium text-blue_gray_700" variant="body2">
                Bruce’s attire
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[54px] mt-[72px] text-blue_gray_700"
                variant="body2"
              >
                intersection
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[76px] mr-10 mt-[75px] text-blue_gray_700"
                variant="body2"
              >
                ready-to-wear
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[122px] mt-[71px] text-blue_gray_700"
                variant="body2"
              >
                clothing with
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-[39%] md:w-full">
              <Img
                src="images/img_image13.png"
                className="h-[466px] sm:h-auto object-cover rounded-bl-[128px] rounded-br-[128px] w-full"
                alt="imageTen"
              />
              <Text className="font-medium text-blue_gray_700" variant="body2">
                timeless style.
              </Text>
            </div>
            <div className="flex flex-col justify-start md:mt-0 mt-40">
              <Text
                className="font-medium md:ml-[0] ml-[120px] text-blue_gray_700"
                variant="body2"
              >
                operates at the
              </Text>
              <Text
                className="font-medium ml-20 md:ml-[0] mt-[65px] text-blue_gray_700"
                variant="body2"
              >
                of couture &
              </Text>
              <Text
                className="font-medium ml-10 md:ml-[0] mr-[74px] mt-[70px] text-blue_gray_700"
                variant="body2"
              >
                to create luxury
              </Text>
              <Text
                className="font-medium mt-[65px] text-blue_gray_700"
                variant="body2"
              >
                a relaxed
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSevenOne;

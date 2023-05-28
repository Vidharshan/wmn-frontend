import React from "react";

import { Button, Text } from "components";

const PageThree = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-inter gap-3.5 items-end justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-[845px] mx-auto w-full">
          <Text className="text-blue_gray_900_01" as="h2" variant="h2">
            Enter your feedback and gain points!
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[216px] items-start max-w-[845px] mb-[116px] mx-auto md:px-10 sm:px-5 px-[212px] w-full">
          <Text className="text-blue_gray_400" as="h5" variant="h5">
            100 points = Rs 20
          </Text>
          <Button
            className="cursor-pointer font-normal leading-[normal] min-w-[216px] md:ml-[0] ml-[59px] sm:text-[22.41px] md:text-[24.41px] text-[26.41px] text-center text-white_A700"
            size="sm"
            variant="FillBluegray90001"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default PageThree;

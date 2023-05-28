import React from "react";

import { Img, Text } from "components";

const PageFour = () => {
  return (
    <>
      <div className="bg-teal_50 font-merriweather h-[896px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pt-10 px-10 sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_productimage_896x1920.png')",
          }}
        >
          <div className="flex flex-col gap-[29px] items-start justify-start max-w-[1468px] md:px-5 w-full">
            <Text
              className="font-normal leading-[130.00%] text-blue_gray_900 tracking-[5.12px]"
              as="h2"
              variant="h2"
            >
              <span className="md:text-5xl text-blue_gray_900 text-[64px] font-merriweather text-left">
                <>
                  Spring Summer
                  <br />
                </>
              </span>
              <span className="md:text-[22px] sm:text-xl text-blue_gray_900 text-2xl font-merriweather text-left">
                2021
              </span>
              <span className="md:text-5xl text-blue_gray_900 text-[64px] font-merriweather text-left">
                {" "}
                Collection
              </span>
            </Text>
            <div className="flex md:flex-col flex-row font-karla md:gap-10 items-start justify-between w-full">
              <div className="border border-blue_gray_700 border-solid flex flex-row gap-10 items-center justify-start md:mt-0 mt-[11px] p-4 w-auto">
                <Text
                  className="font-normal text-blue_gray_900 uppercase w-auto"
                  variant="body2"
                >
                  View collection
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-6 w-6"
                  alt="arrowright"
                />
              </div>
              <div className="border-4 border-blue_gray_900 border-solid h-[661px] rounded-tl-[312px] rounded-tr-[312px] w-[31%]"></div>
            </div>
          </div>
        </div>
        <div className="absolute border-4 border-blue_gray_900 border-solid bottom-[0] h-[661px] md:px-5 right-[9%] rounded-tl-[312px] rounded-tr-[312px] w-[24%]"></div>
      </div>
    </>
  );
};

export default PageFour;

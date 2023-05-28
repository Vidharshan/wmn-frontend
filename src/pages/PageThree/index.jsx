import React from "react";

import { Button, Img, Text } from "components";

const PageThree = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col items-center justify-start mx-auto p-[66px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1575px] mb-[7px] mx-auto w-full">
          <Img
            src="images/img_tylernix5rsid.png"
            className="md:flex-1 h-[666px] sm:h-auto md:mt-0 mt-[131px] object-cover rounded-tl-[300px] rounded-tr-[300px] w-[28%] md:w-full"
            alt="tylernix5rsid"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start mb-[11px] md:ml-[0] ml-[163px] md:mt-0 mt-[52px] w-[21%] md:w-full">
            <Text
              className="font-black font-playfairdisplay text-blue_gray_900"
              as="h2"
              variant="h2"
            >
              Categories
            </Text>
            <div className="flex flex-col font-playfairdisplay gap-14 items-center justify-start mt-[72px] w-auto">
              <div className="flex flex-col gap-[54px] items-center justify-start">
                <Text
                  className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Dresses
                </Text>
                <Text
                  className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Skirts
                </Text>
                <Text
                  className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Blouses
                </Text>
              </div>
              <Text
                className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                as="h4"
                variant="h4"
              >
                Knitwear
              </Text>
              <Text
                className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                as="h4"
                variant="h4"
              >
                Jackets
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[178px] mt-[78px]"
              rightIcon={
                <Img
                  src="images/img_arrowright.svg"
                  className="ml-2 my-0.5"
                  alt="arrow_right"
                />
              }
              size="md"
              variant="OutlineBluegray700"
            >
              <div className="font-karla font-normal md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left uppercase">
                View all
              </div>
            </Button>
          </div>
          <Img
            src="images/img_2.png"
            className="md:flex-1 h-[664px] sm:h-auto md:ml-[0] ml-[210px] object-cover rounded-tl-[300px] rounded-tr-[300px] w-[29%] md:w-full"
            alt="Two"
          />
        </div>
      </div>
    </>
  );
};

export default PageThree;

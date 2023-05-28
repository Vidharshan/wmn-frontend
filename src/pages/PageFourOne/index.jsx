import React from "react";

import { Button, Img, Text } from "components";

const PageFourOne = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-teal_50 flex flex-col h-[896px] items-start justify-start mx-auto p-[136px] md:px-10 sm:px-5 w-full"
        style={{
          backgroundImage: "url('images/img_productimage_896x1920.png')",
        }}
      >
        <div className="flex flex-col gap-10 items-start justify-start mb-[358px] md:ml-[0] ml-[59px] w-[30%] md:w-full">
          <Text
            className="font-black font-playfairdisplay text-blue_gray_900"
            as="h2"
            variant="h2"
          >
            <span className="md:text-5xl text-blue_gray_900 text-[64px] text-left">
              <>
                Spring Summer
                <br />
              </>
            </span>
            <span className="md:text-5xl text-blue_gray_900 text-[64px] text-left">
              2021
            </span>
            <span className="md:text-5xl text-blue_gray_900 text-[64px] text-left">
              {" "}
              Collection
            </span>
          </Text>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[273px]"
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
              View collection
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PageFourOne;

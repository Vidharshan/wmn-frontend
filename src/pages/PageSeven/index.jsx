import React from "react";

import { Button, Img, Input, Text } from "components";

const PageSeven = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col items-center justify-end mx-auto p-[66px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-10 items-center justify-start mt-[17px] w-[26%] md:w-full">
          <Text
            className="font-normal font-playfairdisplay text-blue_gray_900 text-center"
            variant="body2"
          >
            NEWSLETTER
          </Text>
          <Img
            src="images/img_image10.png"
            className="h-[466px] sm:h-auto object-cover rounded-tl-[200px] rounded-tr-[200px] w-4/5 md:w-full"
            alt="imageTen"
          />
          <Text
            className="font-karla font-normal leading-[150.00%] text-blue_gray_900 text-center w-[64%] sm:w-full"
            variant="body2"
          >
            SUBSCRIBE TO SEE THE LATEST UPDATES
          </Text>
          <div className="flex sm:flex-col flex-row font-karla sm:gap-10 items-end justify-between w-full">
            <Input
              wrapClassName="sm:flex-1 sm:mt-0 mt-1.5 sm:w-full"
              className="font-normal p-0 placeholder:text-teal_300 text-left text-lg text-teal_300 uppercase w-full"
              type="email"
              name="frameEight"
              placeholder="Email"
              size="sm"
              variant="OutlineTeal300"
            ></Input>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[205px]"
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
              <div className="font-normal md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left uppercase">
                SUBSCRIBE
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSeven;

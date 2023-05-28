import React from "react";

import { Button, Img, List, Text } from "components";

const PageSixOne = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-karla items-center justify-end mx-auto p-[106px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start max-w-[1530px] mx-auto w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="font-black font-playfairdisplay text-blue_gray_900"
              as="h2"
              variant="h2"
            >
              ~Best Sellers
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[178px]"
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
              <div className="font-karla font-normal leading-[normal] md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left uppercase">
                View ALL
              </div>
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <div className="relative w-[356px]">
              <div className="flex flex-col items-end justify-start my-auto outline outline-[1px] outline-blue_gray_700 w-auto">
                <Img
                  src="images/img_productimage_534x334.png"
                  className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                  alt="productimage"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body5"
                  >
                    checked midi dress{" "}
                  </Text>
                </div>
              </div>
              <div className="absolute bg-blue_gray_700 flex flex-col h-[77px] items-center justify-start right-[0] rounded-[38px] top-[0] w-[77px]">
                <div className="bg-blue_gray_700 flex flex-col h-[77px] items-center justify-start p-[11px] rounded-[38px] w-[77px]">
                  <Text
                    className="font-light mb-4 mt-[19px] text-center text-teal_50"
                    variant="body6"
                  >
                    Explore
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
                <Img
                  src="images/img_productimage_2.png"
                  className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                  alt="productimage"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body5"
                  >
                    red draped midi dress
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
                <Img
                  src="images/img_productimage_3.png"
                  className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                  alt="productimage"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body5"
                  >
                    Black smock midi dress
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
                <Img
                  src="images/img_productimage_4.png"
                  className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                  alt="productimage"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body5"
                  >
                    White lace dress
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSixOne;

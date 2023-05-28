import React from "react";

import { Img, List, Text } from "components";

const PageSix = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-merriweather items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[42px] items-center justify-start max-w-[1840px] mb-[62px] mt-9 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="font-normal text-blue_gray_900 tracking-[5.12px]"
              as="h2"
              variant="h2"
            >
              ~Best Sellers
            </Text>
            <div className="border border-blue_gray_700 border-solid flex flex-row font-karla gap-10 items-center justify-start p-4 w-auto">
              <a
                href="javascript:"
                className="font-normal text-blue_gray_900 uppercase w-auto"
              >
                <Text variant="body2">View ALL</Text>
              </a>
              <Img
                src="images/img_arrowright.svg"
                className="h-6 w-6"
                alt="arrowright"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-karla gap-[42px] items-center justify-start w-[84%] md:w-full">
            <div className="relative w-[356px]">
              <div className="flex flex-col items-end justify-start my-auto outline outline-[1px] outline-blue_gray_700 w-auto">
                <Img
                  src="images/img_productimage_534x334.png"
                  className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                  alt="imageThirteen"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body2"
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
                  alt="imageFourteen"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body2"
                  >
                    red draped midi dress
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
                <Img
                  src="images/img_productimage_3.png"
                  className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                  alt="imageFifteen"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body2"
                  >
                    Black smock midi dress
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
                <Img
                  src="images/img_productimage_4.png"
                  className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                  alt="imageSixteen"
                />
                <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                  <Text
                    className="font-normal text-blue_gray_900 text-center uppercase w-auto"
                    variant="body2"
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

export default PageSix;

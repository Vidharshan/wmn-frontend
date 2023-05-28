import React from "react";

import { Text } from "components";

const PageEightOne = () => {
  return (
    <>
      <div className="bg-teal_200 flex flex-col font-karla items-center justify-end mx-auto p-[67px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[73px] items-center justify-start max-w-[1531px] mt-[57px] mx-auto w-full">
          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
            <Text
              className="font-extrabold text-blue_gray_900 tracking-[10.24px] uppercase w-auto"
              as="h4"
              variant="h4"
            >
              Bruce’s Attire
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[44%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-start justify-start sm:mt-0 mt-0.5 w-auto">
                <Text
                  className="font-bold text-blue_gray_900 w-auto"
                  variant="body2"
                >
                  Navigate
                </Text>
                <div className="flex flex-col gap-10 items-start justify-start w-auto">
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    Shop
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    Collection
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    About
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    Account
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    My cart
                  </Text>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-auto">
                <Text
                  className="font-bold text-blue_gray_900 w-auto"
                  variant="body2"
                >
                  Assistance
                </Text>
                <div className="flex flex-col gap-10 items-start justify-start w-auto">
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    Shipping & returns
                  </Text>
                  <a
                    href="javascript:"
                    className="font-medium text-blue_gray_900 w-full"
                  >
                    <Text variant="body2">Privacy policy</Text>
                  </a>
                  <Text
                    className="font-medium text-blue_gray_900 w-full"
                    variant="body2"
                  >
                    FAQ
                  </Text>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-auto">
                <Text
                  className="font-bold text-blue_gray_900 w-auto"
                  variant="body2"
                >
                  Socials
                </Text>
                <div className="flex flex-col gap-10 items-start justify-start w-auto">
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    Instagram
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    Facebook
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_900 w-auto"
                    variant="body2"
                  >
                    Youtube
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <Text
                className="font-medium sm:mt-0 mt-0.5 text-blue_gray_700"
                variant="body2"
              >
                All rights reserved - 2020 @ Bruce’s Attire
              </Text>
              <a
                href="javascript:"
                className="font-medium mb-0.5 sm:ml-[0] ml-[188px] text-blue_gray_700"
              >
                <Text variant="body2">Terms & Conditions</Text>
              </a>
              <Text
                className="font-medium sm:ml-[0] ml-[484px] sm:mt-0 mt-0.5 text-blue_gray_700"
                variant="body2"
              >
                Website by me!
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageEightOne;

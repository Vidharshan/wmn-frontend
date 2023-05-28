import React from "react";

import { List, Text } from "components";

const PageEight = () => {
  return (
    <>
      <div className="bg-teal_200 flex flex-col font-karla items-center justify-end mx-auto p-[41px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1530px] mt-[52px] mx-auto w-full">
          <Text
            className="font-extrabold text-blue_gray_900 tracking-[10.24px] uppercase"
            as="h4"
            variant="h4"
          >
            Bruce’s Attire
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[248px] items-start justify-between mt-[57px] w-auto md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="font-bold text-blue_gray_900 w-auto"
                variant="body2"
              >
                Navigate
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="font-normal text-blue_gray_900 w-auto"
                  variant="body5"
                >
                  Shop
                </Text>
                <Text
                  className="font-normal text-blue_gray_900 w-auto"
                  variant="body5"
                >
                  Collection
                </Text>
                <Text
                  className="font-normal text-blue_gray_900 w-auto"
                  variant="body5"
                >
                  About
                </Text>
                <Text
                  className="font-normal text-blue_gray_900 w-auto"
                  variant="body5"
                >
                  Account
                </Text>
                <Text
                  className="font-normal text-blue_gray_900 w-auto"
                  variant="body5"
                >
                  My cart
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[248px] grid sm:grid-cols-1 grid-cols-2 w-[58%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-8 items-start justify-start w-auto">
                <Text
                  className="font-bold text-blue_gray_900 w-auto"
                  variant="body2"
                >
                  Assistance
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="font-normal text-blue_gray_900 w-auto"
                    variant="body5"
                  >
                    Shipping & returns
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_900 w-full"
                    variant="body5"
                  >
                    Privacy policy
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_900 w-full"
                    variant="body5"
                  >
                    FAQ
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-auto">
                <Text
                  className="font-bold text-blue_gray_900 w-auto"
                  variant="body2"
                >
                  Socials
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="font-normal text-blue_gray_900 w-auto"
                    variant="body5"
                  >
                    Instagram
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_900 w-auto"
                    variant="body5"
                  >
                    Facebook
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_900 w-auto"
                    variant="body5"
                  >
                    Youtube
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[194px] w-full">
            <Text className="font-normal text-blue_gray_700" variant="body6">
              All rights reserved - 2020 @ Bruce’s Attire
            </Text>
            <a
              href="javascript:"
              className="font-normal sm:ml-[0] ml-[389px] text-blue_gray_700"
            >
              <Text variant="body6">Terms & Conditions</Text>
            </a>
            <Text
              className="font-normal sm:ml-[0] ml-[557px] text-blue_gray_700"
              variant="body6"
            >
              Website by Sakila!
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageEight;

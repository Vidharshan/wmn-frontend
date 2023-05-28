import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const PageTwoOne = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-teal_50 flex flex-col items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[147px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1773px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col gap-9 items-start justify-start w-[37%] md:w-full">
            <Text
              className="font-karla font-normal ml-12 md:ml-[0] text-blue_gray_900"
              variant="body2"
            >
              Spring Summer 2021
            </Text>
            <Text
              className="font-black font-playfairdisplay text-blue_gray_900"
              as="h2"
              variant="h2"
            >
              ~New collection
            </Text>
            <div className="flex flex-col font-karla gap-10 items-start justify-start ml-12 md:ml-[0] w-[93%] md:w-full">
              <Text
                className="font-normal leading-[150.00%] text-blue_gray_900 w-full"
                variant="body5"
              >
                Urna convallis sem lacus amet laoreet lacus augue ultrices. Eu
                dolor ornare varius arcu ultrices imperdiet consectetur in. Odio
                egestas et at mi dui.
              </Text>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[212px]"
                onClick={() => navigate("/pagefiveone")}
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
                  Collection
                </div>
              </Button>
            </div>
          </div>
          <div className="h-[896px] relative w-[56%] md:w-full">
            <Img
              src="images/img_11.png"
              className="absolute h-[896px] inset-y-[0] my-auto object-cover right-[0] w-[91%]"
              alt="Eleven"
            />
            <div className="absolute bg-teal_50 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto p-[38px] sm:px-5 w-2/5">
              <Img
                src="images/img_cfd91cd4fc824.png"
                className="h-[436px] md:h-auto mt-1 object-cover w-[98%]"
                alt="cfd91cd4fc824"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTwoOne;

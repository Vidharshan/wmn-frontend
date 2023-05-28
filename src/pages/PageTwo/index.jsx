import React from "react";

import { Img, Text } from "components";

const PageTwo = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-karla items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[147px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-end w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[242px] w-[37%] md:w-full">
            <Text
              className="font-karla font-normal ml-12 md:ml-[0] text-blue_gray_900"
              variant="body2"
            >
              Spring Summer 2021
            </Text>
            <Text
              className="font-merriweather font-normal mt-[33px] text-blue_gray_900 tracking-[5.12px]"
              as="h2"
              variant="h2"
            >
              ~New collection
            </Text>
            <div className="flex flex-col font-karla gap-10 items-start justify-start ml-12 md:ml-[0] mt-[42px] w-[93%] md:w-full">
              <Text
                className="font-normal text-blue_gray_900 w-full"
                variant="body2"
              >
                Urna convallis sem lacus amet laoreet lacus augue ultrices. Eu
                dolor ornare varius arcu ultrices imperdiet consectetur in. Odio
                egestas et at mi dui.
              </Text>
              <div className="border border-blue_gray_700 border-solid flex flex-row gap-10 items-center justify-start p-4 w-auto">
                <Text
                  className="font-normal text-blue_gray_900 uppercase w-auto"
                  variant="body2"
                >
                  Collection
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-6 w-6"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="h-[896px] relative w-[58%] md:w-full">
            <div className="absolute h-[896px] inset-y-[0] my-auto right-[0] w-[93%] md:w-full">
              <Img
                src="images/img_productimage_896x793.png"
                className="absolute h-[896px] inset-y-[0] my-auto object-cover right-[0] w-[84%]"
                alt="imageFour"
              />
              <Img
                src="images/img_productimage_408x312.png"
                className="absolute h-[408px] inset-y-[0] left-[0] my-auto object-cover w-[33%]"
                alt="imageFive"
              />
            </div>
            <div className="absolute flex flex-row items-start justify-evenly left-[0] rotate-[47deg] top-[16%] w-[17%]">
              <div className="md:h-12 h-44 mt-[19px] relative w-[77%]">
                <div className="absolute bottom-[0] h-[165px] md:h-[29px] left-[0] w-[87%]">
                  <div className="absolute bottom-[0] h-[151px] md:h-[29px] left-[0] w-[86%]">
                    <div className="absolute bottom-[0] h-[135px] md:h-[29px] left-[0] w-[83%]">
                      <div className="absolute bottom-[0] h-[117px] md:h-[29px] left-[0] w-[82%]">
                        <div className="absolute bottom-[0] md:h-[29px] h-[97px] left-[0] w-[79%]">
                          <div className="absolute bottom-[0] md:h-[29px] h-[74px] left-[0] w-[74%]">
                            <div className="absolute bottom-[0] md:h-[29px] h-[52px] left-[0] w-[76%]">
                              <Text
                                className="absolute bottom-[0] font-normal left-[0] rotate-[28deg] text-green_300"
                                variant="body2"
                              >
                                H
                              </Text>
                              <Text
                                className="absolute font-normal right-[0] rotate-[22deg] text-green_300 top-[0]"
                                variant="body2"
                              >
                                A
                              </Text>
                            </div>
                            <Text
                              className="absolute font-normal right-[0] rotate-[16deg] text-green_300 top-[0]"
                              variant="body2"
                            >
                              N
                            </Text>
                          </div>
                          <Text
                            className="absolute font-normal right-[0] rotate-[10deg] text-green_300 top-[0]"
                            variant="body2"
                          >
                            D
                          </Text>
                        </div>
                        <Text
                          className="absolute font-normal right-[0] rotate-[4deg] text-green_300 top-[0]"
                          variant="body2"
                        >
                          C
                        </Text>
                      </div>
                      <Text
                        className="absolute font-normal right-[0] rotate-[-1deg] text-green_300 top-[0]"
                        variant="body2"
                      >
                        R
                      </Text>
                    </div>
                    <Text
                      className="absolute font-normal right-[0] rotate-[-7deg] text-green_300 top-[0]"
                      variant="body2"
                    >
                      A
                    </Text>
                  </div>
                  <Text
                    className="absolute font-normal right-[0] rotate-[-12deg] text-green_300 top-[0]"
                    variant="body2"
                  >
                    F
                  </Text>
                </div>
                <Text
                  className="absolute font-normal right-[0] rotate-[-17deg] text-green_300 top-[0]"
                  variant="body2"
                >
                  T
                </Text>
              </div>
              <Text
                className="font-normal mt-2 rotate-[-23deg] text-green_300"
                variant="body2"
              >
                E
              </Text>
              <Text
                className="font-normal rotate-[-28deg] text-green_300"
                variant="body2"
              >
                D
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTwo;

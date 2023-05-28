import React from "react";

import { Img, Text } from "components";

const PageThreeOne = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-karla items-end justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mr-[55px] md:px-5 w-[89%] md:w-full">
          <Img
            src="images/img_productimage_661x442.png"
            className="h-[661px] sm:h-auto md:mt-0 mt-[155px] object-cover rounded-tl-[312px] rounded-tr-[312px] w-[28%] md:w-full"
            alt="imageFour"
          />
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[159px] md:mt-0 mt-[111px] w-[21%] md:w-full">
            <Text
              className="font-karla font-normal text-blue_gray_900 uppercase"
              variant="body2"
            >
              Categories
            </Text>
            <div className="flex flex-col font-merriweather items-center justify-start mt-[37px]">
              <Text
                className="font-normal text-blue_gray_900 tracking-[5.12px]"
                as="h2"
                variant="h2"
              >
                Dresses
              </Text>
              <Text
                className="font-normal mt-3 text-blue_gray_900 tracking-[5.12px]"
                as="h2"
                variant="h2"
              >
                Skirts
              </Text>
              <Text
                className="font-normal mt-[15px] text-blue_gray_900 tracking-[5.12px]"
                as="h2"
                variant="h2"
              >
                Blouses
              </Text>
            </div>
            <Text
              className="font-merriweather font-normal mt-[15px] text-blue_gray_900 tracking-[5.12px]"
              as="h2"
              variant="h2"
            >
              Knitwear
            </Text>
            <Text
              className="font-merriweather font-normal mt-[19px] text-blue_gray_900 tracking-[5.12px]"
              as="h2"
              variant="h2"
            >
              Jackets
            </Text>
            <div className="border border-blue_gray_700 border-solid flex flex-row font-karla gap-10 items-center justify-start mt-9 p-4 w-auto">
              <a
                href="javascript:"
                className="font-normal text-blue_gray_900 uppercase w-auto"
              >
                <Text variant="body2">View all</Text>
              </a>
              <Img
                src="images/img_arrowright.svg"
                className="h-6 w-6"
                alt="arrowright"
              />
            </div>
          </div>
          <div className="md:h-[737px] h-[739px] mb-[76px] md:ml-[0] ml-[161px] relative w-[34%] md:w-full">
            <Img
              src="images/img_productimage_1.png"
              className="absolute h-[661px] left-[0] object-cover rounded-tl-[312px] rounded-tr-[312px] top-[0] w-[82%]"
              alt="imageThree"
            />
            <div className="absolute bottom-[0] flex flex-row items-start justify-between right-[0] rotate-[-140deg] w-[36%]">
              <Text
                className="font-normal mt-[145px] rotate-[-28deg] text-green_300"
                variant="body2"
              >
                D
              </Text>
              <Text
                className="font-normal mt-[139px] rotate-[-23deg] text-green_300"
                variant="body2"
              >
                E
              </Text>
              <div className="h-40 md:h-[42px] mb-[13px] relative w-[78%]">
                <div className="absolute h-[152px] md:h-[29px] right-[0] top-[0] w-[88%]">
                  <div className="absolute h-[140px] md:h-[29px] right-[0] top-[0] w-[87%]">
                    <div className="absolute h-[127px] md:h-[29px] right-[0] top-[0] w-[84%]">
                      <div className="absolute h-[111px] md:h-[29px] right-[0] top-[0] w-[81%]">
                        <div className="absolute md:h-[29px] h-[93px] right-[0] top-[0] w-[79%]">
                          <div className="absolute md:h-[29px] h-[72px] right-[0] top-[0] w-[73%]">
                            <div className="absolute md:h-[29px] h-[51px] right-[0] top-[0] w-3/4">
                              <Text
                                className="absolute font-normal right-[0] rotate-[28deg] text-green_300 top-[0]"
                                variant="body2"
                              >
                                H
                              </Text>
                              <Text
                                className="absolute bottom-[0] font-normal left-[0] rotate-[22deg] text-green_300"
                                variant="body2"
                              >
                                A
                              </Text>
                            </div>
                            <Text
                              className="absolute bottom-[0] font-normal left-[0] rotate-[16deg] text-green_300"
                              variant="body2"
                            >
                              N
                            </Text>
                          </div>
                          <Text
                            className="absolute bottom-[0] font-normal left-[0] rotate-[10deg] text-green_300"
                            variant="body2"
                          >
                            D
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] font-normal left-[0] rotate-[4deg] text-green_300"
                          variant="body2"
                        >
                          C
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[0] font-normal left-[0] rotate-[-1deg] text-green_300"
                        variant="body2"
                      >
                        R
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[0] font-normal left-[0] rotate-[-7deg] text-green_300"
                      variant="body2"
                    >
                      A
                    </Text>
                  </div>
                  <Text
                    className="absolute bottom-[0] font-normal left-[0] rotate-[-12deg] text-green_300"
                    variant="body2"
                  >
                    F
                  </Text>
                </div>
                <Text
                  className="absolute bottom-[0] font-normal left-[0] rotate-[-17deg] text-green_300"
                  variant="body2"
                >
                  T
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageThreeOne;

import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const PageFiveOne = () => {
  return (
    <>
      <div className="bg-teal_50 font-roboto h-[972px] mx-auto relative w-full">
        <div className="absolute bottom-[0] flex flex-col items-center justify-end md:px-5 right-[5%] w-[70%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-[43px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-1 flex-col items-center justify-start py-3 w-full">
                <div className="flex flex-col justify-start mb-[13px] w-full">
                  <Img
                    src="images/img_group2.png"
                    className="h-[31px] md:h-auto md:ml-[0] ml-[352px] object-cover w-[11%]"
                    alt="groupTwo"
                  />
                  <Line className="bg-gray_400 h-px mt-[149px] w-full" />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-3.5 w-[88%] md:w-full">
                    <Text className="font-medium text-gray_500" variant="body8">
                      Promo Code: 10521
                    </Text>
                    <Text
                      className="font-medium mt-1 text-black_900"
                      variant="body4"
                    >
                      Big Blue Lego jeep collection
                    </Text>
                    <div className="flex flex-row items-end justify-start mt-[49px] w-full">
                      <div className="flex flex-col items-start justify-start mb-3.5">
                        <Text
                          className="font-medium text-gray_500"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold mt-0.5 text-black_900"
                          variant="body4"
                        >
                          $400
                        </Text>
                      </div>
                      <Text
                        className="font-bold line-through mb-4 ml-[31px] mt-6 text-gray_700"
                        variant="body7"
                      >
                        $600
                      </Text>
                      <Img
                        src="images/img_group1.png"
                        className="h-[43px] md:h-auto ml-48 mt-[15px] object-cover w-[17%]"
                        alt="groupOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-1 flex-col items-center justify-start py-3 w-full">
                <div className="flex flex-col justify-start mb-[13px] w-full">
                  <Img
                    src="images/img_group2.png"
                    className="h-[31px] md:h-auto md:ml-[0] ml-[352px] object-cover w-[11%]"
                    alt="groupFour"
                  />
                  <Line className="bg-gray_400 h-px mt-[149px] w-full" />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-3.5 w-[88%] md:w-full">
                    <Text className="font-medium text-gray_500" variant="body8">
                      Promo Code: 10521
                    </Text>
                    <Text
                      className="font-medium mt-1 text-black_900"
                      variant="body4"
                    >
                      Big Blue Lego jeep collection
                    </Text>
                    <div className="flex flex-row items-end justify-end mt-[49px] w-full">
                      <div className="flex flex-col items-start justify-start mb-3.5">
                        <Text
                          className="font-medium text-gray_500"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold mt-0.5 text-black_900"
                          variant="body4"
                        >
                          $400
                        </Text>
                      </div>
                      <Text
                        className="font-bold line-through mb-4 ml-[31px] mt-6 text-gray_700"
                        variant="body7"
                      >
                        $600
                      </Text>
                      <Img
                        src="images/img_group1.png"
                        className="h-[43px] md:h-auto ml-[191px] mt-[15px] object-cover w-[17%]"
                        alt="groupThree"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-1 flex-col items-center justify-start py-3 w-full">
                <div className="flex flex-col justify-start mb-[13px] w-full">
                  <Img
                    src="images/img_group2.png"
                    className="h-[31px] md:h-auto md:ml-[0] ml-[353px] object-cover w-[11%]"
                    alt="groupSix"
                  />
                  <Line className="bg-gray_400 h-px mt-[149px] w-full" />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-3.5 w-[88%] md:w-full">
                    <Text className="font-medium text-gray_500" variant="body8">
                      Promo Code: 10521
                    </Text>
                    <Text
                      className="font-medium mt-1 text-black_900"
                      variant="body4"
                    >
                      Big Blue Lego jeep collection
                    </Text>
                    <div className="flex flex-row items-end justify-start mt-[49px] w-full">
                      <div className="flex flex-col items-start justify-start mb-3.5">
                        <Text
                          className="font-medium text-gray_500"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold mt-0.5 text-black_900"
                          variant="body4"
                        >
                          $400
                        </Text>
                      </div>
                      <Text
                        className="font-bold line-through mb-4 ml-[31px] mt-6 text-gray_700"
                        variant="body7"
                      >
                        $600
                      </Text>
                      <Img
                        src="images/img_group1.png"
                        className="h-[43px] md:h-auto ml-48 mt-[15px] object-cover w-[17%]"
                        alt="groupFive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-1 flex-col items-center justify-start py-3 w-full">
                <div className="flex flex-col justify-start mb-[5px] w-full">
                  <Img
                    src="images/img_group2.png"
                    className="h-[31px] md:h-auto md:ml-[0] ml-[352px] object-cover w-[11%]"
                    alt="groupEight"
                  />
                  <Line className="bg-gray_400 h-px mt-[149px] w-full" />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-3.5 w-[88%] md:w-full">
                    <Text className="font-medium text-gray_500" variant="body8">
                      Promo Code: 10521
                    </Text>
                    <Text
                      className="font-medium mt-1 text-black_900 w-[79%] sm:w-full"
                      variant="body4"
                    >
                      Big Blue Lego jeep collection
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray_500"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold mt-[3px] text-black_900"
                          variant="body4"
                        >
                          $400
                        </Text>
                        <Text
                          className="font-bold line-through md:ml-[0] ml-[77px] text-gray_700"
                          variant="body7"
                        >
                          $600
                        </Text>
                      </div>
                      <Img
                        src="images/img_group1.png"
                        className="h-[43px] md:h-auto object-cover"
                        alt="groupSeven"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-1 flex-col items-center justify-start py-3 w-full">
                <div className="flex flex-col justify-start mb-[5px] w-full">
                  <Img
                    src="images/img_group2.png"
                    className="h-[31px] md:h-auto md:ml-[0] ml-[352px] object-cover w-[11%]"
                    alt="groupTen"
                  />
                  <Line className="bg-gray_400 h-px mt-[149px] w-full" />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-3.5 w-[88%] md:w-full">
                    <Text className="font-medium text-gray_500" variant="body8">
                      Promo Code: 10521
                    </Text>
                    <Text
                      className="font-medium mt-1 text-black_900 w-[79%] sm:w-full"
                      variant="body4"
                    >
                      Big Blue Lego jeep collection
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray_500"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold mt-[3px] text-black_900"
                          variant="body4"
                        >
                          $400
                        </Text>
                        <Text
                          className="font-bold line-through md:ml-[0] ml-[77px] text-gray_700"
                          variant="body7"
                        >
                          $600
                        </Text>
                      </div>
                      <Img
                        src="images/img_group1.png"
                        className="h-[43px] md:h-auto object-cover"
                        alt="groupNine"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-1 flex-col items-center justify-start py-3 w-full">
                <div className="flex flex-col justify-start mb-[5px] w-full">
                  <Img
                    src="images/img_group2.png"
                    className="h-[31px] md:h-auto md:ml-[0] ml-[353px] object-cover w-[11%]"
                    alt="groupTwelve"
                  />
                  <Line className="bg-gray_400 h-px mt-[149px] w-full" />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-3.5 w-[88%] md:w-full">
                    <Text className="font-medium text-gray_500" variant="body8">
                      Promo Code: 10521
                    </Text>
                    <Text
                      className="font-medium mt-1 text-black_900 w-[79%] sm:w-full"
                      variant="body4"
                    >
                      Big Blue Lego jeep collection
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray_500"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold mt-[3px] text-black_900"
                          variant="body4"
                        >
                          $400
                        </Text>
                        <Text
                          className="font-bold line-through md:ml-[0] ml-[77px] text-gray_700"
                          variant="body7"
                        >
                          $600
                        </Text>
                      </div>
                      <Img
                        src="images/img_group1.png"
                        className="h-[43px] md:h-auto object-cover"
                        alt="groupEleven"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_group6.png"
          className="h-[31px] ml-auto mr-[205px] mt-[29px] object-cover w-[3%]"
          alt="groupSix"
        />
        <div className="absolute flex flex-col inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <div className="h-[158px] md:h-[870px] relative w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[16%] w-[52%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Line className="bg-gray_300 md:h-0.5 h-[90px] mb-[68px] w-0.5 md:w-full" />
                  <Line className="bg-gray_300 md:h-0.5 h-[158px] md:ml-[0] ml-[270px] w-0.5 md:w-full" />
                  <Line className="bg-gray_300 md:h-0.5 h-[90px] mb-[68px] ml-56 md:ml-[0] w-0.5 md:w-full" />
                  <Line className="bg-gray_300 md:h-0.5 h-[158px] md:ml-[0] ml-[228px] w-0.5 md:w-full" />
                  <Line className="bg-gray_300 md:h-0.5 h-[90px] mb-[68px] md:ml-[0] ml-[255px] w-0.5 md:w-full" />
                </div>
              </div>
              <Line className="absolute bg-gray_300 bottom-[42%] h-0.5 inset-x-[0] mx-auto w-full" />
            </div>
            <Line className="bg-gray_300 h-0.5 w-full" />
          </div>
          <Sidebar className="!sticky !w-[366px] bg-gray_200 flex h-screen md:hidden justify-start mb-auto ml-12 mt-[-160px] overflow-auto rounded-[28px] top-[0] z-[1]">
            <div className="flex flex-col gap-[39px] items-start justify-start mb-[34px] mt-[23px] w-[87%]">
              <div className="flex flex-col justify-start md:ml-[0] ml-[3px] w-[67%] md:w-full">
                <div className="flex flex-row font-inter gap-[49px] items-center justify-start md:ml-[0] ml-[9px] w-4/5 md:w-full">
                  <div className="h-[41px] relative w-[34%]">
                    <div className="bg-gray_200 h-[41px] m-auto rounded-[28px] w-full"></div>
                    <Img
                      src="images/img_image12.png"
                      className="absolute h-[19px] inset-[0] justify-center m-auto object-cover w-[49%]"
                      alt="imageTwelve"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body5"
                    >
                      Redefy
                    </Text>
                    <Text
                      className="font-semibold mt-[3px] text-gray_400_01"
                      variant="body9"
                    >
                      RED BRICK
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-inter gap-[22px] items-start justify-end ml-5 md:ml-[0] mt-[46px] w-[91%] md:w-full">
                  <Img
                    src="images/img_image14.png"
                    className="h-5 md:h-auto object-cover w-[15%]"
                    alt="imageFourteen"
                  />
                  <div className="h-[17px] md:h-[19px] mt-0.5 relative w-3/4">
                    <Text
                      className="font-semibold m-auto text-black_900"
                      variant="body7"
                    >
                      <span className="text-black_900 text-sm font-inter text-left">
                        Main page{" "}
                      </span>
                      <span className="text-blue_gray_100 text-sm font-inter text-left">
                        Catalog
                      </span>
                    </Text>
                    <Img
                      src="images/img_image13_11x16.png"
                      className="absolute h-[11px] object-cover right-[36%] top-[0] w-[12%]"
                      alt="imageThirteen"
                    />
                  </div>
                </div>
                <Text
                  className="font-medium font-roboto mt-[53px] text-black_900"
                  variant="body8"
                >
                  Price
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[132px] text-[10px] text-center text-gray_500_01"
                    size="sm"
                    variant="FillGray20001"
                  >
                    From Rs 200
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[132px] text-[10px] text-center text-gray_500_01"
                    size="sm"
                    variant="FillGray20001"
                  >
                    Up to Rs 9000
                  </Button>
                </div>
                <div className="h-3 md:h-[35px] mt-[23px] relative w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[16%] my-auto w-[53%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="bg-red_A700 h-3 rounded-lg w-[10%]"></div>
                      <div className="bg-red_A700 h-3 rounded-lg w-[10%]"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-[33%] h-0.5 inset-x-[0] mx-auto w-full">
                    <Line className="bg-gray_200_02 h-0.5 m-auto w-full" />
                    <Line className="absolute bg-red_A700 h-0.5 inset-y-[0] left-[18%] my-auto w-[48%]" />
                  </div>
                </div>
                <Text
                  className="font-medium mt-[42px] text-black_900"
                  variant="body8"
                >
                  Waist Rise
                </Text>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[29px] w-1/4 md:w-full">
                  <div className="bg-red_A700 flex flex-col items-center justify-start p-[3px] w-[37%]">
                    <Img
                      src="images/img_group14.png"
                      className="h-3.5 md:h-auto object-cover w-[87%]"
                      alt="groupFourteen"
                    />
                  </div>
                  <Text
                    className="font-normal text-gray_500_01"
                    variant="body9"
                  >
                    Regular
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[22px] w-1/5 md:w-full">
                  <div className="bg-gray_200_01 h-[21px] w-[46%]"></div>
                  <Text
                    className="font-normal text-gray_500_01"
                    variant="body9"
                  >
                    Low{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[23px] w-1/5 md:w-full">
                  <div className="bg-gray_200_01 h-5 w-[45%]"></div>
                  <Text
                    className="font-normal text-gray_500_01"
                    variant="body9"
                  >
                    High
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[23px] w-[29%] md:w-full">
                  <div className="bg-gray_200_01 h-5 w-[31%]"></div>
                  <Text
                    className="font-normal text-gray_500_01"
                    variant="body9"
                  >
                    Super High
                  </Text>
                </div>
                <Text
                  className="font-medium mt-[23px] text-black_900"
                  variant="body8"
                >
                  Size
                </Text>
                <Line className="bg-gray_200_01 h-0.5 mt-[7px] w-[96%]" />
                <Img
                  src="images/img_image9.png"
                  className="h-[27px] md:h-auto mt-[11px] object-cover w-[13%] sm:w-full"
                  alt="imageNine"
                />
                <Line className="bg-gray_200_01 h-0.5 mt-[22px] w-[96%]" />
                <div className="flex flex-row items-start justify-between mt-[23px] w-[95%] md:w-full">
                  <Text className="font-medium text-black_900" variant="body8">
                    Brand
                  </Text>
                  <Img
                    src="images/img_image9.png"
                    className="h-[27px] md:h-auto object-cover"
                    alt="imageTen"
                  />
                </div>
                <Line className="bg-gray_200_01 h-0.5 mt-[26px] w-[96%]" />
                <div className="flex flex-row items-start justify-between mt-6 w-[95%] md:w-full">
                  <Text className="font-medium text-black_900" variant="body8">
                    Stock Availabilty
                  </Text>
                  <Img
                    src="images/img_image9.png"
                    className="h-[27px] md:h-auto object-cover"
                    alt="imageEleven"
                  />
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[302px] mt-[37px] text-center text-sm text-white_A700"
                  size="md"
                  variant="FillRedA700"
                >
                  APPLY FILTER
                </Button>
              </div>
            </div>
            <Line className="bg-gray_300 h-[897px] ml-[49px] w-0.5" />
          </Sidebar>
          <div className="flex flex-col font-inter gap-[47px] items-center justify-start ml-auto mr-[85px] mt-[-NaNpx] w-[72%] z-[1]">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
              <Text
                className="font-semibold md:mt-0 mt-1.5 text-black_900 text-center"
                variant="body7"
              >
                Toys
              </Text>
              <Text
                className="bg-red_A700 h-4 justify-center md:ml-[0] ml-[19px] md:mt-0 mt-1.5 px-3 py-0.5 text-center text-white_A700 w-11"
                as="h1"
                variant="h1"
              >
                HOT
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[154px] md:mt-0 mt-1.5 text-black_900 text-center"
                variant="body7"
              >
                Catalog
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[179px] md:mt-0 mt-1 text-black_900 text-center"
                variant="body7"
              >
                Characters
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[177px] md:mt-0 mt-[5px] text-black_900 text-center"
                variant="body7"
              >
                Brand
              </Text>
              <Img
                src="images/img_image16.png"
                className="h-[18px] sm:h-auto md:ml-[0] ml-[165px] md:mt-0 mt-[5px] object-cover w-[2%] md:w-full"
                alt="imageSixteen"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[26px] md:mt-0 mt-1 text-black_900 text-center"
                variant="body7"
              >
                ENG
              </Text>
              <Img
                src="images/img_image15.png"
                className="h-[18px] sm:h-auto ml-4 md:ml-[0] md:mt-0 mt-[5px] object-cover w-[2%] md:w-full"
                alt="imageFifteen"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[211px] text-black_900 text-center"
                variant="body7"
              >
                Alex
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[64%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[47%] md:w-full">
                  <Img
                    src="images/img_group1.png"
                    className="h-[35px] md:h-auto object-cover w-[13%] sm:w-full"
                    alt="groupThirteen"
                  />
                  <Text
                    className="font-semibold sm:ml-[0] ml-[23px] text-black_900"
                    variant="body8"
                  >
                    Compare Products
                  </Text>
                  <Text
                    className="font-semibold ml-52 sm:ml-[0] text-center text-gray_600"
                    variant="body7"
                  >
                    <>-&gt;</>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[47%] md:w-full">
                  <Img
                    src="images/img_group13.png"
                    className="h-[35px] md:h-auto object-cover w-[13%] sm:w-full"
                    alt="groupThirteen_One"
                  />
                  <Text
                    className="font-semibold sm:ml-[0] ml-[23px] text-black_900"
                    variant="body8"
                  >
                    Wish List (0)
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[243px] text-center text-gray_600"
                    variant="body7"
                  >
                    <>-&gt;</>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-[30%] md:w-full">
                <Img
                  src="images/img_group1.png"
                  className="h-[35px] md:h-auto object-cover w-[13%] sm:w-full"
                  alt="groupThirteen_Two"
                />
                <Text
                  className="font-semibold sm:ml-[0] ml-[23px] text-black_900"
                  variant="body8"
                >
                  2 Products - $1000
                </Text>
                <Text
                  className="font-semibold sm:ml-[0] ml-[205px] text-center text-gray_600"
                  variant="body7"
                >
                  <>-&gt;</>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter gap-3 items-start justify-start ml-auto mr-[103px] mt-[-NaNpx] w-[70%] z-[1]">
            <Text className="font-semibold text-black_900" variant="body2">
              Catalog
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between w-full">
              <div className="bg-white_A700 border border-blue_gray_100_01 border-solid flex md:flex-1 flex-row items-center justify-start w-[66%] md:w-full">
                <Img
                  src="images/img_image17.png"
                  className="h-[19px] md:h-auto ml-[15px] object-cover w-[3%]"
                  alt="imageSeventeen"
                />
                <Line className="bg-blue_gray_100_01 h-11 ml-[17px] w-px" />
                <Text
                  className="font-medium ml-[9px] text-gray_400_02"
                  variant="body7"
                >
                  Search among 1000+ products
                </Text>
              </div>
              <div className="bg-white_A700 border border-blue_gray_100_01 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end w-[32%] md:w-full">
                <Img
                  src="images/img_image17_20x32.png"
                  className="h-5 md:h-auto object-cover w-[8%] sm:w-full"
                  alt="imageSeventeen_One"
                />
                <Line className="bg-blue_gray_100_01 h-11 sm:h-px ml-3.5 sm:ml-[0] sm:w-full w-px" />
                <Text
                  className="font-medium ml-4 sm:ml-[0] text-gray_700_01"
                  variant="body7"
                >
                  Popular
                </Text>
                <Img
                  src="images/img_image13_21x29.png"
                  className="h-[21px] md:h-auto sm:ml-[0] ml-[235px] mr-3 object-cover w-[8%] sm:w-full"
                  alt="imageThirteen_One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFiveOne;

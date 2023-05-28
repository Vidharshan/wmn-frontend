import React from "react";

import { Img, List, Text } from "components";
import Header1 from "components/Header1";

const FullwebsitePage = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-karla items-center justify-start mx-auto w-full">
        <Header1 className="flex flex-row items-center justify-between p-10 md:px-5 w-full" />
        <div className="flex h-[709px] md:h-[710px] justify-end mt-10 md:px-5 relative w-[53%] md:w-full">
          <Text
            className="absolute bottom-[1%] font-normal left-[0] text-teal_300"
            variant="body2"
          >
            <>
              intersection of couture
              <br />
              and ready-to-wear
            </>
          </Text>
          <Text
            className="font-normal mb-1.5 ml-auto mr-[7px] mt-auto text-teal_300"
            variant="body2"
          >
            <>
              to create clothing
              <br />
              with timeless style
            </>
          </Text>
          <div className="absolute font-merriweather md:h-[670px] h-[709px] inset-[0] justify-center m-auto w-[97%] md:w-full">
            <div className="absolute bottom-[0] h-[670px] inset-x-[0] mx-auto w-[46%] sm:w-full">
              <Img
                src="images/img_productimage.png"
                className="h-[670px] m-auto object-cover rounded-tl-[312px] rounded-tr-[312px] w-full"
                alt="imageThree"
              />
              <div className="absolute bg-gradient  h-[670px] inset-[0] justify-center m-auto rounded-tl-[312px] rounded-tr-[312px] w-full"></div>
            </div>
            <div className="absolute flex flex-row font-karla inset-x-[0] items-start justify-center mx-auto top-[0] w-[26%]">
              <Text
                className="font-normal mt-[29px] rotate-[28deg] text-teal_300"
                variant="body2"
              >
                H
              </Text>
              <Text
                className="font-normal mb-2.5 ml-0.5 mt-[18px] rotate-[22deg] text-teal_300"
                variant="body2"
              >
                A
              </Text>
              <Text
                className="font-normal mb-[18px] ml-[3px] mt-2.5 rotate-[16deg] text-teal_300"
                variant="body2"
              >
                N
              </Text>
              <Text
                className="font-normal mb-[25px] ml-[7px] mt-[3px] rotate-[10deg] text-teal_300"
                variant="body2"
              >
                D
              </Text>
              <Text
                className="font-normal mb-7 ml-1.5 rotate-[4deg] text-teal_300"
                variant="body2"
              >
                C
              </Text>
              <Text
                className="font-normal mb-[29px] ml-[7px] rotate-[-1deg] text-teal_300"
                variant="body2"
              >
                R
              </Text>
              <Text
                className="font-normal mb-[27px] ml-1.5 rotate-[-7deg] text-teal_300"
                variant="body2"
              >
                A
              </Text>
              <Text
                className="font-normal mb-[23px] ml-1.5 mt-[5px] rotate-[-12deg] text-teal_300"
                variant="body2"
              >
                F
              </Text>
              <Text
                className="font-normal mb-[18px] ml-0.5 mt-2.5 rotate-[-17deg] text-teal_300"
                variant="body2"
              >
                T
              </Text>
              <Text
                className="font-normal mb-[11px] ml-0.5 mt-[17px] rotate-[-23deg] text-teal_300"
                variant="body2"
              >
                E
              </Text>
              <Text
                className="font-normal ml-0.5 mt-7 rotate-[-28deg] text-teal_300"
                variant="body2"
              >
                D
              </Text>
            </div>
            <Text
              className="absolute bottom-[14%] font-normal inset-x-[0] mx-auto text-blue_gray_900 tracking-[5.12px] w-max"
              as="h2"
              variant="h2"
            >
              ~Embrace your uniqueness{" "}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[200px] items-end justify-start mt-[200px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:px-5 w-[93%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[242px] w-[37%] md:w-full">
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
              <div className="flex flex-col font-karla items-start justify-start ml-12 md:ml-[0] mt-[42px] w-[93%] md:w-full">
                <Text
                  className="font-normal text-blue_gray_900 w-full"
                  variant="body2"
                >
                  Urna convallis sem lacus amet laoreet lacus augue ultrices. Eu
                  dolor ornare varius arcu ultrices imperdiet consectetur in.
                  Odio egestas et at mi dui.
                </Text>
                <div className="border border-blue_gray_700 border-solid flex flex-row gap-10 items-center justify-start mt-10 p-4 w-auto">
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
                <Img
                  src="images/img_productimage_661x442.png"
                  className="h-[661px] sm:h-auto mt-[639px] object-cover rounded-tl-[312px] rounded-tr-[312px] w-[74%] md:w-full"
                  alt="imageSeven"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[200px] justify-start mb-[72px] md:ml-[0] ml-[3px] w-[64%] md:w-full">
              <div className="h-[896px] ml-44 md:ml-[0] relative w-[85%] md:w-full">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[83%] md:w-full">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[111px]">
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
                      alt="arrowright_One"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_productimage_1.png"
                  className="h-[661px] md:h-auto mb-[83px] object-cover rounded-tl-[312px] rounded-tr-[312px]"
                  alt="imageSix"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <div className="font-merriweather h-[896px] md:px-5 relative w-full">
              <Img
                src="images/img_productimage_896x1920.png"
                className="h-[896px] m-auto object-cover w-full"
                alt="imageEight"
              />
              <div className="absolute flex flex-col gap-10 items-start justify-start left-[10%] top-[4%] w-[30%]">
                <Text
                  className="font-normal leading-[130.00%] text-blue_gray_900 tracking-[5.12px]"
                  as="h2"
                  variant="h2"
                >
                  <span className="md:text-5xl text-blue_gray_900 text-[64px] font-merriweather text-left">
                    <>
                      Spring Summer
                      <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-blue_gray_900 text-2xl font-merriweather text-left">
                    2021
                  </span>
                  <span className="md:text-5xl text-blue_gray_900 text-[64px] font-merriweather text-left">
                    {" "}
                    Collection
                  </span>
                </Text>
                <div className="border border-blue_gray_700 border-solid flex flex-row font-karla gap-10 items-center justify-start p-4 w-auto">
                  <Text
                    className="font-normal text-blue_gray_900 uppercase w-auto"
                    variant="body2"
                  >
                    View collection
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-6 w-6"
                    alt="arrowright_Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-karla gap-12 items-start justify-center max-w-[1218px] mt-[199px] mx-auto md:px-5 w-full">
              <div className="md:h-[1386px] sm:h-[930px] h-[982px] relative w-[67%] md:w-full">
                <div className="absolute flex md:flex-col flex-row md:gap-12 inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                  <Img
                    src="images/img_productsimage.png"
                    className="h-[464px] md:h-auto md:mt-0 mt-[466px] object-cover"
                    alt="imageTen"
                  />
                  <div className="h-[676px] mb-[254px] relative w-[51%] md:w-full">
                    <div className="flex flex-col items-center justify-start mb-[-36.94px] mx-auto w-[85%] z-[1]">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <div className="h-[53px] md:h-[68px] mt-[39px] relative w-[16%]">
                          <div className="absolute bottom-[0] md:h-[29px] h-[41px] left-[0] w-[70%]">
                            <Text
                              className="absolute bottom-[0] font-normal left-[0] rotate-[42deg] text-blue_gray_900"
                              variant="body2"
                            >
                              S
                            </Text>
                            <Text
                              className="absolute font-normal right-[0] rotate-[37deg] text-blue_gray_900 top-[0]"
                              variant="body2"
                            >
                              e
                            </Text>
                          </div>
                          <Text
                            className="absolute font-normal right-[0] rotate-[32deg] text-blue_gray_900 top-[0]"
                            variant="body2"
                          >
                            a
                          </Text>
                        </div>
                        <Text
                          className="font-normal mt-7 rotate-[27deg] text-blue_gray_900"
                          variant="body2"
                        >
                          s
                        </Text>
                        <Text
                          className="font-normal mt-[19px] rotate-[21deg] text-blue_gray_900"
                          variant="body2"
                        >
                          o
                        </Text>
                        <Text
                          className="font-normal mt-3 rotate-[16deg] text-blue_gray_900"
                          variant="body2"
                        >
                          n
                        </Text>
                        <Text
                          className="font-normal mt-1.5 rotate-[11deg] text-blue_gray_900"
                          variant="body2"
                        >
                          a
                        </Text>
                        <Text
                          className="font-normal rotate-[6deg] text-blue_gray_900"
                          variant="body2"
                        >
                          l
                        </Text>
                        <Text
                          className="font-normal rotate-[-1deg] text-blue_gray_900"
                          variant="body2"
                        >
                          h
                        </Text>
                        <Text
                          className="font-normal rotate-[-6deg] text-blue_gray_900"
                          variant="body2"
                        >
                          i
                        </Text>
                        <Text
                          className="font-normal mt-2 rotate-[-10deg] text-blue_gray_900"
                          variant="body2"
                        >
                          g
                        </Text>
                        <Text
                          className="font-normal mt-2 rotate-[-15deg] text-blue_gray_900"
                          variant="body2"
                        >
                          h
                        </Text>
                        <Text
                          className="font-normal mt-3.5 rotate-[-20deg] text-blue_gray_900"
                          variant="body2"
                        >
                          l
                        </Text>
                        <div className="md:h-[39px] h-[41px] mt-[19px] relative w-[10%]">
                          <Text
                            className="absolute font-normal left-[0] rotate-[-23deg] text-blue_gray_900 top-[0]"
                            variant="body2"
                          >
                            i
                          </Text>
                          <Text
                            className="absolute bottom-[0] font-normal right-[0] rotate-[-28deg] text-blue_gray_900"
                            variant="body2"
                          >
                            g
                          </Text>
                        </div>
                        <div className="flex flex-col justify-start mt-[38px]">
                          <Text
                            className="font-normal h-5 mr-7 rotate-[-33deg] text-blue_gray_900"
                            variant="body2"
                          >
                            h
                          </Text>
                          <Text
                            className="font-normal ml-4 md:ml-[0] rotate-[-38deg] text-blue_gray_900"
                            variant="body2"
                          >
                            t
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[31px] rotate-[-42deg] text-blue_gray_900"
                            variant="body2"
                          >
                            s
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_productsimage_620x414.png"
                      className="h-[620px] mt-auto mx-auto object-cover rounded-tl-[312px] rounded-tr-[312px] w-full"
                      alt="imageNine"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_image11.png"
                  className="absolute bottom-[0] h-[426px] object-cover right-[5%] w-2/5"
                  alt="imageEleven"
                />
                <Img
                  src="images/img_arrowright.svg"
                  className="absolute h-6 left-[27%] top-[37%] w-6"
                  alt="arrowleft"
                />
                <div className="absolute bottom-[1%] flex flex-row items-start justify-between left-[0] w-[44%]">
                  <Text
                    className="font-normal text-blue_gray_700"
                    variant="body2"
                  >
                    Off-white Dreamy
                  </Text>
                  <Img
                    src="images/img_iconsbag.svg"
                    className="h-[27px] w-[27px]"
                    alt="materialsymbol"
                  />
                </div>
                <div className="absolute bg-blue_gray_900 bottom-[37%] flex flex-col h-[84px] items-center justify-end left-[42%] p-[17px] rounded-[50%] w-[84px]">
                  <Img
                    src="images/img_grid.svg"
                    className="h-[49px] w-[49px]"
                    alt="grid"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-20 justify-start md:mt-0 mt-[362px] w-[30%] md:w-full">
                <Img
                  src="images/img_arrowright.svg"
                  className="h-6 ml-28 md:ml-[0] w-6"
                  alt="arrowright_Three"
                />
                <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                  <Img
                    src="images/img_productsimage_464x354.png"
                    className="h-[464px] md:h-auto object-cover w-full"
                    alt="imageTwelve"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-normal text-blue_gray_700"
                      variant="body2"
                    >
                      Off-white classics
                    </Text>
                    <Img
                      src="images/img_iconsbag.svg"
                      className="h-[27px] mt-0.5 w-[27px]"
                      alt="materialsymbol_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-karla md:gap-5 items-start justify-start md:ml-[0] ml-[351px] mt-[5px] md:px-5 w-1/2 md:w-full">
              <Text
                className="font-normal mb-2 text-blue_gray_700"
                variant="body2"
              >
                $ 4,500
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[364px] md:mt-0 mt-2 text-blue_gray_700"
                variant="body2"
              >
                Blue Abstract Prints
              </Text>
              <Img
                src="images/img_iconsbag.svg"
                className="h-6 md:ml-[0] ml-[83px] md:mt-0 mt-2.5 w-6"
                alt="materialsymbol_Two"
              />
              <Text
                className="font-normal mb-2 md:ml-[0] ml-[92px] text-blue_gray_700"
                variant="body2"
              >
                $ 4,500
              </Text>
            </div>
            <Text
              className="font-karla font-normal md:ml-[0] ml-[797px] mt-[11px] text-blue_gray_700"
              variant="body2"
            >
              $ 4,500
            </Text>
            <div className="flex md:flex-col flex-row font-merriweather md:gap-10 items-center justify-between max-w-[1840px] mt-[193px] mx-auto md:px-5 w-full">
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
                  alt="arrowright_Four"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-karla gap-[42px] items-center justify-start max-w-[1530px] mt-[42px] mx-auto md:px-5 w-full">
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
                className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
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
            <Text
              className="font-merriweather font-normal md:ml-[0] ml-[685px] mt-[204px] text-blue_gray_900 tracking-[5.12px]"
              as="h2"
              variant="h2"
            >
              Our Philosophy
            </Text>
            <div className="flex md:flex-col flex-row font-karla gap-2 items-start justify-center md:ml-[0] ml-[506px] mt-[34px] md:px-5 w-[49%] md:w-full">
              <div className="flex flex-col justify-start md:mt-0 mt-[157px]">
                <Text
                  className="font-medium text-blue_gray_700"
                  variant="body2"
                >
                  Bruce’s attire
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[54px] mt-[72px] text-blue_gray_700"
                  variant="body2"
                >
                  intersection
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[76px] mr-10 mt-[75px] text-blue_gray_700"
                  variant="body2"
                >
                  ready-to-wear
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[122px] mt-[71px] text-blue_gray_700"
                  variant="body2"
                >
                  clothing with
                </Text>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-[39%] md:w-full">
                <Img
                  src="images/img_image13.png"
                  className="h-[466px] sm:h-auto object-cover rounded-bl-[128px] rounded-br-[128px] w-full"
                  alt="imageThirteen_One"
                />
                <Text
                  className="font-medium text-blue_gray_700"
                  variant="body2"
                >
                  timeless style.
                </Text>
              </div>
              <div className="flex flex-col justify-start md:mt-0 mt-40">
                <Text
                  className="font-medium md:ml-[0] ml-[120px] text-blue_gray_700"
                  variant="body2"
                >
                  operates at the
                </Text>
                <Text
                  className="font-medium ml-20 md:ml-[0] mt-[65px] text-blue_gray_700"
                  variant="body2"
                >
                  of couture &
                </Text>
                <Text
                  className="font-medium ml-10 md:ml-[0] mr-[74px] mt-[70px] text-blue_gray_700"
                  variant="body2"
                >
                  to create luxury
                </Text>
                <Text
                  className="font-medium mt-[65px] text-blue_gray_700"
                  variant="body2"
                >
                  a relaxed
                </Text>
              </div>
            </div>
            <footer className="bg-teal_200 flex font-karla items-center justify-center mt-[194px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-center mb-[50px] mt-[61px] mx-auto w-4/5">
                <div className="flex flex-col md:gap-10 gap-[73px] items-center justify-center w-full">
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
                        <ul className="flex flex-col gap-10 items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Shop</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Collection</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">About</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Account</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">My cart</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-auto">
                        <Text
                          className="font-bold text-blue_gray_900 w-auto"
                          variant="body2"
                        >
                          Assistance
                        </Text>
                        <ul className="flex flex-col gap-10 items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Shipping & returns</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Privacy policy</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">FAQ</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-auto">
                        <Text
                          className="font-bold text-blue_gray_900 w-auto"
                          variant="body2"
                        >
                          Socials
                        </Text>
                        <ul className="flex flex-col gap-10 items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Instagram</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Facebook</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-medium text-blue_gray_900"
                            >
                              <Text variant="body2">Youtube</Text>
                            </a>
                          </li>
                        </ul>
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
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullwebsitePage;

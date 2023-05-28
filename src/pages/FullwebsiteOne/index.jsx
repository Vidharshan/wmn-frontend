import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";

const FullwebsiteOnePage = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-karla items-center justify-start mx-auto w-full">
        <Header className="bg-teal_50 flex items-center justify-between p-10 md:px-5 w-full" />
        <div className="h-[708px] mt-10 md:px-5 relative w-[52%] md:w-full">
          <div className="font-playfairdisplay md:h-[613px] h-[705px] mb-[-53px] ml-auto mr-[61px] mt-auto w-[84%] md:w-full z-[1]">
            <div className="absolute bottom-[0] h-[666px] inset-x-[0] mx-auto w-[55%] sm:w-full">
              <Img
                src="images/img_productimage.png"
                className="h-[666px] m-auto object-cover rounded-tl-[312px] rounded-tr-[312px] w-full"
                alt="productimage"
              />
              <div className="absolute bg-gradient  h-[666px] inset-[0] justify-center m-auto rounded-tl-[312px] rounded-tr-[312px] w-full"></div>
            </div>
            <div className="absolute flex flex-row font-karla inset-x-[0] items-start justify-center mx-auto top-[0] w-[30%]">
              <Text
                className="font-normal mt-[29px] rotate-[28deg] text-blue_gray_700"
                variant="body2"
              >
                H
              </Text>
              <Text
                className="font-normal mb-2.5 ml-0.5 mt-[18px] rotate-[22deg] text-blue_gray_700"
                variant="body2"
              >
                A
              </Text>
              <Text
                className="font-normal mb-[18px] ml-[3px] mt-2.5 rotate-[16deg] text-blue_gray_700"
                variant="body2"
              >
                N
              </Text>
              <Text
                className="font-normal mb-[25px] ml-[7px] mt-[3px] rotate-[10deg] text-blue_gray_700"
                variant="body2"
              >
                D
              </Text>
              <Text
                className="font-normal mb-7 ml-1.5 rotate-[4deg] text-blue_gray_700"
                variant="body2"
              >
                C
              </Text>
              <Text
                className="font-normal mb-[29px] ml-[7px] rotate-[-1deg] text-blue_gray_700"
                variant="body2"
              >
                R
              </Text>
              <Text
                className="font-normal mb-[27px] ml-1.5 rotate-[-7deg] text-blue_gray_700"
                variant="body2"
              >
                A
              </Text>
              <Text
                className="font-normal mb-[23px] ml-1.5 mt-[5px] rotate-[-12deg] text-blue_gray_700"
                variant="body2"
              >
                F
              </Text>
              <Text
                className="font-normal mb-[18px] ml-0.5 mt-2.5 rotate-[-17deg] text-blue_gray_700"
                variant="body2"
              >
                T
              </Text>
              <Text
                className="font-normal mb-[11px] ml-0.5 mt-[17px] rotate-[-23deg] text-blue_gray_700"
                variant="body2"
              >
                E
              </Text>
              <Text
                className="font-normal ml-0.5 mt-7 rotate-[-28deg] text-blue_gray_700"
                variant="body2"
              >
                D
              </Text>
            </div>
            <Text
              className="absolute bottom-[12%] font-black inset-x-[0] mx-auto text-blue_gray_900 w-max"
              as="h2"
              variant="h2"
            >
              ~Embrace your uniqueness{" "}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text className="font-normal text-blue_gray_700" variant="body2">
                <>
                  Intersection of couture
                  <br />
                  and ready-to-wear
                </>
              </Text>
              <Text className="font-normal text-blue_gray_700" variant="body2">
                <>
                  to create clothing
                  <br />
                  with timeless style
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[198px] items-end justify-start mt-[197px] w-full">
          <div className="flex md:flex-col flex-row gap-[7px] items-start justify-end md:px-5 w-[93%] md:w-full">
            <div className="flex flex-col gap-9 items-start justify-start md:mt-0 mt-[247px] w-[37%] md:w-full">
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
              <div className="flex flex-col font-karla items-start justify-start ml-12 md:ml-[0] w-[93%] md:w-full">
                <Text
                  className="font-normal leading-[150.00%] text-blue_gray_900 w-full"
                  variant="body5"
                >
                  Urna convallis sem lacus amet laoreet lacus augue ultrices. Eu
                  dolor ornare varius arcu ultrices imperdiet consectetur in.
                  Odio egestas et at mi dui.
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[212px] mt-10"
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
                <Img
                  src="images/img_productimage_661x442.png"
                  className="h-[661px] sm:h-auto mt-[648px] object-cover rounded-tl-[312px] rounded-tr-[312px] w-[74%] md:w-full"
                  alt="productimage_One"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[200px] justify-start mb-[30px] w-[64%] md:w-full">
              <div className="h-[896px] md:ml-[0] ml-[129px] relative w-[89%] md:w-full">
                <Img
                  src="images/img_productimage_896x793.png"
                  className="absolute h-[896px] inset-y-[0] my-auto object-cover right-[0] w-[81%]"
                  alt="productimage_Two"
                />
                <div className="absolute bg-teal_50 flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto p-[42px] md:px-10 sm:px-5 w-2/5">
                  <Img
                    src="images/img_productimage_408x312.png"
                    className="h-[408px] md:h-auto my-[13px] object-cover w-full"
                    alt="productimage_Three"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[83%] md:w-full">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[62px]">
                  <Text
                    className="font-black font-playfairdisplay text-blue_gray_900"
                    as="h2"
                    variant="h2"
                  >
                    Categories
                  </Text>
                  <div className="flex flex-col font-playfairdisplay gap-14 items-center justify-start mt-[72px] w-auto">
                    <div className="flex flex-col gap-[54px] items-center justify-start">
                      <Text
                        className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Dresses
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Skirts
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Blouses
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Knitwear
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Jackets
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[178px] mt-[78px]"
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
                    <div className="font-karla font-normal md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left uppercase">
                      View all
                    </div>
                  </Button>
                </div>
                <Img
                  src="images/img_productimage_1.png"
                  className="h-[661px] md:h-auto object-cover rounded-tl-[312px] rounded-tr-[312px]"
                  alt="productimage_Four"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <div className="h-[896px] md:px-5 relative w-full">
              <Img
                src="images/img_productimage_896x1920.png"
                className="h-[896px] m-auto object-cover w-full"
                alt="productimage_Five"
              />
              <div className="absolute flex flex-col gap-10 items-start justify-start left-[10%] top-[15%] w-1/4">
                <Text
                  className="font-black font-playfairdisplay text-blue_gray_900"
                  as="h2"
                  variant="h2"
                >
                  <span className="md:text-5xl text-blue_gray_900 text-[64px] text-left">
                    <>
                      Spring Summer
                      <br />
                    </>
                  </span>
                  <span className="md:text-5xl text-blue_gray_900 text-[64px] text-left">
                    2021
                  </span>
                  <span className="md:text-5xl text-blue_gray_900 text-[64px] text-left">
                    {" "}
                    Collection
                  </span>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[273px]"
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
                  <div className="font-karla font-normal md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left uppercase">
                    View collection
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-karla md:gap-5 items-start justify-start max-w-[1218px] mt-[200px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start md:mt-0 mt-[151px] w-[32%] md:w-full">
                <div className="h-[464px] relative w-full">
                  <Img
                    src="images/img_productsimage.png"
                    className="absolute h-[464px] inset-y-[0] left-[0] my-auto object-cover w-[92%]"
                    alt="productsimage"
                  />
                  <Button
                    className="absolute bottom-[33%] flex h-[72px] items-center justify-center right-[0] rounded-[50%] w-[72px]"
                    size="smIcn"
                    variant="icbFillBluegray900"
                  >
                    <Img
                      src="images/img_grid.svg"
                      className="h-[60px]"
                      alt="grid"
                    />
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                  <Text
                    className="font-bold text-blue_gray_900"
                    variant="body5"
                  >
                    Off-white Dreamy
                  </Text>
                  <Img
                    src="images/img_iconsbag.svg"
                    className="h-[27px] w-[27px]"
                    alt="iconsbag"
                  />
                </div>
              </div>
              <div className="h-[675px] ml-4 md:ml-[0] relative w-[34%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-[-39.97px] mx-auto w-4/5 z-[1]">
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <div className="md:h-12 h-[76px] mt-[19px] relative w-[27%]">
                      <div className="absolute bottom-[0] md:h-[29px] h-[66px] left-[0] w-[67px]">
                        <div className="absolute bottom-[0] md:h-[29px] h-[55px] left-[0] w-[77%]">
                          <div className="absolute bottom-[0] md:h-[29px] h-[43px] left-[0] w-[69%]">
                            <Text
                              className="absolute bottom-[0] font-normal left-[0] rotate-[47deg] text-blue_gray_900"
                              variant="body2"
                            >
                              S
                            </Text>
                            <Text
                              className="absolute font-normal right-[0] rotate-[41deg] text-blue_gray_900 top-[0]"
                              variant="body2"
                            >
                              E
                            </Text>
                          </div>
                          <Text
                            className="absolute font-normal right-[0] rotate-[36deg] text-blue_gray_900 top-[0]"
                            variant="body2"
                          >
                            A
                          </Text>
                        </div>
                        <Text
                          className="absolute font-normal right-[0] rotate-[31deg] text-blue_gray_900 top-[0]"
                          variant="body2"
                        >
                          S
                        </Text>
                      </div>
                      <Text
                        className="absolute font-normal right-[0] rotate-[25deg] text-blue_gray_900 top-[0]"
                        variant="body2"
                      >
                        O
                      </Text>
                    </div>
                    <Text
                      className="font-normal mt-[11px] rotate-[19deg] text-blue_gray_900"
                      variant="body2"
                    >
                      N
                    </Text>
                    <Text
                      className="font-normal mt-[5px] rotate-[13deg] text-blue_gray_900"
                      variant="body2"
                    >
                      A
                    </Text>
                    <Text
                      className="font-normal rotate-[8deg] text-blue_gray_900"
                      variant="body2"
                    >
                      L
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_900"
                      variant="body2"
                    >
                      H
                    </Text>
                    <Text
                      className="font-normal rotate-[-5deg] text-blue_gray_900"
                      variant="body2"
                    >
                      I
                    </Text>
                    <Text
                      className="font-normal mt-[3px] rotate-[-10deg] text-blue_gray_900"
                      variant="body2"
                    >
                      G
                    </Text>
                    <Text
                      className="font-normal mt-[7px] rotate-[-16deg] text-blue_gray_900"
                      variant="body2"
                    >
                      H
                    </Text>
                    <div className="flex flex-col justify-start mt-3.5 w-[29%]">
                      <Text
                        className="font-normal rotate-[-21deg] text-blue_gray_900"
                        variant="body2"
                      >
                        L
                      </Text>
                      <div className="h-4 md:h-[9px] md:ml-[0] ml-[15px] relative w-[32%]">
                        <Text
                          className="absolute font-normal left-[0] rotate-[-25deg] text-blue_gray_900 top-[0]"
                          variant="body2"
                        >
                          I
                        </Text>
                        <Text
                          className="absolute bottom-[0] font-normal right-[0] rotate-[-30deg] text-blue_gray_900"
                          variant="body2"
                        >
                          G
                        </Text>
                      </div>
                      <div className="md:h-[13px] h-[25px] md:ml-[0] ml-[43px] mr-3.5 relative w-[39%]">
                        <Text
                          className="absolute font-normal left-[0] rotate-[-36deg] text-blue_gray_900 top-[0]"
                          variant="body2"
                        >
                          H
                        </Text>
                        <Text
                          className="absolute bottom-[0] font-normal right-[0] rotate-[-42deg] text-blue_gray_900"
                          variant="body2"
                        >
                          T
                        </Text>
                      </div>
                      <Text
                        className="font-normal md:ml-[0] ml-[73px] rotate-[-47deg] text-blue_gray_900"
                        variant="body2"
                      >
                        S
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_productsimage_620x414.png"
                  className="h-[620px] mt-auto mx-auto object-cover rounded-tl-[312px] rounded-tr-[312px] w-full"
                  alt="productsimage_One"
                />
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-center justify-start ml-12 md:ml-[0] md:mt-0 mt-[150px] w-[30%] md:w-full">
                <Img
                  src="images/img_productsimage_464x354.png"
                  className="h-[464px] md:h-auto object-cover w-full"
                  alt="productsimage_Two"
                />
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-bold text-blue_gray_900"
                    variant="body5"
                  >
                    Off-white classics
                  </Text>
                  <Img
                    src="images/img_iconsbag.svg"
                    className="h-[27px] w-[27px]"
                    alt="iconsbag_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row font-karla sm:gap-10 items-center justify-between md:ml-[0] ml-[351px] mt-1 md:px-5 w-1/2 md:w-full">
              <Text className="font-normal text-blue_gray_700" variant="body2">
                $ 4,500
              </Text>
              <Text className="font-normal text-blue_gray_700" variant="body2">
                $ 4,500
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1530px] mt-[167px] mx-auto md:px-5 w-full">
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
            <div className="flex md:flex-col flex-row font-karla md:gap-10 gap-16 items-start justify-start max-w-[1530px] mt-[85px] mx-auto md:px-5 w-full">
              <div className="relative w-[359px]">
                <div className="flex flex-col items-end justify-start my-auto outline outline-[1px] outline-blue_gray_700 w-auto">
                  <Img
                    src="images/img_productimage_534x334.png"
                    className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                    alt="productimage_Six"
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
                <div className="absolute bg-blue_gray_700 flex flex-col h-20 items-center justify-start right-[0] rounded-[50%] top-[0] w-20">
                  <div className="bg-blue_gray_700 flex flex-col h-20 items-center justify-start p-[13px] rounded-[50%] w-20">
                    <Text
                      className="font-light my-[17px] text-center text-teal_50"
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
            <Text
              className="font-black font-playfairdisplay md:ml-[0] ml-[735px] mt-[203px] text-blue_gray_900"
              as="h2"
              variant="h2"
            >
              NEWSLETTER
            </Text>
            <Img
              src="images/img_productimage_466x356.png"
              className="h-[466px] sm:h-auto md:ml-[0] ml-[781px] mt-[35px] object-cover rounded-tl-[200px] rounded-tr-[200px] w-[19%] md:w-full"
              alt="productimage_Seven"
            />
            <Text
              className="font-karla font-normal leading-[150.00%] md:ml-[0] ml-[804px] mt-10 text-blue_gray_900 text-center w-[17%] sm:w-full"
              variant="body2"
            >
              SUBSCRIBE TO BE NOTIFIED OF ALL LATEST UPDATES
            </Text>
            <div className="flex sm:flex-col flex-row font-karla gap-10 items-center justify-center md:ml-[0] ml-[735px] mt-10 md:px-5 w-[24%] md:w-full">
              <Input
                wrapClassName="w-[46%] sm:w-full"
                className="font-normal md:h-auto p-0 placeholder:text-teal_300 sm:h-auto text-left text-lg text-teal_300 uppercase w-full"
                type="email"
                name="emailfillup"
                placeholder="Email"
                size="lg"
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
            <footer className="bg-teal_200 flex font-karla items-center justify-center mt-[200px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-center mb-[41px] mt-[93px] mx-auto w-4/5">
                <ul className="flex flex-col items-center justify-center w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="font-extrabold text-blue_gray_900 tracking-[10.24px] uppercase"
                    >
                      <Text as="h4" variant="h4">
                        Bruce’s Attire
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row sm:gap-10 items-start justify-between mt-[57px] md:w-full">
                        <div className="flex flex-col gap-8 items-start justify-start w-auto">
                          <Text
                            className="font-bold text-blue_gray_900 w-auto"
                            variant="body2"
                          >
                            Navigate
                          </Text>
                          <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Shop</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Collection</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">About</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Account</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">My cart</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-8 items-start justify-start w-auto">
                          <Text
                            className="font-bold text-blue_gray_900 w-auto"
                            variant="body2"
                          >
                            Assistance
                          </Text>
                          <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Shipping & returns</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Privacy policy</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">FAQ</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-8 items-start justify-start w-auto">
                          <Text
                            className="font-bold text-blue_gray_900 w-auto"
                            variant="body2"
                          >
                            Socials
                          </Text>
                          <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Instagram</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Facebook</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="font-normal text-blue_gray_900"
                              >
                                <Text variant="body5">Youtube</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[194px]">
                        <Text
                          className="font-normal text-blue_gray_700"
                          variant="body6"
                        >
                          All rights reserved - 2023 @ Bruce’s Attire
                        </Text>
                        <a
                          href="javascript:"
                          className="font-normal md:ml-[0] ml-[389px] text-blue_gray_700"
                        >
                          <Text variant="body6">Terms & Conditions</Text>
                        </a>
                        <Text
                          className="font-normal md:ml-[0] ml-[557px] text-blue_gray_700"
                          variant="body6"
                        >
                          Website by Sakila!
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullwebsiteOnePage;

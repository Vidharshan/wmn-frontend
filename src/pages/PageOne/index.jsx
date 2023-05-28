import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const PageOne = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-teal_50 flex flex-col font-karla items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <header className="bg-teal_50 flex md:gap-10 items-center justify-between p-10 md:px-5 shadow-bs w-full">
            <ul className="flex flex-row gap-10 sm:hidden items-center justify-center w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-blue_gray_900">
                  <Text variant="body5">Shop</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-blue_gray_900">
                  <Text variant="body5">Collection</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-blue_gray_900">
                  <Text variant="body5">About</Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="font-extrabold text-blue_gray_900 tracking-[7.68px] uppercase w-auto"
                variant="body2"
              >
                REDEFY
              </Text>
            </div>
            <div className="flex flex-row gap-10 items-center justify-center w-auto">
              <Text className="text-blue_gray_900 w-auto" variant="body5">
                Search
              </Text>
              <Text className="text-blue_gray_900 w-auto" variant="body5">
                Account
              </Text>
              <Img
                src="images/img_iconcart.svg"
                className="h-6 w-6"
                alt="iconcart"
              />
            </div>
          </header>
          <div className="md:h-[706px] h-[717px] mt-10 md:px-5 relative w-[52%] md:w-full">
            <div className="absolute bottom-[0] h-[666px] right-1/4 rounded-tl-[312px] rounded-tr-[312px] shadow-bs w-[46%] sm:w-full">
              <Img
                src="images/img_productimage.png"
                className="h-[666px] m-auto object-cover rounded-tl-[312px] rounded-tr-[312px] w-full"
                alt="productimage"
              />
              <div className="absolute bg-gradient  h-[666px] inset-[0] justify-center m-auto rounded-tl-[312px] rounded-tr-[312px] w-full"></div>
            </div>
            <Text
              className="absolute bottom-[1%] font-karla font-normal left-[0] text-blue_gray_700"
              variant="body2"
            >
              <>
                Intersection of couture
                <br />
                and ready-to-wear
              </>
            </Text>
            <Text
              className="absolute bottom-[1%] font-karla font-normal right-[0] text-blue_gray_700"
              variant="body2"
            >
              <>
                to create clothing
                <br />
                with timeless style
              </>
            </Text>
            <div className="absolute flex flex-row font-karla items-start justify-center right-[35%] top-[0] w-1/4">
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
              className="absolute bottom-[14%] font-playfairdisplay right-[6%] text-blue_gray_900"
              as="h1"
              variant="h1"
            >
              ~Embrace your uniqueness{" "}
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1770px] mt-[186px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-9 items-start justify-start w-[37%] md:w-full">
              <Text
                className="font-karla font-normal ml-12 md:ml-[0] text-blue_gray_900"
                variant="body2"
              >
                Spring Summer 2023
              </Text>
              <Text
                className="font-playfairdisplay text-blue_gray_900"
                as="h1"
                variant="h1"
              >
                ~New collection
              </Text>
              <div className="flex flex-col font-karla gap-10 items-start justify-start ml-12 md:ml-[0] w-[93%] md:w-full">
                <Text
                  className="leading-[150.00%] text-blue_gray_900 w-full"
                  variant="body4"
                >
                  Urna convallis sem lacus amet laoreet lacus augue ultrices. Eu
                  dolor ornare varius arcu ultrices imperdiet consectetur in.
                  Odio egestas et at mi dui.
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[212px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-2 my-0.5"
                      alt="arrow_right"
                    />
                  }
                  size="sm"
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
                src="images/img_12.png"
                className="absolute h-[896px] inset-y-[0] my-auto object-cover right-[0] w-[897px]"
                alt="Twelve"
              />
              <div className="absolute bg-teal_50 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto p-[38px] sm:px-5 w-[41%]">
                <Img
                  src="images/img_cfd91cd4fc824.png"
                  className="h-[436px] md:h-auto mt-1 object-cover w-[98%]"
                  alt="cfd91cd4fc824"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1575px] mt-[282px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_tylernix5rsid.png"
              className="md:flex-1 h-[666px] sm:h-auto md:mt-0 mt-[131px] object-cover rounded-tl-[300px] rounded-tr-[300px] w-[28%] md:w-full"
              alt="tylernix5rsid"
            />
            <div className="flex md:flex-1 flex-col items-center justify-start mb-[11px] md:ml-[0] ml-[163px] md:mt-0 mt-[52px] w-[21%] md:w-full">
              <Text
                className="font-playfairdisplay text-blue_gray_900"
                as="h1"
                variant="h1"
              >
                Categories
              </Text>
              <div className="flex flex-col font-playfairdisplay gap-14 items-center justify-start mt-[72px] w-auto">
                <Text
                  className="font-normal text-blue_gray_900 tracking-[2.56px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Dresses
                </Text>
                <div className="flex flex-col gap-14 items-center justify-start">
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
                    Shirts
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
                size="sm"
                variant="OutlineBluegray700"
              >
                <div className="font-karla font-normal md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left uppercase">
                  View all
                </div>
              </Button>
            </div>
            <Img
              src="images/img_2.png"
              className="md:flex-1 h-[664px] sm:h-auto md:ml-[0] ml-[210px] object-cover rounded-tl-[300px] rounded-tr-[300px] w-[29%] md:w-full"
              alt="Two"
            />
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1530px] mt-[179px] mx-auto md:px-5 w-full">
            <div className="font-playfairdisplay h-[86px] relative w-[26%] sm:w-full">
              <Text className="m-auto text-blue_gray_900" as="h1" variant="h1">
                ~Best Sellers
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-blue_gray_900 w-max"
                as="h1"
                variant="h1"
              >
                ~Best Sellers
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[178px]"
              rightIcon={
                <Img
                  src="images/img_arrowright.svg"
                  className="ml-2 my-0.5"
                  alt="arrow_right"
                />
              }
              size="sm"
              variant="OutlineBluegray700"
            >
              <div className="font-karla font-normal leading-[normal] md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left uppercase">
                View ALL
              </div>
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1530px] mt-[85px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col items-end justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
              <Img
                src="images/img_productimage_534x334.png"
                className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                alt="productimage"
              />
              <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                <Text
                  className="text-blue_gray_900 text-center uppercase w-auto"
                  variant="body4"
                >
                  checked midi dress{" "}
                </Text>
              </div>
            </div>
            <div
              className="common-pointer flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray_700 w-auto"
              onClick={() => navigate("/pageseven")}
            >
              <Img
                src="images/img_productimage_1.png"
                className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                alt="productimage"
              />
              <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                <Text
                  className="text-blue_gray_900 text-center uppercase w-auto"
                  variant="body4"
                >
                  red draped midi dress
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
              <Img
                src="images/img_productimage_2.png"
                className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                alt="productimage"
              />
              <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                <Text
                  className="text-blue_gray_900 text-center uppercase w-auto"
                  variant="body4"
                >
                  Black smock midi dress
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray_700 w-auto">
              <Img
                src="images/img_productimage_3.png"
                className="h-[534px] sm:h-auto object-cover w-[334px] md:w-full"
                alt="productimage"
              />
              <div className="flex flex-col items-center justify-center p-4 w-[334px]">
                <Text
                  className="text-blue_gray_900 text-center uppercase w-auto"
                  variant="body4"
                >
                  White lace dress
                </Text>
              </div>
            </div>
          </List>
          <footer className="bg-teal_200 flex items-center justify-center mt-[119px] md:px-5 w-full">
            <ul className="flex flex-col items-center justify-center mb-12 ml-[286px] mr-[313px] mt-[93px] w-[69%] md:w-full common-column-list">
              <li>
                <a
                  href="javascript:"
                  className="font-extrabold text-blue_gray_900 tracking-[10.24px] uppercase"
                >
                  <Text as="h4" variant="h4">
                    REDEFY
                  </Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex sm:flex-col flex-row md:gap-10 gap-[248px] h-[290px] md:h-auto items-start justify-center mt-[109px] md:w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-auto">
                      <Text
                        className="font-bold text-blue_gray_900 w-auto"
                        variant="body2"
                      >
                        Navigate
                      </Text>
                      <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Shop</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Collection</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">About</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Account</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">My cart</Text>
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
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Shipping & returns</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Privacy policy</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">FAQ</Text>
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
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Instagram</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Facebook</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:" className="text-blue_gray_900">
                            <Text variant="body4">Youtube</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:" className="mt-[120px] text-blue_gray_700">
                  <Text variant="body5">Terms & Conditions</Text>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PageOne;

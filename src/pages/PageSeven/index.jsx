import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import ReviewForm from './ReviewForm';
import ReviewList from "../../components/ReviewList/index"
import Rating from "./Ratings"

const PageSeven = () => {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <>
      <div className="bg-teal_50 flex flex-col font-inter items-center justify-start mx-auto p-[135px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[132px] justify-start max-w-[1604px] mb-[982px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[174px] items-center justify-end md:ml-[0] ml-[119px] w-[93%] md:w-full">
            <Img
              src="images/img_productimage_1.png"
              className="h-[649px] sm:h-auto object-cover w-[33%] md:w-full"
              alt="productimage"
            />
            <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Img
                  src="images/img_favorite.svg"
                  className="h-[57px] md:mt-0 mt-[119px]"
                  alt="favorite"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                    <Text
                      className="text-blue_gray_900_01"
                      as="h2"
                      variant="h2"
                    >
                      Red Midi Dress
                    </Text>
                    <Text
                      className="text-blue_gray_900_01"
                      as="h6"
                      variant="h6"
                    >
                      Rs 4300
                    </Text>
                  </div>
                  <Text
                    className="mt-1 text-blue_gray_400"
                    as="h5"
                    variant="h5"
                  >
                    Classy Draped Dress
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[13px] text-blue_gray_900_01"
                    variant="body1"
                  >
                    Size
                  </Text>
                  <div className="flex sm:flex-col flex-row font-karla gap-3.5 items-center justify-start mt-3 w-[72%] md:w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[78px] text-2xl md:text-[22px] text-blue_gray_900 text-center sm:text-xl uppercase"
                      size="sm"
                      variant="OutlineBluegray700"
                    >
                      XS
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[63px] text-2xl md:text-[22px] text-blue_gray_900 text-center sm:text-xl uppercase"
                      size="sm"
                      variant="OutlineBluegray700"
                    >
                      S
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[69px] text-2xl md:text-[22px] text-blue_gray_900 text-center sm:text-xl uppercase"
                      size="sm"
                      variant="OutlineBluegray700"
                    >
                      M
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[60px] text-2xl md:text-[22px] text-blue_gray_900 text-center sm:text-xl uppercase"
                      size="sm"
                      variant="OutlineBluegray700"
                    >
                      L
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[75px] text-2xl md:text-[22px] text-blue_gray_900 text-center sm:text-xl uppercase"
                      size="sm"
                      variant="OutlineBluegray700"
                    >
                      XL
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[91px] text-2xl md:text-[22px] text-blue_gray_900 text-center sm:text-xl uppercase"
                      size="sm"
                      variant="OutlineBluegray700"
                    >
                      XXL
                    </Button>
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-[9px] text-blue_gray_900_01"
                    variant="body1"
                  >
                    Description
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-2.5 text-blue_gray_900_b2"
                    variant="body3"
                  >
                    <span className="md:text-[19.89px] sm:text-[17.89px] text-blue_gray_900_b2 text-[21.89px] font-inter text-left font-normal">
                      <>
                        Red midi dress is a fancy chill suit that is made with
                        fabric from in-depth of Africa. <br />{" "}
                      </>
                    </span>
                    <span className="md:text-[19.89px] sm:text-[17.89px] text-blue_gray_900_7f text-[21.89px] font-inter text-left font-normal">
                      read more
                    </span>
                  </Text>
                  <Input
                    wrapClassName="mt-5 w-[31%]"
                    className="font-normal leading-[normal] md:text-[24.41px] p-0 placeholder:text-white_A700 sm:text-[22.41px] text-[26.41px] text-left text-white_A700 w-full"
                    name="groupTwo"
                    placeholder="Buy Now"
                    size="sm"
                    variant="FillBluegray90001"
                  ></Input>
                  <Text
                    className="common-pointer md:ml-[0] ml-[3px] mt-[26px] text-blue_gray_900_01"
                    variant="body1"
                    onClick={() => navigate("/pagethree")}
                  >
                    
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <ReviewForm addReview={addReview} />
          <Text className="text-black_900" as="h3" variant="h3">
            Ratings and Reviews
          </Text>
          <Rating reviews={reviews} />
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </>
  );
};

export default PageSeven;

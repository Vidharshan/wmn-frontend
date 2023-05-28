import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const PageOne = () => {
  return (
    <>
      <div className="bg-teal_50 flex flex-col font-karla gap-10 items-center justify-start mx-auto pb-[110px] w-full">
        <Header className="bg-teal_50 flex items-center justify-between p-10 md:px-5 shadow-bs w-full" />
        <div className="md:h-[666px] h-[717px] md:px-5 relative w-[52%] md:w-full">
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
            className="absolute bottom-[14%] font-black font-playfairdisplay right-[6%] text-blue_gray_900"
            as="h2"
            variant="h2"
          >
            ~Embrace your uniqueness{" "}
          </Text>
        </div>
      </div>
    </>
  );
};

export default PageOne;

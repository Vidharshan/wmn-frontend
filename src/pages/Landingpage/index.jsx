import React from "react";

import { Img, Text } from "components";
import Header1 from "components/Header1";

const LandingpagePage = () => {
  return (
    <>
      <div className="bg-teal_50 font-karla h-[896px] mx-auto pb-9 relative w-full">
        <div className="flex flex-col h-full items-center justify-start mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[696px] items-center justify-start w-full">
            <Header1 className="flex flex-row items-center justify-between p-10 md:px-5 w-full" />
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:px-5 w-[53%] md:w-full">
              <Text className="font-normal text-green_300" variant="body2">
                <>
                  intersection of couture
                  <br />
                  and ready-to-wear
                </>
              </Text>
              <Text className="font-normal text-green_300" variant="body2">
                <>
                  to create clothing
                  <br />
                  with timeless style
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[4%] font-merriweather md:h-[670px] h-[709px] inset-x-[0] mx-auto md:px-5 w-[51%] md:w-full">
          <Img
            src="images/img_productimage.png"
            className="absolute bottom-[0] h-[670px] inset-x-[0] mx-auto object-cover rounded-tl-[312px] rounded-tr-[312px] w-[46%]"
            alt="imageThree"
          />
          <div className="absolute flex flex-row font-karla inset-x-[0] items-start justify-center mx-auto top-[0] w-[26%]">
            <Text
              className="font-normal mt-7 rotate-[28deg] text-green_300"
              variant="body2"
            >
              H
            </Text>
            <Text
              className="font-normal mb-2.5 ml-0.5 mt-[18px] rotate-[22deg] text-green_300"
              variant="body2"
            >
              A
            </Text>
            <Text
              className="font-normal mb-[18px] ml-[3px] mt-2.5 rotate-[16deg] text-green_300"
              variant="body2"
            >
              N
            </Text>
            <Text
              className="font-normal mb-[25px] ml-[7px] mt-[3px] rotate-[10deg] text-green_300"
              variant="body2"
            >
              D
            </Text>
            <Text
              className="font-normal mb-7 ml-1.5 rotate-[4deg] text-green_300"
              variant="body2"
            >
              C
            </Text>
            <Text
              className="font-normal mb-7 ml-[7px] rotate-[-1deg] text-green_300"
              variant="body2"
            >
              R
            </Text>
            <Text
              className="font-normal mb-[27px] ml-1.5 rotate-[-7deg] text-green_300"
              variant="body2"
            >
              A
            </Text>
            <Text
              className="font-normal mb-[23px] ml-1.5 mt-[5px] rotate-[-12deg] text-green_300"
              variant="body2"
            >
              F
            </Text>
            <Text
              className="font-normal mb-[18px] ml-0.5 mt-2.5 rotate-[-17deg] text-green_300"
              variant="body2"
            >
              T
            </Text>
            <Text
              className="font-normal mb-[11px] ml-0.5 mt-[17px] rotate-[-23deg] text-green_300"
              variant="body2"
            >
              E
            </Text>
            <Text
              className="font-normal ml-0.5 mt-7 rotate-[-28deg] text-green_300"
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
    </>
  );
};

export default LandingpagePage;

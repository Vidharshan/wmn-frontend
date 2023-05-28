import React from "react";

import { Img } from "components";

const CoverTwoPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col gap-10 items-center justify-end mx-auto md:px-10 sm:px-5 px-[190px] w-full">
        <Img
          src="images/img_image_618x1219.png"
          className="h-[618px] md:h-auto max-w-[1219px] mx-auto object-cover w-full"
          alt="image"
        />
        <Img
          src="images/img_image_372x798.png"
          className="h-[372px] md:h-auto object-cover w-[66%]"
          alt="image_One"
        />
      </div>
    </>
  );
};

export default CoverTwoPage;

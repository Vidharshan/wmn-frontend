import React from "react";

import { Img } from "components";

const CoverPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col items-center justify-center mx-auto p-2.5 w-full">
        <Img
          src="images/img_image.png"
          className="h-[800px] md:h-auto max-w-[1580px] mx-auto my-[70px] object-cover rounded-lg w-full"
          alt="image"
        />
      </div>
    </>
  );
};

export default CoverPage;

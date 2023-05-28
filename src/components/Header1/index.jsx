import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <ul className="flex flex-row gap-10 sm:hidden items-start justify-start w-auto common-row-list">
          <li>
            <Text
              className="font-karla font-normal text-blue_gray_900"
              variant="body2"
            >
              Shop
            </Text>
          </li>
          <li>
            <Text
              className="font-karla font-normal text-blue_gray_900"
              variant="body2"
            >
              Collection
            </Text>
          </li>
          <li>
            <Text
              className="font-karla font-normal text-blue_gray_900"
              variant="body2"
            >
              About
            </Text>
          </li>
        </ul>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="font-extrabold font-karla text-blue_gray_900 tracking-[7.68px] uppercase w-auto"
            variant="body2"
          >
            Bruce’s Attire
          </Text>
        </div>
        <div className="flex flex-row gap-10 items-start justify-start w-auto">
          <Text
            className="font-karla font-normal text-blue_gray_900 w-auto"
            variant="body2"
          >
            Ship to: UK
          </Text>
          <Text
            className="font-karla font-normal text-blue_gray_900 w-auto"
            variant="body2"
          >
            Account
          </Text>
          <Img
            src="images/img_iconcart.svg"
            className="h-6 w-6"
            alt="ictwotoneshoppi"
          />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;

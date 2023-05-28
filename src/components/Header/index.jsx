import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <ul className="flex flex-row gap-10 sm:hidden items-center justify-center w-auto common-row-list">
          <li>
            <Text
              className="font-karla font-normal text-blue_gray_900"
              variant="body6"
            >
              Shop
            </Text>
          </li>
          <li>
            <Text
              className="font-karla font-normal text-blue_gray_900"
              variant="body6"
            >
              Collection
            </Text>
          </li>
          <li>
            <Text
              className="font-karla font-normal text-blue_gray_900"
              variant="body6"
            >
              About
            </Text>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center w-auto">
          <Text
            className="font-extrabold font-karla text-blue_gray_900 tracking-[7.68px] uppercase w-auto"
            variant="body2"
          >
            Bruce’s Attire
          </Text>
        </div>
        <div className="flex flex-row gap-10 items-center justify-center w-auto">
          <Text
            className="font-karla font-normal text-blue_gray_900 w-auto"
            variant="body6"
          >
            Ship to UK
          </Text>
          <Text
            className="font-karla font-normal text-blue_gray_900 w-auto"
            variant="body6"
          >
            Account
          </Text>
          <Img
            src="images/img_iconcart.svg"
            className="h-6 w-6"
            alt="iconcart"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

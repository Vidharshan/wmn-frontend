import React from "react";
import PropTypes from "prop-types";

const shapes = { icbCircleBorder36: "rounded-[36px]" };
const variants = {
  OutlineBluegray700:
    "border border-blue_gray_700 border-solid text-blue_gray_900",
  FillGray20001: "bg-gray_200_01 text-gray_500_01",
  FillRedA700: "bg-red_A700 text-white_A700",
  icbFillBluegray900: "bg-blue_gray_900",
};
const sizes = { sm: "p-[9px]", md: "p-[13px]", smIcn: "p-1.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbCircleBorder36"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray700",
    "FillGray20001",
    "FillRedA700",
    "icbFillBluegray900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };

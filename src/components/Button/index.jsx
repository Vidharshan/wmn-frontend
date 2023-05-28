import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray700:
    "border border-blue_gray_700 border-solid text-blue_gray_900",
  FillBluegray90001: "bg-blue_gray_900_01 text-white_A700",
};
const sizes = { sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      }`}
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

  variant: PropTypes.oneOf(["OutlineBluegray700", "FillBluegray90001"]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", variant: "", size: "" };
export { Button };

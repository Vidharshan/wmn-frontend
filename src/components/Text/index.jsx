import React from "react";

const variantClasses = {
  h1: "font-semibold text-[8px]",
  h2: "sm:text-5xl md:text-5xl text-[64px]",
  h3: "font-normal sm:text-[38.8px] md:text-[44.8px] text-[48.8px]",
  h4: "md:text-3xl sm:text-[28px] text-[32px]",
  h5: "font-normal sm:text-[27.13px] md:text-[29.13px] text-[31.13px]",
  h6: "font-normal sm:text-[26.17px] md:text-[28.17px] text-[30.17px]",
  body1: "font-normal sm:text-[20.86px] md:text-[22.86px] text-[24.86px]",
  body2: "text-2xl md:text-[22px] sm:text-xl",
  body3: "font-normal sm:text-[17.89px] md:text-[19.89px] text-[21.89px]",
  body4: "text-xl",
  body5: "text-lg",
  body6: "text-base",
  body7: "text-sm",
  body8: "text-xs",
  body9: "text-[10px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

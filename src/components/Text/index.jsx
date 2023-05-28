import React from "react";

const variantClasses = {
  h1: "font-black sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-normal sm:text-[38.8px] md:text-[44.8px] text-[48.8px]",
  h3: "font-normal text-4xl sm:text-[32px] md:text-[34px]",
  h4: "md:text-3xl sm:text-[28px] text-[32px]",
  h5: "font-normal sm:text-[27.13px] md:text-[29.13px] text-[31.13px]",
  h6: "font-normal sm:text-[26.17px] md:text-[28.17px] text-[30.17px]",
  body1: "font-normal sm:text-[20.86px] md:text-[22.86px] text-[24.86px]",
  body2: "text-2xl md:text-[22px] sm:text-xl",
  body3: "font-normal sm:text-[17.89px] md:text-[19.89px] text-[21.89px]",
  body4: "font-normal text-lg",
  body5: "font-normal text-base",
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

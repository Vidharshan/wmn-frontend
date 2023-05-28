import React from "react";

import { Input } from "components";

export default {
  title: "wmn_frontend/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  variant: "OutlineTeal300",
  size: "sm",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};

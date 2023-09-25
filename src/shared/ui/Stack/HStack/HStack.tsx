import React from "react";
import { Flex, type FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack: React.FC<HStackProps> = (props) => {
  return (
    <Flex direction="row" {...props}/>
  );
};

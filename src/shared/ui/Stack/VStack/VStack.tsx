import React from "react";
import { Flex, type FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack: React.FC<VStackProps> = (props) => {
  return (
    <Flex direction="column" {...props}/>
  );
};

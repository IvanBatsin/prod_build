import React from "react";
import { Drawer, type DrawerProps } from "./Drawer";
import { useAnimationLibs } from "@/[object Object]";

export const DrawerWrapper: React.FC<DrawerProps> = (props) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return (
    <Drawer {...props}/>
  );
};

import React from "react";
import { Drawer, type DrawerProps } from "./Drawer";
import { AnimationProvider, useAnimationLibs } from "@/shared/lib/components/AnimationProvider/AnimationProvider";

const DrawerAsync: React.FC<DrawerProps> = (props) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return (
    <Drawer {...props}/>
  );
};

export const DrawerWrapper: React.FC<DrawerProps> = (props) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props}/>
    </AnimationProvider>
  );
};

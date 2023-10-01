import React from "react";
import styles from "./Icon.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { classNames } from "@/shared/lib/classNames/classNames";

type IconProps = CommonComponentProps & React.SVGProps<SVGSVGElement> & {
  SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  inverted?: boolean
}

export const Icon: React.FC<IconProps> = (props) => {
  const { SVG, additionalClass, inverted, ...otherProps } = props;
  return (
    <SVG className={classNames(inverted ? styles.svg__inverted : styles.svg, {}, [additionalClass])} {...otherProps}/>
  );
};

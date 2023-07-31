import React from "react";
import styles from "./Icon.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";

type IconProps = CommonComponentProps & {
  SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon: React.FC<IconProps> = (props) => {
  const { SVG, additionalClass } = props;
  return (
    <SVG className={classNames(styles.svg, {}, [additionalClass])}/>
  );
};

import React from "react";
import styles from "./Text.module.scss";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";

export enum TextThemes {
  PRIMARY = "primary",
  ERROR = "error",
  INVERTED = "inverted"
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center"
}

export enum TextSize {
  L = "size_L",
  M = "size_M"
}

type TextProps = CommonComponentProps & {
  title?: string
  text?: string
  theme?: TextThemes
  align?: TextAlign
  size?: TextSize
}

export const Text: React.FC<TextProps> = React.memo(function Text (props: TextProps) {
  const { additionalClass, text, title, size = TextSize.M, theme = TextThemes.PRIMARY, align = TextAlign.LEFT } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[size]]: true
  };

  return (
    <div className={classNames("", mods, [additionalClass])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});

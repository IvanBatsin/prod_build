import React from "react";
import styles from "./Text.module.scss";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";

export enum TextThemes {
  PRIMARY = "primary",
  ERROR = "error"
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center"
}

type TextProps = CommonComponentProps & {
  title?: string
  text?: string
  theme?: TextThemes
  align?: TextAlign
}

export const Text: React.FC<TextProps> = React.memo(function Text (props: TextProps) {
  const { additionalClass, text, title, theme = TextThemes.PRIMARY, align = TextAlign.LEFT } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true
  };

  return (
    <div className={classNames(styles.container, mods, [additionalClass])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});

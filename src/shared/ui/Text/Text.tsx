import React from "react";
import styles from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";

export enum TextThemes {
  PRIMARY = "primary",
  ERROR = "error"
}

type TextProps = CommonComponentProps & {
  title?: string
  text?: string
  theme?: TextThemes
}

export const Text: React.FC<TextProps> = React.memo(function Text (props: TextProps) {
  const { additionalClass, text, title, theme = TextThemes.PRIMARY } = props;
  return (
    <div className={classNames(styles.container, { [styles[theme]]: true }, [additionalClass])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});

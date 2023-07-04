import React from "react";
import styles from "./Avatar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";

type AvatarProps = CommonComponentProps & {
  src: string
  alt?: string
  size?: number
}

export const Avatar: React.FC<AvatarProps> = React.memo(function Avatar (props: AvatarProps) {
  const { src, alt, size, additionalClass } = props;

  const inlineStyles: React.CSSProperties = React.useMemo(() => {
    return {
      width: size,
      height: size
    };
  }, [size]);

  return (
    <img src={src} className={classNames(styles.avatar, {}, [additionalClass])} style={inlineStyles} alt={alt}/>
  );
});

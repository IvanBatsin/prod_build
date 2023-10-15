import React from "react";
import styles from "./StarRating.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import StarIcon from "../../assets/star.svg";
import { Icon } from "../IconComponent/Icon";
import { type Mods, classNames } from "@/shared/lib/classNames/classNames";

const stars = [1, 2, 3, 4, 5];

type StarRatingProps = CommonComponentProps & {
  size?: number
  selectedStar?: number
  handleSelect?: (start: number) => void
}

export const StarRating: React.FC<StarRatingProps> = (props) => {
  const { additionalClass, selectedStar = 0, size = 30, handleSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = React.useState<number>(selectedStar);
  const [isSelected, setIsSelected] = React.useState<boolean>(Boolean(selectedStar));

  const handleStarsHover = (starCount: number) => () => {
    !isSelected && setCurrentStarsCount(starCount);
  };

  const handleStarsLeave = (): void => {
    !isSelected && setCurrentStarsCount(0);
  };

  const handleStarClick = (star: number) => () => {
    if (!selectedStar) {
      handleSelect?.(star);
      setCurrentStarsCount(star);
      setIsSelected(true);
    }
  };

  const mods: Mods = {
    [styles.selected]: isSelected
  };

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      {stars.map(item => {
        const isHovered = Boolean(currentStarsCount) && item <= currentStarsCount;
        const isNormal = Boolean(currentStarsCount) && item > currentStarsCount;
        mods[styles.hovered] = isHovered;
        mods[styles.normal] = isNormal;
        return <Icon
                className={classNames(styles.icon, mods)}
                SVG={StarIcon}
                key={item}
                width={size}
                height={size}
                onMouseLeave={handleStarsLeave}
                onMouseEnter={handleStarsHover(item)}
                onClick={handleStarClick(item)}
              />;
      })}
    </div>
  );
};

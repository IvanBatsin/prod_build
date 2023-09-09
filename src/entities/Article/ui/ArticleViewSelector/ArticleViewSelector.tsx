import React from "react";
import styles from "./ArticleViewSelector.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "entities/Article/model/types/article";
import ListIcon from "shared/assets/list-24-24.svg";
import TiledIcon from "shared/assets/tiled-24-24.svg";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/IconComponent/Icon";

interface ViewType {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  view: ArticleView
}

const viewTypes: ViewType[] = [
  {
    icon: ListIcon,
    view: ArticleView.BIG
  },
  {
    icon: TiledIcon,
    view: ArticleView.SMALL
  }
];

type ArticleViewSelectorProps = CommonComponentProps & {
  view?: ArticleView
  handleViewClick: (view: ArticleView) => void
}

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> = (props) => {
  const { additionalClass, view, handleViewClick } = props;

  const handleButtonClick = (newView: ArticleView) => {
    return () => { handleViewClick(newView) };
  };

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      {viewTypes.map(viewType => {
        return (
          <Button
            key={viewType.view}
            theme={ButtonTypes.CLEAR}
            onClick={handleButtonClick(viewType.view)}
          >
            <Icon SVG={viewType.icon} additionalClass={classNames("", { [styles.selected]: view === viewType.view })}/>
          </Button>
        );
      })}
    </div>
  );
};

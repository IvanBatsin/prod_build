import React, { type HTMLAttributeAnchorTarget } from "react";
import styles from "./ArticleList.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { List, type ListRowProps, WindowScroller } from "react-virtualized";
import { PAGE_ID } from "widgets/PageWrapper/PageWrapper";
import { type Article } from "entities/Article/model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleView } from "entities/Article/model/consts/consts";

type VirtualArticleListProps = CommonComponentProps & {
  articles: Article[]
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const VirtualArticleList: React.FC<VirtualArticleListProps> = (props) => {
  const { articles, target, view = ArticleView.BIG } = props;

  const rowRenderer = ({ index, key, style }: ListRowProps): JSX.Element => {
    const items = [];
    const fromIndex = index * itemPerRow;
    const toIndex = Math.min(fromIndex + itemPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          target={target}
          additionalClass={styles.list_item}
          article={articles[i]}
          view={view}
          key={articles[i].id}
        />
      );
    }

    return (
      <div key={key} style={style} className={styles.row}>
        {items}
      </div>
    );
  };

  const isBig = view === ArticleView.BIG;
  const itemPerRow = isBig ? 1 : 3;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemPerRow);

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({ height, width, scrollTop }) => {
        return (
          <List
            width={width ? width - 80 : 700}
            height={height ?? 700}
            rowHeight={isBig ? 700 : 330}
            rowRenderer={rowRenderer}
            rowCount={rowCount}
            autoHeight
            scrollTop={scrollTop}
          />
        );
      }}
    </WindowScroller>
  );
};

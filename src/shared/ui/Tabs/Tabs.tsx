import React from "react";
import styles from "./Tabs.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
  value: string
  content: React.ReactNode
}

type TabProps = CommonComponentProps & {
  tabs: TabItem[]
  value: string
  handleTabClick: (tab: TabItem) => void
}

export const Tabs: React.FC<TabProps> = (props) => {
  const { additionalClass, value, tabs, handleTabClick } = props;

  const handleTabClickWrapper = React.useCallback((tab: TabItem): () => void => {
    return () => { handleTabClick(tab) };
  }, [handleTabClick]);

  const renderTabs = React.useMemo(() => {
    return tabs.map(tab => {
      return <Card
              additionalClass={styles.cardItem}
              key={tab.value}
              theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
              onClick={handleTabClickWrapper(tab)}
            >
              {tab.content}
            </Card>;
    });
  }, [handleTabClickWrapper, tabs, value]);

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      {(tabs.length > 0) &&
       renderTabs
      }
    </div>
  );
};

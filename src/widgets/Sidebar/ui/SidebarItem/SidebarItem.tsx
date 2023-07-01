import React from "react";
import styles from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import type { SidebarItemType } from "widgets/Sidebar/model/SidebarItemType";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { item: { Icon, path, text }, collapsed } = props;
  const { t } = useTranslation();
  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={path} additionalClass={classNames(styles.item, { [styles.collapsed]: collapsed })}>
      <Icon className={styles.link_img}/>
      <span className={styles.link_item}>
        {t(text)}
      </span>
    </AppLink>
  );
};

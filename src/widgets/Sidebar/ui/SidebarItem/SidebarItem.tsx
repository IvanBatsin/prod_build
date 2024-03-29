import React from "react";
import styles from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import type { SidebarItemType } from "@/widgets/Sidebar/model/types/sidebarItems";

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { item: { Icon, path, text, authOnly }, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && authOnly) {
    return null;
  }

  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={path} additionalClass={classNames(styles.item, { [styles.collapsed]: collapsed })}>
      <Icon className={styles.link_img}/>
      <span className={styles.link_item}>
        {t(text)}
      </span>
    </AppLink>
  );
};

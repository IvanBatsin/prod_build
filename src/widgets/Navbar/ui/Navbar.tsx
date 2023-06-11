import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const { t } = useTranslation("aboutPage");

  return (
    <div className={classNames(styles.navbar, {}, [additionalClass])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"} additionalClass={styles.main_link}>{t("aboutLink")}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>{t("mainLink")}</AppLink>
      </div>
    </div>
  );
};
